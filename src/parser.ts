import {Scalar, ScaleDefinition} from "./interfaces";

export interface ParsedExpression {
  readonly scalar: Scalar;
  readonly definition: ScaleDefinition;
  readonly name: string;
  readonly def: string;
}

export function parse(str: string): ParsedExpression {
  // noinspection ES6ConvertVarToLetConst
  // eslint-disable-next-line no-var
  var i = 0; // WARN: MUST be var to be captured by reference

  function current() { return str.charAt(i); }
  function test(x: string | RegExp) { return typeof x === 'string' ? x.split('').indexOf(current()) >= 0 : x.test('' + current()); }
  function eol() { return i >= str.length; }
  function next() { ++i; return current(); }
  function match(...args: string[]): string | false {
    for(const arg of args) {
      if (str.substr(i, arg.length) === arg) {
        i += arg.length;
        return arg;
      }
    }
    return false;
  }

  function skipSign() { test('+-') && next() }
  function skipDigits() { while (!eol() && test('0123456789')) next() }
  function skipSpaces() { while (!eol() && test(' ')) next() }

  function error(desc: string) { throw new Error(`ParseError @${i}: ${desc}`) }

  function parseScalar() {
    skipSpaces();
    const start = i;
    const sign = test('-') ? -1 : 1;
    skipSign();

    let whole;
    if (match('PI', 'π')) {
      whole = Math.PI * sign;
    } else {
      skipDigits();
      whole = parseInt(str.substring(start, i), 10);
    }

    if (test('/⁄')) {
      next();
      return whole / readFloat();
    }

    if (test(' ')) {
      // maybe fractions

      skipSpaces();

      if (test('0123456789')) {
        const top = readInteger();
        skipSpaces();
        if (!test('/⁄')) {
          error('expected fractions divider /');
        }
        next();
        skipSpaces();
        const bottom = readInteger();

        return whole + (top / bottom);
      }

      return whole;
    }

    if (test('.')) {
      next();
      skipDigits();
    }

    if (test('e')) {
      next();
      skipSign();
      skipDigits();
    }

    return parseFloat(str.substring(start, i));
  }

  function readIdentifier(): string {
    skipSpaces();

    if (match('[')) {
      const start = i;
      while (!eol() && !test(']')) {
        next();
      }

      if (!test(']')) {
        error('expected closing ]');
      }
      next();

      return str.substring(start, i - 1).trim();
    }

    if (test('0123456789')) {
      error('unexpected scalar')
    }

    const start = i;
    while (!eol() && !test('^¹²³⁻*×.·/')) {
      next();
    }

    return str.substring(start, i).trim();
  }

  function readInteger(): number {
    const start = i;
    skipSign();
    skipDigits();
    return parseInt(str.substring(start, i + 1), 10);
  }

  function readFloat(): number {
    if (match('PI', 'π')) {
      return Math.PI;
    }

    const start = i;
    if (test('-+')) {
      error('unexpected ' + current());
    }
    skipDigits();
    if (test('.')) {
      next();
      skipDigits();
    }
    return parseFloat(str.substring(start, i + 1));
  }

  function parsePower(mul = 1): [string, number] {
    const term: string = readIdentifier();
    skipSpaces();
    let power = 1;
    if (test('^¹²³⁻')) {
      if (test('⁻')) {
        next();
        mul *= -1;
      }
      if (test('¹')) {
        next();
        power = 1
      } else if (test('²')) {
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
      if (!test('*×.·')) {
        error('expected operation * or × or . or ·');
      }
      next();
    }
    return terms;
  }

  function parseScale(): ScaleDefinition {
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

  const scalar = match('√') ? Math.sqrt(parseScalar()) : parseScalar();
  const defStart = i;
  const definition = parseScale();

  if (!eol()) {
    error('expected end of definition');
  }

  return {
    scalar,
    definition,
    name: str.substr(defStart).trim(),
    def: str,
  }
}
