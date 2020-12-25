import {Scale, ScaleId, Unit, UnresolvedScale} from "./interfaces";
import {Expression, OperatorExpression, UnitExpression} from "./expression";

//@ts-ignore
declare class UnitWrapper<T> implements Unit, UnitExpression {
  constructor(scalar: number, scale: Scale|ScaleId|UnresolvedScale);
}
//@ts-ignore
declare class Operandable<T> implements Unit, OperatorExpression {
  constructor(operator: '+'|'-'|'*'|'/'|'^', operands: Expression[]);
}

declare const SupportedOperations: any;

export {Operandable, UnitWrapper, SupportedOperations}
