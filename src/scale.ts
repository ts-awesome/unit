import {Convert, Scalar, Scale, ScaleDefinition, ScaleId, Unit} from "./interfaces";
import {compile} from "./compiler";
import {Expression} from "./expression";
import {chain, fromScalar} from "./chainable";
import {clone, isScale} from "./utils";
import {simplify} from "./scale-definition";
import {UnitWrapper} from "./operations";
import {scaleSymbol} from "./symbols";

export function scale(name: ScaleId, fundamental: true): Scale;
export function scale(name: ScaleId, unit: Unit): Scale;
export function scale(name: ScaleId, convert: Convert): Scale;
export function scale(name: ScaleId, scalar: Scalar, scale: Scale): Scale;
export function scale(name: ScaleId, scalar: Scalar, definition: ScaleDefinition): Scale;
export function scale(name: ScaleId, short: ScaleId, fundamental: true): Scale;
export function scale(name: ScaleId, short: ScaleId, unit: Unit): Scale;
export function scale(name: ScaleId, short: ScaleId, convert: Convert): Scale;
export function scale(name: ScaleId, short: ScaleId, scalar: Scalar, scale: Scale): Scale;
export function scale(name: ScaleId, short: ScaleId, scalar: Scalar, definition: ScaleDefinition): Scale;
export function scale(name: ScaleId, short: ScaleId, alt: ScaleId, fundamental: true): Scale;
export function scale(name: ScaleId, short: ScaleId, alt: ScaleId, unit: Unit): Scale;
export function scale(name: ScaleId, short: ScaleId, alt: ScaleId, convert: Convert): Scale;
export function scale(name: ScaleId, short: ScaleId, alt: ScaleId, scalar: Scalar, scale: Scale): Scale;
export function scale(name: ScaleId, short: ScaleId, alt: ScaleId, scalar: Scalar, definition: ScaleDefinition): Scale;
export function scale(name: string, ...params: any[]): Scale {
  const aliases: string[] = [];
  while (typeof params[0] === 'string') {
    aliases.push(params.shift());
  }

  if (params[0] === true) {
    return {
      [scaleSymbol]: true,
      name,
      aliases,
      definition: { [name]: 1 },
      fundamental: true,

      ...fromScalar(1),
    }
  }

  if (typeof params[0] === 'number') {
    const [scalar, scale] = params as [number, Scale | ScaleDefinition];

    if (scalar === 0) {
      throw Error('Scale scalar should be non-zero');
    }

    if (!scale || typeof scale !== 'object') {
      throw new Error('Param scale expected to be Scale or ScaleDefinition');
    }

    if (isScale(scale)) {
      return {
        [scaleSymbol]: true,
        name,
        aliases,
        definition: simplify(scale.definition),
        fundamental: false,

        ...chain(scale, fromScalar(scalar)),
      }
    }

    return {
      [scaleSymbol]: true,
      name,
      aliases,
      definition: scale as ScaleDefinition,
      fundamental: false,
      ...fromScalar(scalar),
    }
  }

  if (typeof params[0]?.to === 'function') {
    const [convert] = params as [Convert];
    const {scale} = convert;

    return {
      [scaleSymbol]: true,
      name,
      aliases,
      definition: clone(scale.definition),
      fundamental: false,

      ...chain(scale, convert),
    }
  }

  return {
    [scaleSymbol]: true,
    name,
    aliases,
    fundamental: false,
    ...compile(params[0] as Expression),
  }
}

export function unit(scalar: Scalar, scale: Scale): Unit {
  return new UnitWrapper(scalar, scale) as any;
}
