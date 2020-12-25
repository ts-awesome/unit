import {Scalar} from "./interfaces";

export interface Chainable {
  to(scalar: Scalar): Scalar;
  from(scalar: Scalar): Scalar;
}

export function chain(...convert: Chainable[]): Chainable {
  return {
    to(x) {
      return convert.reduceRight((_, {to}) => to(_), x)
    },
    from(x) {
      return convert.reduce((_, {from}) => from(_), x)
    },
  }
}

export function fromScalar(scalar: Scalar): Chainable {
  return {
    to(x) {
      return scalar * x
    },
    from(x) {
      return x / scalar
    },
  }
}
