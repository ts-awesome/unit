import {Scale, UnresolvedScale} from "./interfaces";
import {scaleSymbol, unresolvedScaleSymbol} from "./symbols";

export function clone<T>(x: T): T {
  return JSON.parse(JSON.stringify(x));
}

export function isScale(x: any): x is Scale {
  return x[scaleSymbol] === true;
}

export function isUnresolvedScale(x: any): x is UnresolvedScale {
  return x[unresolvedScaleSymbol] === true;
}
