import {Scalar} from "./interfaces";

export interface Chainable {
  to(x: Scalar): Scalar;
  from(y: Scalar): Scalar;
}

export function chain(...convert: Chainable[]): Chainable {
  return {
    to: (x) => convert.reduceRight((_, {to}) => to(_), x),
    from: (y) => convert.reduce((_, {from}) => from(_), y),
  }
}

export function fromLinear(k: Scalar = 1, b: Scalar = 0): Chainable {
  return {
    to: (x) =>  k * x + b,
    from: (y) => (y - b) / k,
  }
}
