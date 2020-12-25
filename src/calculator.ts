import {Unit} from "./interfaces";
import {Scale, ScaleSystem} from "./scale";

import {compile as compileExpr} from './compiler';
import {Expression} from "./expression";

export interface Calculator {
  (expr: Unit, scale: Scale, precision?: number): number;
}

export function compile(...scales: (Scale | ScaleSystem)[]): Calculator {
  return (expr, scale, precision = 3) => {
    const e = compileExpr(expr as any as Expression);
    // TODO check units

    const scalar = e.to(1);

    if (typeof scale === 'string') {
      return parseFloat(scalar.toFixed(precision))
    }

    return parseFloat(scale.from(scalar).toFixed(precision));
  }
}
