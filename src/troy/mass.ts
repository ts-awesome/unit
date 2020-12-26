import {scale} from "../scale";
import {kilogram} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const pound = scale('pound (troy)', 'lb t', 0.3732417216, kilogram);
export const ounce = scale('ounce (troy)', 'oz t', 1 / 12, pound);

export const TROY_MASS: ScaleSystem = {
  ounce,
  pound,

  [scaleSystemNameSymbol]: 'Troy mass',
}

export default TROY_MASS;
