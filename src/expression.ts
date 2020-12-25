import {Scale} from "./scale";

export interface UnitExpression {
  readonly scalar: number;
  readonly scale: Scale;
}
export interface AddExpression {
  readonly operator: '+';
  readonly operands: Expression[];
}
export interface SubExpression {
  readonly operator: '-';
  readonly operands: [Expression, Expression];
}
export interface MulExpression {
  readonly operator: '*';
  readonly operands: [Expression, ...(Expression | number)[]];
}
export interface DivExpression {
  readonly operator: '/';
  readonly operands: [Expression, Expression | number];
}
export interface PowExpression {
  readonly operator: '^';
  readonly operands: [Expression, number];
}
export type Expression = UnitExpression | AddExpression | SubExpression | MulExpression | DivExpression | PowExpression;

export interface OperatorExpression {
  readonly operator: string;
  readonly operands: Expression[];
}
