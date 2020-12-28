function parse(path) {
  const lines = require('fs').readFileSync(path)
    .toString()
    .split('\n')
    .map(x => x.trim().replace(/^\* /, ''))
    .filter(x => x.startsWith('@summary') || x.startsWith('@description') || x.startsWith('@link') || x.indexOf('scale(') >= 0);

  function current() { return lines[0] ?? '' }
  function next() { return lines.shift() ?? '' }
  function match(starts) { return current().startsWith(starts) ? lines.shift().substr(starts.length).trim() : null }
  function extractScales() { return [current(), ... next().split('scale(').pop().replaceAll("'", '"').split('",').map(x => x.trim()).filter(x => x.startsWith('"') || x.startsWith("'")).map(x => x.replaceAll('"', '').replaceAll("'", ''))] }

  function parseOne() {
    const summary = match('@summary');
    const description = match('@description');
    const link = match('@link');
    while (current().indexOf('scale(') < 0) {
      next();
    }
    const [code, name, ...scales] = extractScales();
    while (current().indexOf('scale(') >= 0 && (current().indexOf('"' + name + '"') >= 0 || current().indexOf("'" + name + "'") >= 0)) {
      const [,next, ...aliases] = extractScales();
      if (name !== next) break;
      scales.push(...aliases)
    }
    return {
      name,
      link,
      summary,
      description,
      units: scales,
      code,
    }
  }

  const r = [];
  while (lines.length) {
    r.push(parseOne());
  }
  return r;
}

function gen(group) {
  const defs = parse(`../src/scales/${group}.ts`);

  const blocks = [`Units of ${group}\n===`];
  for(let {name, summary, description, link, units, code} of defs) {
    blocks.push(`${name}
---

> ${(description ?? '').replaceAll('<b>', '**').replaceAll('</b>', '**').replaceAll('<i>', '_').replaceAll('</i>', '_')}

[Source](${link}) 

##### Symbols:
- \`\`\`[${units.join(']\`\`\`\n- \`\`\`[')}]\`\`\`

##### Definition:
\`\`\`LaTex
${summary ?? ''}
\`\`\`

##### Code:
\`\`\`ts
${code}
\`\`\`


`
    );
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
