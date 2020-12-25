import {Scalar, Scale, ScaleId, Unit, UnresolvedScale} from "./interfaces";
import {UnitWrapper} from "./operations";
import {parse} from "./parser";
import {scale} from "./scale";
import {stringify} from "./scale-definition";
import {unresolvedScaleSymbol} from "./symbols";

export function unit(scalar: Scalar, scale: Scale | ScaleId): Unit;
export function unit(strings: TemplateStringsArray, ...exps: string[]): Unit;
export function unit(first: TemplateStringsArray | number, ...extra: any): Unit {
  if (typeof first === 'number') {
    // scalar + definition
    const [scale] = extra;
    return new UnitWrapper(first, scale) as any;
  }

  if (Array.isArray(first)) {
    const joined = first.map((x, idx) => `${x}${extra[idx] ?? ''}`).join('');
    const { scalar, definition, name } = parse(joined);
    return new UnitWrapper(scalar, {[unresolvedScaleSymbol]: true, name, definition} as UnresolvedScale) as any;
  }

  throw new Error(`Unsupported params ${JSON.stringify([first, ...extra])}`);
}
