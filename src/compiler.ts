import {AddExpression, DivExpression, Expression, MulExpression, SubExpression} from "./expression";
import {ScalePower} from "./scale";

export interface CompiledExpression {
  readonly scale: Record<string, ScalePower>;
  to(scalar: number): number;
  from(scalar: number): number;
}

function compileAdd(expr: AddExpression) {
  const [first, ...operands] = expr.operands.map(compile);

  const {scale} = first;
  for (let {scale: _} of operands) {
    if (!equal(_, scale)) {
      throw new Error(`Can not add units of '${stringify(scale)}' to '${stringify(_)}'`)
    }
  }
  const scalar = operands.reduce((x, {to}) => x + to(1), first.to(1));
  return {
    scale,
    to(x) {
      return x * scalar
    },
    from(x) {
      return x / scalar
    },
  }
}

function compileSub(expr: SubExpression) {
  const [first, ...operands] = expr.operands.map(compile);

  const {scale} = first;
  for (let {scale: _} of operands) {
    if (!equal(_, scale)) {
      throw new Error(`Can not sub units of '${stringify(scale)}' to '${stringify(_)}'`)
    }
  }
  const scalar = operands.reduce((x, {to}) => x - to(1), first.to(1));
  return {
    scale,
    to(x) {
      return x * scalar
    },
    from(x) {
      return x / scalar
    },
  }
}

function compileMul(expr: MulExpression) {
  const [first, ...operands] = expr.operands.map(compile);

  const scale = clone(first.scale);
  for (let {scale: _} of operands) {
    for(let key of Object.keys(_)) {
      scale[key] = (scale[key] ?? 0) + _[key];
    }
  }
  simplify(scale);
  const scalar = operands.reduce((x, {to}) => x * to(1), first.to(1));
  return {
    scale,
    to(x) {
      return x * scalar
    },
    from(x) {
      return x / scalar
    },
  }
}

function compileDiv(expr: DivExpression) {
  const [first, ...operands] = expr.operands.map(compile);

  const scale = clone(first.scale);
  for (let {scale: _} of operands) {
    for(let key of Object.keys(_)) {
      scale[key] = (scale[key] ?? 0) - _[key];
    }
  }
  simplify(scale);
  const scalar = operands.reduce((x, {to}) => x / to(1), first.to(1));
  return {
    scale,
    to(x) {
      return x * scalar
    },
    from(x) {
      return x / scalar
    },
  }
}

export function compile(expr: Expression | number): CompiledExpression {
  if (typeof expr === 'number') {
    return {
      scale: {},
      to(x) { return expr * x },
      from(x) { return x / expr },
    }
  }

  if (!expr) {
    throw new Error(`Param expr expected, received ${JSON.stringify(expr)}`);
  }

  if ('scalar' in expr) {
    const {scalar, scale} = expr;

    if (typeof scale === 'string') {
      return {
        scale: {
          [scale]: 1,
        },
        to(x) { return scalar * x },
        from(x) { return x / scalar },
      }
    }

    return {
      scale: clone(scale.scale),
      to(x) { return scale.to(scalar * x) },
      from(x) { return scale.from(x) / scalar },
    }
  }

  switch (expr.operator) {
    case '+': return compileAdd(expr);
    case '-': return compileSub(expr);
    case '*': return compileMul(expr);
    case '/': return compileDiv(expr);
    case '^':
      const op = compile(expr.operands[0]);
      const power = expr.operands[1];
      const scale = clone(op.scale);
      for(let key of Object.keys(scale)) {
        scale[key] *= power;
      }
      simplify(scale);
      return {
        scale,
        to(x) {
          return x * Math.pow(op.to(1), power);
        },
        from(x) {
          return x / Math.pow(op.from(1), -power);
        },
      }
  }

  throw new Error();
}

function power(x: number) {
  switch (x) {
    case 1: return '';
    case 2: return '²';
    case 3: return '³';
    default:
      return `^${x}`
  }
}
function stringify(x) {
  return Object.keys(x).map(key => `${key}${power(x[key])}`).join(' × ') || JSON.stringify(x);
}

function equal(a, b) {
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) {
    return false;
  }

  for(let key of keys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

function clone<T>(x:T): T {
  return JSON.parse(JSON.stringify(x));
}

function simplify(x: Record<string, number>) {
  for (let key of Object.keys(x)) {
    if (x[key] === 0) {
      delete x[key];
    }
  }
}
