export function parse(str: string): any {
  // noinspection ES6ConvertVarToLetConst
  var i = 0; // WARN: MUST be var to be captured by reference

  function current() { return str.charAt(i); }
  function test(x: string | RegExp) { return typeof x === 'string' ? x.split('').indexOf(current()) >= 0 : x.test('' + current()); }
  function eol() { return i >= str.length; }
  function next() { ++i; return current(); }

  function skipSign() { test('+-') && next() }
  function skipDigits() { while (!eol() && test('0123456789')) next() }
  function skipSpaces() { while (!eol() && test(' ')) next() }

  function error(desc: string) { throw new Error(`ParseError @${i}: ${desc}`) }

  function parseScalar() {
    skipSign();
    skipDigits();
    if (test('.')) {
      next();
      skipDigits();
    }

    if (test('e')) {
      next();
      skipSign();
      skipDigits();
    }

    return parseFloat(str.substring(0, i));
  }

  function readIdentifier() {
    skipSpaces();
    let start = i;
    while (!eol() && test(/[a-z ]/i)) {
      next();
    }
    return str.substring(start, i).trim();
  }

  function readInteger() {
    let start = i;
    skipSign();
    skipDigits();
    return parseInt(str.substring(start, i + 1), 10);
  }

  function parsePower(mul = 1): [string, number] {
    let term: any = readIdentifier();
    skipSpaces();
    let power = 1;
    if (test('^²³')) {
      if (test('²')) {
        next();
        power = 2
      } else if (test('³')) {
        next();
        power = 3
      } else {
        next();
        skipSpaces();
        power = readInteger();
      }
    }
    return [term, power * mul];
  }

  function parseMul(mul = 1) {
    const terms: [string, number][] = [];
    while (!eol()) {
      terms.push(parsePower(mul));
      skipSpaces();
      if (test('/') || eol()) break;
      if (!test('*×.')) {
        error('expected operation * or × or .');
      }
      next();
    }
    return terms;
  }

  function parseScale() {
    let scale: any = parseMul(1);
    if (test('/')) {
      next();
      scale = [...scale, ...parseMul(-1)];
    }
    return scale.reduce((a: Record<string, number>, [key, value]: [string, number]) => {
      a[key] = (a[key] ?? 0) + value;
      return a;
    }, {});
  }

  const scalar = parseScalar();
  const scale = parseScale();

  if (!eol()) {
    error('expected end of scale definition');
  }

  return {
    scalar,
    scale,
  }
}

// console.log(parse('9.8m'));
// console.log(parse('10 sq ft'));
// console.log(parse('-9.8 m'));
// console.log(parse('-9.8 m²'));
// console.log(parse('-9.8 m ²'));
// console.log(parse('-9.8 m² '));
// console.log(parse('+9.8e-2 m'));
// console.log(parse('9.8 m/s²'));
// console.log(parse('5 lbs / sq ft'));
// console.log(parse('9.8 m / s²'));
// console.log(parse('9.8 m / s ²'));
// console.log(parse('6.6743e-11 m³/kg×s²'));
// console.log(parse('6.6743e-11 m³ / kg × s²'));
// console.log(parse('6.6743e-11 m ^ 3 * kg ^ -1 * s ^ -2'));
// try { parse('6.6743e-11 m ^ 3 / kg / s ^ 2') } catch (e) {console.log(e)};
