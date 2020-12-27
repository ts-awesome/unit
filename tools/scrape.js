const fetch = require('node-fetch');
const $ = require('cheerio');

async function get(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed: ${response.statusCode}`);
  }
  return await response.text();
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
    return `<${x.name}>${textOf(x.children)}</${x.name}>`;
  }
  return textOf(x.children);
}

async function scrapeScales(base) {
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
    const [desc2] = textOf($p2.children).split('\n');
    defs.push(('<link>' + url + '</link>') + (desc2.replaceAll(' ', ' ').replaceAll(' ', ' ').replaceAll('−', '-')));
  }

  return defs;
}

async function main() {
  const areas = 'length area volume mass time speed acceleration frequency'.split(' ');
  for(let area of areas) {
    console.log(`Scrapping ${area}...`);
    const defs = await scrapeScales(`http://conversion.org/${area}/`);
    require('fs').writeFileSync(`./${area}.txt`, defs.join('\n'));
  }
}

main().catch(console.error);

