import {Unit} from "./interfaces";
import {FundamentalScale} from "./fundamentals";
import {ScalePower} from "./scale";
import {Expression, OperatorExpression, UnitExpression} from "./expression";

//@ts-ignore
declare class UnitWrapper<T> implements Unit, UnitExpression {
  constructor(scalar: number, scale: Record<FundamentalScale, ScalePower>);
}
//@ts-ignore
declare class Operandable<T> implements Unit, OperatorExpression {
  constructor(operator: '+'|'-'|'*'|'/'|'^', operands: Expression[]);
}

declare const SupportedOperations: any;

export {Operandable, UnitWrapper, SupportedOperations}
