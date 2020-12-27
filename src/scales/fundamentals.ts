import {scale} from "../scale";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const second = scale('second', 's', 'sec', true);
export const meter = scale('meter', 'm', true);
export const kilogram = scale('kilogram', 'kg', true);
export const ampere = scale('ampere', 'A', true);
export const kelvin = scale('kelvin', 'K', 'K', true);
export const mole = scale('mole', 'mol', true);
export const candela = scale('candela', 'cd', true);

export const FUNDAMENTALS: ScaleSystem = {
  second,
  meter,
  kilogram,
  ampere,
  kelvin,
  mole,
  candela,

  [scaleSystemNameSymbol]: 'Fundamentals',
}

export default FUNDAMENTALS;
