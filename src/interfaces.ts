export interface Unit {
  add(b: this): this;
  sub(b: this): this;
  mul(b: this): this;
  mul(scalar: number): this;
  div(b: this): this;
  div(scalar: number): this;
  pow(power: number): this;
}
