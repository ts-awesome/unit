import {Scale, ScaleId, Unit, UnresolvedScale} from "./interfaces";
import {Expression, OperatorExpression, UnitExpression} from "./expression";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare class UnitWrapper implements Unit, UnitExpression {
  constructor(scalar: number, scale: Scale|ScaleId|UnresolvedScale);
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare class Operandable implements Unit, OperatorExpression {
  constructor(operator: '+'|'-'|'*'|'/'|'^', operands: Expression[]);
}

declare const SupportedOperations: any;

export {Operandable, UnitWrapper, SupportedOperations}
