import {Calculator, Scale, ScaleId, ScaleSystem, UnresolvedScale} from "./interfaces";
import {compile as compileExpr, compileDefinition, CompiledExpression} from './compiler';
import {Expression} from "./expression";
import {equal, simplify, stringify} from "./scale-definition";
import {isScale, isUnresolvedScale} from "./utils";
import {scaleSystemNameSymbol} from "./symbols";
import {fromLinear} from "./chainable";

export function compile(...scales: (Scale | ScaleSystem)[]): Calculator {
  const names: ScaleSystem = {};

  function define(name: string, scale: Scale, scaleSystem: string): void {
    if (names[name] && names[name] !== scale) {
      throw new Error(`Scale alias ${JSON.stringify(name)} defined by ${names[name].name} is redefined by ${scale.name} of ${scaleSystem}`);
    }
    names[name] = scale;
  }

  function use(scale: Scale, scaleSystem: string): void {
    const {aliases} = scale;
    for (const alias of aliases) {
      define(alias, scale, scaleSystem);
    }
  }

  let idx = 0;
  for (const scaleOrSystem of scales) {
    idx++;
    if (isScale(scaleOrSystem)) {
      use(scaleOrSystem, `@${idx - 1}`);
    } else {
      const scaleSystemName: string = (scaleOrSystem as any)[scaleSystemNameSymbol];
      for(const key of Object.keys(scaleOrSystem)) {
        const scale = scaleOrSystem[key];
        use(scale, `${scaleSystemName ?? 'Unknown'}.${key}`);
      }
    }
  }

  function resolver(name: ScaleId|UnresolvedScale): CompiledExpression {
    if (isUnresolvedScale(name)) {
      const definition = simplify(name.definition);
      const [first, ...others] = Object.keys(definition);
      if (others.length === 0 && definition[first] === 1) {
        return resolver(first);
      }

      return compileDefinition(definition, resolver);
    }
    if (!names[name]) {
      throw new Error(`Undefined scale ${JSON.stringify(name)}.`);
    }
    return names[name];
  }

  return (expr, scale, precision = 3) => {
    const e = compileExpr(expr as any as Expression, resolver);

    const res = scale === '' ? {definition: {}, ...fromLinear(1)} : typeof scale === 'string' ? resolver(scale) : scale;

    if (!equal(e.definition, res.definition)) {
      throw new Error(`Calculation expected '${stringify(res.definition)}' and resulting '${stringify(e.definition)}' scales not match`);
    }

    const scalar = e.to(1);

    return parseFloat(res.from(scalar).toFixed(precision));
  }
}
