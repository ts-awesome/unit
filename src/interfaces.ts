import {Chainable} from "./chainable";
import {scaleSymbol, unresolvedScaleSymbol} from "./symbols";

export type Scalar = number;
export type Power = number;

export interface Unit {
  add(b: this): this;
  sub(b: this): this;
  mul(b: this): this;
  mul(scalar: Scalar): this;
  div(b: this): this;
  div(scalar: Scalar): this;
  pow(power: Power): this;
}

export type ScaleId = string;
export type ScaleDefinition = Record<ScaleId, Power>;

export interface Scale extends Chainable {
  readonly [scaleSymbol]: true;
  readonly name: ScaleId;
  readonly aliases: ScaleId[];
  readonly definition: ScaleDefinition;
  readonly fundamental: boolean;
  readonly absolute: boolean;
}

export interface UnresolvedScale {
  readonly [unresolvedScaleSymbol]: true;
  readonly name: string;
  readonly definition: ScaleDefinition;
}

export interface Convert extends Chainable {
  readonly absolute?: true;
  readonly scale: Scale;
}

export type ScaleSystem = Record<ScaleId, Scale>;

export interface Parser {
  (scalar: Scalar, scale: Scale): Unit;
  (strings: TemplateStringsArray, ...exps: string[]): Unit;
}

export interface Calculator {
  (expr: Unit, scale: Scale | ScaleId, precision?: number): Scalar;
}
