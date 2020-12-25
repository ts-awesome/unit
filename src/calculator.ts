import {Calculator, Scale, ScaleId, ScaleSystem, UnresolvedScale} from "./interfaces";
import {compile as compileExpr, compileDefinition, CompiledExpression} from './compiler';
import {Expression} from "./expression";
import {equal, stringify} from "./scale-definition";
import {isScale, isUnresolvedScale} from "./utils";
import {scaleSystemNameSymbol} from "./symbols";

export function compile(...scales: (Scale | ScaleSystem)[]): Calculator {
  const names: ScaleSystem = {};

  function define(name: string, scale: Scale, scaleSystem?: string): void {
    if (names[name] && names[name] !== scale) {
      throw new Error(`Scale ${JSON.stringify(name)} is ambiguous${scaleSystem ? ' in ' + scaleSystem : ''}`);
    }
    names[name] = scale;
  }

  function use(aliases: string[], scale: Scale, scaleSystem?: string): void {
    for (let alias of aliases) {
      define(alias, scale, scaleSystem);
    }
  }

  for(let scaleOrSystem of scales) {
    if (isScale(scaleOrSystem)) {
      const {name, aliases} = scaleOrSystem;
      use([name, ...aliases], scaleOrSystem);
    } else {
      const scaleSystemName: string = (scaleOrSystem as any)[scaleSystemNameSymbol];
      for(let key of Object.keys(scaleOrSystem)) {
        const scale = scaleOrSystem[key];
        const {name, aliases} = scale;
        use([key, name, ...aliases], scale, `${scaleSystemName ?? 'Unknown'}.${key}`);
      }
    }
  }

  function resolver(name: ScaleId|UnresolvedScale): CompiledExpression {
    if (isUnresolvedScale(name)) {
      const {definition} = name;
      return compileDefinition(definition, resolver);
    }
    if (!names[name]) {
      throw new Error(`Undefined scale ${JSON.stringify(name)}.`);
    }
    return names[name];
  }

  return (expr, scale, precision = 3) => {
    const e = compileExpr(expr as any as Expression, resolver);

    let res = typeof scale === 'string' ? resolver(scale) : scale;

    if (!equal(e.definition, res.definition)) {
      throw new Error(`Calculation expected '${stringify(res.definition)}' and resulting '${stringify(e.definition)}' scales not match`);
    }

    const scalar = e.to(1);

    return parseFloat(res.from(scalar).toFixed(precision));
  }
}
