import {FundamentalScale} from "./fundamentals";
import {Unit} from "./interfaces";
import {compile} from "./compiler";
import {Expression} from "./expression";

export type ScalePower = number;

export type Scale = FundamentalScale | {
  readonly name: string;
  readonly aliases: string[];
  readonly scale: Record<string, ScalePower>;
  to(scalar: number): number;
  from(scalar: number): number;
};

export interface Convert {
  readonly scale: Scale;
  to(scalar: number): number;
  from(scalar: number): number;
}

export function scale(name: string, unit: Unit): Scale;
export function scale(name: string, convert: Convert): Scale;
export function scale(name: string, scalar: number, scale: Scale | string): Scale;
export function scale(name: string, fundamental: true): Scale;
export function scale(name: string, short: string, unit: Unit): Scale;
export function scale(name: string, short: string, convert: Convert): Scale;
export function scale(name: string, short: string, scalar: number, scale: Scale | string): Scale;
export function scale(name: string, short: string, fundamental: true): Scale;
export function scale(name: string, short: string, alt: string, unit: Unit): Scale;
export function scale(name: string, short: string, alt: string, convert: Convert): Scale;
export function scale(name: string, short: string, alt: string, scalar: number, scale: Scale | string): Scale;
export function scale(name: string, short: string, alt: string, fundamental: true): Scale;
export function scale(name: string, ...params: any[]): Scale {
  const aliases: string[] = [];
  while (typeof params[0] === 'string') {
    aliases.push(params.shift());
  }

  if (typeof params[0] === 'number') {
    const [scalar, scale] = params as [number, Scale | string];

    if (scalar === 0) {
      throw Error('Scale scalar should be non-zero');
    }

    if (typeof scale === 'string') {
      // based on fundamental
      return {
        name,
        aliases,
        scale: {
          [scale]: 1
        },

        to(x) { return scalar * x },
        from(x) { return x / scalar },
      }
    }

    return {
      name,
      aliases,
      scale: clone(scale.scale),

      to(x) { return scale.to(scalar * x) },
      from(x) { return scale.from(x) / scalar },
    }
  }

  if (typeof params[0]?.to === 'function') {
    const [convert] = params as [Convert];
    const {scale} = convert;

    if (typeof scale === 'string') {
      // based on fundamental
      return {
        name,
        aliases,
        scale: {
          [scale]: 1
        },

        to: convert.to,
        from: convert.from,
      }
    }

    return {
      name,
      aliases,
      scale: clone(scale.scale),

      to(x) { return scale.to(convert.to(x)) },
      from(x) { return convert.from(scale.from(x)) },
    }
  }

  return {
    name,
    aliases,
    ...compile(params[0] as Expression),
  }
}

export type ScaleSystem = Record<string, Scale>;

function clone<T>(x:T): T {
  return JSON.parse(JSON.stringify(x));
}
