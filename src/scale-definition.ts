import {Power, ScaleDefinition} from "./interfaces";
import {clone} from "./utils";

export function simplify<T=ScaleDefinition>(def: T): T {
  const x = clone(def);
  for (let key of Object.keys(x)) {
    if (x[key] === 0) {
      delete x[key];
    }
  }
  return x;
}

export function equal<T=ScaleDefinition>(a: T, b: T): boolean {
  const keys = Object.keys(a).filter(key => a[key] !== 0);
  if (keys.length !== Object.keys(b).filter(key => b[key] !== 0).length) {
    return false;
  }

  for (let key of keys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

export function powerToString(x: Power) {
  switch (x) {
    case -3:
      return '⁻³';
    case -2:
      return '⁻²';
    case -1:
      return '⁻¹';
    case 0:
      return '⁰';
    case 1:
      return '';
    case 2:
      return '²';
    case 3:
      return '³';
    default:
      return `^${x}`
  }
}

function asc(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

export function stringify(x: ScaleDefinition): string {
  const keys = Object.keys(x).filter(key => x[key] !== 0).sort(asc);
  return keys.length === 0 ? '<scalar>' : keys.map(key => `${key}${powerToString(x[key])}`).join(' × ');
}

export function pow<T=ScaleDefinition>(def: T, power: Power): T {
  const x = clone(def);
  for (let key of Object.keys(x)) {
    x[key] *= power;
  }
  return simplify(x);
}

export function mul<T=ScaleDefinition>(...multipliers: T[]): T {
  const x: T  = {} as T;
  for (let multiplier of multipliers) {
    for (let key of Object.keys(multiplier)) {
      x[key] = (x[key] ?? 0) + (multiplier[key] ?? 0);
    }
  }
  return simplify<T>(x);
}
