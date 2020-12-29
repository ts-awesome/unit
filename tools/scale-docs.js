function parse(path) {
  const lines = require('fs').readFileSync(path)
    .toString()
    .split('\n')
    .map(x => x.trim())
    .filter(x => x.startsWith('* @') || x.indexOf('scale(') >= 0)
    .map(x => x.replace(/^\* /, ''));

  function current() { return lines[0] ?? '' }
  function next() { return lines.shift() ?? '' }
  function match(starts) { return current().startsWith(starts) ? lines.shift().substr(starts.length).trim() : null }
  function extractScales() { return [current(), ... next().split('scale(').pop().replaceAll("'", '"').split('",').map(x => x.trim()).filter(x => x.startsWith('"') || x.startsWith("'")).map(x => x.replaceAll('"', '').replaceAll("'", ''))] }

  function parseOne() {
    const def = {};
    while (current().startsWith('@')) {
      const [key, ...rest] = next().substring(1).split(' ');
      def[key] = rest.join(' ');
    }
    const [code, name, ...scales] = extractScales();
    while (current().indexOf('scale(') >= 0 && (current().indexOf('"' + name + '"') >= 0 || current().indexOf("'" + name + "'") >= 0)) {
      const [,next, ...aliases] = extractScales();
      if (name !== next) break;
      scales.push(...aliases)
    }
    return {
      ...def,
      name,
      units: scales,
      code,
    }
  }

  const r = [];
  while (lines.length) {
    r.push(parseOne());
  }

  return ['SI', 'fundamentals'].every(p => path.indexOf(p) < 0) ? r.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())) : r
}

function gen(group) {
  const defs = parse(`../src/scales/${group}.ts`);

  const blocks = [`Units of ${group}\n===`];
  for(let {name, summary, description, link, units, code} of defs) {
    const block = [name + `\n---\n`]
    if (description) {
      block.push('> ' + (description ?? '').replaceAll('<b>', '**').replaceAll('</b>', '**').replaceAll('<i>', '_').replaceAll('</i>', '_') + '\n');
    }
    if (link) {
      block.push(`[Source](${link})\n`);
    }

    block.push(`##### Units:\n`);
    for(let unit of units) {
      block.push('- ```[' + unit + ']```\n');
    }

    if (summary) {
      block.push(`##### Summary:\n`);
      block.push('```LaTeX');
      block.push(summary);
      block.push('```\n');
    }

    block.push(`##### Code:\n`);
    block.push('```ts');
    block.push((code.endsWith('{') ? `${code} /* definition */ });` : code).replace(/^export /, ''));
    block.push('```\n');

    blocks.push(block.join('\n'));
  }

  require('fs').writeFileSync(`../docs/${group}-units.md`, blocks.join('\n\n'));
}

async function main() {
  const groups = 'fundamentals SI length area volume mass time temperature'.split(' ');
  for(let group of groups) {
    gen(group);
  }
}

main().catch(console.error);
