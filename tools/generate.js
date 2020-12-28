const {parse} = require('../dist/parser');

const SI = {
  second: 's',
  metre: 'm',
  kilogram: 'kg',
  ampere: 'A',
  kelvin: 'K',
  mole: 'mol',
  candela: 'cd',

  radian: 'rad',
  steradian: 'sr',
  hertz: 'Hz',
  newton: 'N',
  pascal: 'Pa',
  joule: 'J',
  watt: 'W',
  coulomb: 'C',
  volt: 'V',
  farad: 'F',
  ohm: '',
  siemens: 'S',
  weber: 'Wb',
  tesla: 'T',
  henry: 'H',
  lumen: 'lm',
  lux: 'lx',
  becquerel: 'Bq',
  gray: 'Gy',
  sievert: 'Sv',
  katal: 'kat',

  g0: 'ɡ0',

  SpeedOfLight: 'c₀',

  degreeCelsius: '°C',
}

function asc(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function parseUnitDefs(defs) {
  return defs
    .map(x => {
      try {
        return parse(x)
      } catch (e) {
        return null
      }
    })
    .filter(x => x)
    .sort((a, b) => asc(Object.keys(a).length, Object.keys(b).length));
}

function parseDef(def) {

  def = def
    .replaceAll('<a>', '<i>')
    .replaceAll('</a>', '</i>')
    .replaceAll('≈', '≡')
    .replaceAll('=', '≡')
    .replaceAll('−', '-')
    .replaceAll('<sub>0</sub>', '₀')
    .replaceAll('<sub>1</sub>', '₁')
    .replaceAll('<sub>2</sub>', '₂')
    .replaceAll('<sup>2</sup>', '²')
    .replaceAll('<sup>3</sup>', '³')
    .replaceAll(/ x 10<sup>([-+]?\d+)<\/sup>/g, (s, power) => `e${power}`)
    .replaceAll(/x10<sup>([-+]?\d+)<\/sup>/g, (s, power) => `e${power}`)
    .replaceAll(/ × 10<sup>([-+]?\d+)<\/sup>/g, (s, power) => `e${power}`)
    .replaceAll(/×10<sup>([-+]?\d+)<\/sup>/g, (s, power) => `e${power}`)
    .replaceAll(/10<sup>([-+]?\d+)<\/sup>/g, (s, power) => `1e${power}`)
    .replaceAll(' x ', ' × ')
    .replaceAll(' x 1', ' × ')
    .replaceAll(' × 1', ' × ')
    .replaceAll(' ÷ 1', ' / ')
    .replaceAll('1×10', '10')

  let idx = 0;

  if (!def.startsWith('<link>')) {
    throw new Error(`Invalid definition ${JSON.stringify(def)}`);
  }
  idx += 6;
  const linkStart = idx;
  const linkEnd = def.indexOf('</link>', idx);
  idx = linkEnd + 6;
  const nameStart = def.indexOf('<b>', idx) + 3;
  const nameEnd = def.indexOf('</b>', nameStart);
  idx = nameEnd + 4;
  const symbolStart = def.indexOf('symbol: [', idx);
  let fullNameStart = def.indexOf('Definition of 1', idx) + 'Definition of 1'.length + 1;
  let definitionStart = fullNameStart + nameEnd - nameStart;

  const comment = def.substr(nameStart - 3);
  const link = def.substring(linkStart, linkEnd);
  const name = def.substring(nameStart, nameEnd);
  const symbol = (
    SHORTS[name] ||
    (symbolStart > 0 ? def.substring(symbolStart + 9, def.indexOf(']', symbolStart)) : '').replace("''", '').trim() ||
    def.substr(fullNameStart, name.length)
  ).split(';').map(x => x.trim());

  return {
    comment,
    link,
    name,
    symbol,
    def: parseUnitDefs(def.substring(def.indexOf('≡', definitionStart) + 1, (def.length + def.indexOf('. ', definitionStart)) % def.length)
      .split('≡')
      .map(x => x.trim())),
  }
}

function varName(x) {
  return (x)
    .replace('<sub>0</sub>', '0')
    .replaceAll('µ', 'mk')
    .replaceAll('å', 'a')
    .replaceAll('ö', 'o')
    .replaceAll('/', '_per_')
    .replaceAll(/\W/g, '_')
    .replaceAll(/[_]{2,}/g, '_')
    .replaceAll(/_$/g, '')
    .replaceAll(/_([a-z])/g, (s, l) => l.toUpperCase());
}

function isSI(x) {
  return Object.keys(SI).indexOf(x) >=0 || Object.values(SI).indexOf(x) >=0;
}

const FUNDAMENTALS = [
]

const MAPPINGS = {
  'in (In England usually)': 'in',
  'light-seconds': 'light-second',
  'light-minutes': 'light-minute',
  'light-hours': 'light-hour',
  'light-days': 'light-day',
  'US Survey feet': 'ft (US)',
  'foot (US Survey)': 'ft (US)',
  'points': 'pt',
  'inch': 'in',

  'acre': 'ac',
  'ac (variable)': 'ac',

  'ml': 'mL',
  'gal (wine)': 'gal (US)',
  'US gal': 'gal (US)',
  'gal (US fl)': 'gal (US)',
  'bu (imperial)': 'bu (imp)',
  'US lvl bu': 'bu (US lvl)',

  'short ton': 'sh tn',
  'long ton': 'ton',
  'lb': 'lb av',
  'grains': 'gr',
}

const ALIASES = {
  'lb av': ['lb', 'lbs'],
  'oz av': ['oz'],
  'dr av': ['dr'],
  'om (old)': ['bicron', 'stigma'],
  "long cwt": ['cwt']
}

const SHORTS = {
  "Cable length (imperial)": 'cable (imp)',
  "Cable length (International)": "cable",
  "Cable length (US)": "cable (US)",

  "Strike (imperial)": "strike (imp)",
  "Dash (imperial)": "dash (imp)",
  "Dessertspoon (imperial)": "dessertspoon (imp)",

  "Quarter (imperial)": "quarter (imp)",
  "Quarter; pail": "pail",

  "Hundredweight (long)": "long cwt"
}

const otherModules = {
}

for(let unit of Object.keys(SI)) {
  otherModules[SI[unit]] = [unit, './SI'];
}

function safeKey(x) {
  return x.replaceAll('µ', 'micro').replaceAll('µ', 'micro').replaceAll('μ', 'micro');
}

async function main() {
  const areas = 'length area volume mass'.split(' '); // time speed acceleration frequency
  for(let area of areas) {
    const defs = [];

    const lines = require('fs').readFileSync(`./scrapped/${area}.txt`)
      .toString()
      .split('\n')
      .map(x => x.trim())
      .filter(x => x);
    for(let line of lines) {
      if (line.indexOf('of chiefly historical interest.') >= 0) {
        continue;
      }

      defs.push(parseDef(line));
    }

    let compiledCode = [];
    const defined = {};
    const names = [];
    const imports_ = [];
    while(defs.length) {
      let currentDef = defs.shift();
      let {comment, name, symbol, link, def} = currentDef;
      const [primary, ...aliases] = symbol;

      if (isSI(name) || isSI(primary)) {
        continue
      }

      let compiled = null;
      if (FUNDAMENTALS.indexOf(name) >= 0) {
        compiled = 'true'
      } else {
        let missing = []
        outer: for (let {scalar, definition} of def) {
          const units = []
          for (let scale of Object.keys(definition)) {
            const power = definition[scale]

            if (MAPPINGS[safeKey(scale)]) {
              scale = MAPPINGS[safeKey(scale)]
            }

            if (!defined[safeKey(scale)]) {
              if (!otherModules[safeKey(scale)]) {
                missing.push(scale)

                continue outer
              }

              imports_.push(otherModules[safeKey(scale)])
            }

            const unit = `unit(1, ${defined[safeKey(scale)] ?? otherModules[safeKey(scale)][0]})`
            units.push(power === 1 ? unit : `pow(${unit}, ${power})`)
          }

          compiled = `mul(${units.join(', ')}, ${scalar})`
        }

        if (!compiled) {
          console.log(`delay compile`, JSON.stringify(link), JSON.stringify(primary), 'cause missing', JSON.stringify(missing), currentDef)
          defs.push(currentDef)
          continue
        }
      }

      const primaryVar = varName(name);
      compiledCode.push(`/** 
 * @summary 1 ${primary} = ${def.map(x => x.def).join(' = ')}
 * @description ${comment}
 * @link ${link}
 */
export const ${primaryVar} = scale(${JSON.stringify(name)}, ${[primary, ... (ALIASES[primary] ?? [])].map(JSON.stringify).join(', ')}, ${compiled});`)
      names.push(varName(name));
      defined[safeKey(primary)] = primaryVar;
      otherModules[safeKey(primary)] = [primaryVar, `./${area}`];

      for(let alias of aliases) {
        const aliasVar = varName(name) + '__' + varName(alias);
        defined[safeKey(alias)] = aliasVar;
        otherModules[safeKey(alias)] = [aliasVar, `./${area}`];
        names.push(aliasVar);
        compiledCode.push(`export const ${aliasVar} = scale(${JSON.stringify(name)}, ${JSON.stringify(alias)}, ${compiled});`);
      }

      compiledCode.push('');
    }

    const importBlocks = {};
    for(let [v, path] of imports_) {
      importBlocks[path] = importBlocks[path] ?? [];
      if (importBlocks[path].indexOf(v) < 0) {
        importBlocks[path].push(v);
      }
    }

    let content = `import {scale, unit} from "../scale";
import {mul, pow} from '../operators';
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

${Object.keys(importBlocks).map(path => `import {${importBlocks[path].join(', ')}} from '${path}'`).join('\n')}

${compiledCode.join('\n')}

export const ${area.toUpperCase()}_UNITS: ScaleSystem = {
${names.map(name => `  ${name},`).join('\n')}

  [scaleSystemNameSymbol]: "${area} units",
}
    
export default ${area.toUpperCase()}_UNITS;`

    require('fs').writeFileSync(`../src/scales/${area}.ts`, content);
  }
}

main().catch(console.error);
