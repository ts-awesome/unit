import {Expression, UnitExpression} from "./expression";
import {Scalar, ScaleDefinition, ScaleId, UnresolvedScale} from "./interfaces";
import {isScale, isUnresolvedScale} from "./utils";
import {chain, Chainable, fromLinear} from "./chainable";
import {equal, mul, pow, simplify, stringify} from "./scale-definition";

export interface CompiledExpression extends Chainable{
  readonly definition: ScaleDefinition;
}

interface Resolver {
  (scale: ScaleId|UnresolvedScale): CompiledExpression;
}

function compileAdd(expr: Expression[], resolver?: Resolver): CompiledExpression {
  const [first, ...operands] = expr.map(x => compile(x, resolver));

  const {definition} = first;
  for (let {definition: _} of operands) {
    if (!equal(_, definition)) {
      throw new Error(`Can not add units of '${stringify(definition)}' to '${stringify(_)}'`)
    }
  }
  const scalar = operands.reduce((x, {to}) => x + to(1), first.to(1));
  return {
    definition: simplify(definition),
    ...fromLinear(scalar),
  }
}

function compileSub(expr: Expression[], resolver?: Resolver): CompiledExpression {
  const [first, ...operands] = expr.map(x => compile(x, resolver));

  const {definition} = first;
  for (let {definition: _} of operands) {
    if (!equal(_, definition)) {
      throw new Error(`Can not sub units of '${stringify(definition)}' to '${stringify(_)}'`)
    }
  }
  const scalar = operands.reduce((x, {to}) => x - to(1), first.to(1));
  return {
    definition: simplify(definition),
    ...fromLinear(scalar),
  }
}

function wrapMul(first: CompiledExpression, ...operands: CompiledExpression[]) {
  const definition = mul(first.definition, ...operands.map(_ => _.definition));
  const scalar = operands.reduce((x, {to}) => x * to(1), first.to(1));
  return {
    definition,
    ...fromLinear(scalar),
  }
}

function compileMul(expr: [Expression, ...(Expression | Scalar)[]], resolver?: Resolver): CompiledExpression {
  const [first, ...operands] = expr.map(x => compile(x, resolver));

  return wrapMul(first, ...operands);
}

function compileDiv(expr: [Expression, ...(Expression | Scalar)[]], resolver?: Resolver): CompiledExpression {
  const [first, ...operands] = expr.map(x => compile(x, resolver));

  const definition = mul(first.definition, ...operands.map(_ => pow(_.definition, -1)));
  const scalar = operands.reduce((x, {to}) => x / to(1), first.to(1));
  return {
    definition,
    ...fromLinear(scalar),
  }
}

function wrapPow(op: CompiledExpression, power: number): CompiledExpression {
  const definition = pow(op.definition, power);
  return {
    definition,
    to(x) {
      return x * Math.pow(op.to(1), power);
    },
    from(y) {
      return y / Math.pow(op.from(1), -power);
    },
  }
}

function compilePow(expr: Expression, power: Scalar) {
  return wrapPow(compile(expr), power);
}

function compileUnit({scalar, scale: unresolved}: UnitExpression, resolver: Resolver | undefined) {
  let scale: CompiledExpression;
  if (typeof unresolved === 'string' || isUnresolvedScale(unresolved)) {
    if (typeof resolver !== 'function') {
      throw new Error(`Please provide resolver to use ScaleId refs`);
    }

    scale = resolver(unresolved);
  } else if (isScale(unresolved)) {
    scale = unresolved
  } else {
    throw new Error(`Unexpected scale value ${JSON.stringify(unresolved)}`);
  }

  return {
    definition: simplify(scale.definition),
    ...chain(scale, fromLinear(scalar)),
  }
}

export function compile(expr: Expression | number, resolver?: Resolver): CompiledExpression {
  if (typeof expr === 'number') {
    return {
      definition: {},
      ...fromLinear(expr),
    }
  }

  if (!expr) {
    throw new Error(`Param expr expected, received ${JSON.stringify(expr)}`);
  }

  if ('scalar' in expr) {
    return compileUnit(expr, resolver);
  }

  switch (expr.operator) {
    case '+': return compileAdd(expr.operands, resolver);
    case '-': return compileSub(expr.operands, resolver);
    case '*': return compileMul(expr.operands, resolver);
    case '/': return compileDiv(expr.operands, resolver);
    case '^': return compilePow(...expr.operands);
  }

  throw new Error();
}

export function compileDefinition(definition: ScaleDefinition, resolver: Resolver): CompiledExpression {
  const keys = Object.keys(definition);
  if (keys.length > 0) {
    const operands = keys.map(key => wrapPow(resolver(key), definition[key]));
    return wrapMul(...(operands as [CompiledExpression, ...CompiledExpression[]]));
  }

  return {
    definition,
    ...fromLinear(0),
  }
}
