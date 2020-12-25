import {Scalar, Scale, ScaleId, UnresolvedScale} from "./interfaces";

export interface UnitExpression {
  readonly scalar: Scalar;
  readonly scale: Scale|ScaleId|UnresolvedScale;
}
export interface AddExpression {
  readonly operator: '+';
  readonly operands: Expression[];
}
export interface SubExpression {
  readonly operator: '-';
  readonly operands: Expression[];
}
export interface MulExpression {
  readonly operator: '*';
  readonly operands: [Expression, ...(Expression | Scalar)[]];
}
export interface DivExpression {
  readonly operator: '/';
  readonly operands: [Expression, ...(Expression | Scalar)[]];
}
export interface PowExpression {
  readonly operator: '^';
  readonly operands: [Expression, Scalar];
}
export type Expression = UnitExpression | AddExpression | SubExpression | MulExpression | DivExpression | PowExpression;

export interface OperatorExpression {
  readonly operator: string;
  readonly operands: Expression[];
}
