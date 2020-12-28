import {scale, unit} from "../scale";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";
import {mul} from "../operators";

export const second = scale('second', 's', 'sec', true);
export const metre = scale('metre', 'm', true);
export const kilogram = scale('kilogram', 'kg', true);
export const ampere = scale('ampere', 'A', true);
export const kelvin = scale('kelvin', 'K', 'K', true);
export const mole = scale('mole', 'mol', true);
export const candela = scale('candela', 'cd', true);


/**
 * @summary 1 g₀ = 1 Standard gravity = 9.80665 m / s²
 * @description <b>Standard gravity</b>. The standard acceleration due to gravity (or standard acceleration of free fall), sometimes abbreviated as standard gravity, usually denoted by ɡ0 or ɡn, is the nominal gravitational acceleration of an object in a vacuum near the surface of the Earth. It is defined by standard as 9.80665 m/s2 (about 32.17405 ft/s2).
 * @link https://en.wikipedia.org/wiki/Standard_gravity
 */
export const g0 = scale('g₀', 'g0', 'g₀', mul(unit(1, metre), unit(1, second).pow(-2), 9.80665));


/**
 * @summary 1 с = 1 Speed of light = 299792458 m / s
 * @description <b>Speed of light</b>. The speed of light in vacuum, commonly denoted c, is a universal physical constant important in many areas of physics. Its exact value is defined as 299792458 metres per second (approximately 300000 km/s, or 186000 mi/s).
 * @link https://en.wikipedia.org/wiki/Speed_of_light
 */
export const SpeedOfLight = scale('Speed of light', 'с0', 'с₀', mul(unit(1, metre), unit(1, second).pow(-1), 299792458));


export const FUNDAMENTALS: ScaleSystem = {
  second,
  metre,
  kilogram,
  ampere,
  kelvin,
  mole,
  candela,

  g0,
  SpeedOfLight,

  [scaleSystemNameSymbol]: 'Fundamentals',
}

export default FUNDAMENTALS;
