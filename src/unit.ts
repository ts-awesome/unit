import {Unit} from "./interfaces";
import {Scale} from "./scale";
import {UnitWrapper} from "./operations";
import {parse} from "./parser";

export function unit(scalar: number, scale: Scale): Unit;
export function unit(strings: TemplateStringsArray, ...exps: string[]): Unit;
export function unit(first: TemplateStringsArray | number, ...extra: any): Unit {
  if (typeof first === 'number') {
    // scalar + scale
    const [scale] = extra;
    return new UnitWrapper(first, scale) as any;
  }

  if (Array.isArray(first)) {
    const joined = first.map((x, idx) => `${x}${extra[idx] ?? ''}`).join('');
    const { scalar, scale } = parse(joined);
    return new UnitWrapper(scalar, scale) as any;
  }

  throw new Error(`Unsupported params ${JSON.stringify([first, ...extra])}`);
}

export type Parser = typeof unit;
