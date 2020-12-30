const fetch = require('node-fetch');
const $ = require('cheerio');

async function get(url) {
  const cacheFile = url.replaceAll(/[^0-9a-z]/gi, '_');
  if (require('fs').existsSync(cacheFile)) {
    return require('fs').readFileSync(cacheFile).toString();
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed: ${response.statusCode}`);
  }
  const result = await response.text();
  require('fs').writeFileSync(cacheFile, result);
  return result;
}

function textOf(x) {
  if (!x) {
    return '';
  }

  if (Array.isArray(x)) {
    return x.map(textOf).join('');
  }
  if (x.type === 'text'){
    return x.data;
  }
  if (x.type === 'tag') {
    let {name} = x;
    switch (name) {
      case 'sup': return `^${textOf(x.children)}`;
      case 'sub': return `_${textOf(x.children)}_`;
      case 'a': name = 'i';
      default:
        return `<${name}>${textOf(x.children)}</${name}>`;
    }
  }
  return textOf(x.children);
}

const SHORTS = {
  "Bohr, atomic unit of length": "a₀",
  "Cable length (imperial)": 'cable (imp)',
  "Cable length (International)": "cable",
  "Cable length (US)": "cable (US)",
  "Link (Surveyor's)": "lnk (Surveyor)",
  "Link (Engineer's)": "lnk (Engineer)",
  "Link (Ramsden's)": "lnk (Ramsden)",
  "Point (American, English)": "pt (US)",
  "Point (Didot)": "pt (Didot)",
  "Point (PostScript)": "pt; pt (PostScript)",
  "Point (European)": "pt (EU)",
  "Point (TeX)": "pt (TeX)",

  "Square link (Gunter's)": 'sq lnk (Gunter)',
  "Square link (International)": 'sq lnk',
  "Square link (Ramsden's)": 'sq lnk (Ramsden)',
  "Strike (imperial)": "strike (imp)",
  "Dash (imperial)": "dash (imp)",
  "Dessertspoon (imperial)": "dessertspoon (imp)",

  "Quarter (imperial)": "quarter (imp)",
  "Quarter; pail": "pail",

  "Hundredweight (long)": "long cwt",
  "Dram (avoirdupois)": "dr av; dr",
  "Dram (troy)": "dr (troy)",
  "Grave": "gv",
  "Ounce (troy)": "oz (troy)",
  "Ounce (avoirdupois)": "oz av; oz",
  "Ounce (US food nutrition labelling)": 'oz (US food); oz (US)',
  "Pound (avoirdupois)": "lb av; lb; lbs"
}

function parseGroupAndParent(name, comment) {
  let group = comment.indexOf('metric') > 0 ? 'metric' : '';
  let parentUnit = ''
  if (name.indexOf(' (') > 0) {
    ([parentUnit, group] = name.replace(/\)$/, '').split(' ('));
    if (name.indexOf('metric') > 0) {
      group = 'metric';
    }
  }
  return {group, parentUnit};
}

function split(x, comma = true) {
  return (comma && x.indexOf(', ') >= 0
    ? x.split(', ') : x.indexOf(' or ') >= 0
      ? x.split(' or ') : x.split(';'))
    .map(x => x.trim())
    .filter(x => x)
}

function symbolsFor(name, symbols) {
  const fallback = name.trim()
    .replace(/^([A-Z])/, x => x.toLowerCase())
    .replace(/'s\)$/, ')')
    .replace('(imperial)', '(imp)')
  ;
  return SHORTS[name] != null ? split(SHORTS[name]) : symbols.length ? symbols : [fallback];
}

function parseName(name) {
  name = name.replaceAll(' or ', ';').replaceAll(' and ', ';');
  var i = 0;
  function current() { return name.charAt(i) }
  function eol() { return i >= name.length }
  function test(x) { return x.split('').some(x => current() === x) }
  function readToken() {
    let start = i;
    while (!eol() && !test(';()')) {
      ++i;
    }
    return name.substring(start, i).trim();
  }

  const r = [];
  while (!eol()) {
    const first = readToken();
    if (test(';')) {
      first && r.push(first);
      ++i;
      continue;
    }
    if (test('(')) {
      ++i;
      while (!eol() && !test(';')) {
        const second = readToken();
        r.push(`${first.trim()} (${second.trim()})`);
        if (test(';')) {
          ++i;
          continue;
        }
        break;
      }
      ++i;
      continue;
    } else if (test(')')) {
      ++i;
      continue;
    } else if (!eol()) {
      throw Error(`Unexpected ${JSON.stringify(current())} at ${i} of ${JSON.stringify(name)}`);
    }
    first && r.push(first);
    break;
  }
  return r;
}

function parseDef(def, link, kind) {

  def = def
    .replaceAll('<a>', '<i>')
    .replaceAll('</a>', '</i>')
    .replaceAll('≈', '≡')
    .replaceAll('=', '≡')
    .replaceAll('−', '-')
    .replaceAll(' x ', ' × ')
    .replaceAll(' x 1 ', ' × ')
    .replaceAll(' × 1 ', ' × ')
    .replaceAll(' ÷ 1 ', ' / ')

  let idx = 0;

  if (!def.startsWith('<b>')) {
    throw new Error(`Invalid definition ${JSON.stringify(def)}`);
  }
  const nameStart = def.indexOf('<b>', idx) + 3;
  const nameEnd = def.indexOf('</b>', nameStart);
  idx = nameEnd + 4;

  const symbolStart = def.indexOf('symbol: [', idx);
  let fullNameStart = def.indexOf('Definition of 1', idx) + 'Definition of 1'.length + 1;
  let definitionStart = fullNameStart + nameEnd - nameStart;

  const comment = def.substr(nameStart - 3);
  const nameStr = def.substring(nameStart, nameEnd).replaceAll(')(', '; ');
  const symbolsStr = symbolStart > 0 ? def.substring(symbolStart + 9, def.indexOf(']', symbolStart)) : '';

  const definition = def.substring(def.indexOf(' usually ', definitionStart) >= 0 ? def.indexOf(' usually ', definitionStart) + 9 : def.indexOf('≡', definitionStart) + 1 , (def.length + def.indexOf('. ', definitionStart)) % def.length)
    .replaceAll(/ x 10\^([-+]?\d+)/g, (s, power) => `e${power}`)
    .replaceAll(/x10\^([-+]?\d+)/g, (s, power) => `e${power}`)
    .replaceAll(/ × 10\^([-+]?\d+)/g, (s, power) => `e${power}`)
    .replaceAll(/×10\^([-+]?\d+)/g, (s, power) => `e${power}`)
    .replaceAll('1×10', '10')
    .replaceAll(/10\^([-+]?\d+)/g, (s, power) => `1e${power}`)
    .split('≡')
    .map(x => x.trim())
    .filter(x => x);

  let symbols = split(symbolsStr);

  const result = [];
  const names = parseName(nameStr);
  while (names.length) {
    const name = names.shift();
    result.push({
      comment,
      link,
      kind,
      ...parseGroupAndParent(name, comment),
      name,
      symbols: symbolsFor(name, symbols),
      definition,
    });
    symbols = [];
  }

  return result
}

async function scrapeScales(base, kind) {
  const html = await get(base);
  const urls = [];
  for(let node of $('#byname li a', html)) {
    const {href} = node.attribs;
    urls.push(`${base}${href}`);
  }
  const defs = [];
  let idx = 0;
  for(let url of urls) {
    console.log(`fetch ${++idx} of ${urls.length} ${url}`);
    const html = await get(url);
    const $title = $('h1', html)[0];
    const $p1 = $title.next.next;
    const $p2 = $p1.next;
    const desc2 = textOf($p2.children).split('\n').shift().replaceAll(' ', ' ').replaceAll(' ', ' ').replaceAll('−', '-');

    if (desc2.indexOf('of chiefly historical interest.') >= 0 || desc2.indexOf('old:') >= 0) {
      continue;
    }

    defs.push(...parseDef(desc2, url, kind));
  }

  return defs;
}

function toCSV(def) {
  return [def.name, def.kind, def.symbols.join(','), '', def.group, def.parentUnit, def.link, def.definition.join(' = '), def.comment]
    .map(x => (x.indexOf(';') >= 0 || x.indexOf('"') >= 0) ? JSON.stringify(x) : x)
    .join('; ');
}

async function main(args) {
  const areas = 'length area volume mass time speed acceleration frequency'.split(' ');
  for(let area of (args.length ? args : areas)) {
    console.log(`Scrapping ${area}...`);
    const defs = await scrapeScales(`http://conversion.org/${area}/`, area);
    const titles = '@title; @kind; @symbols; @abbr; @group; @parent; @link; @definition; @description';
    const content = [titles, ...defs.map(toCSV)];
    require('fs').writeFileSync(`../definitions/${area}.csv`, content.join('\n'));
  }
}

main(process.argv.slice(2)).catch(console.error);

