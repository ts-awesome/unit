import {scale} from "../scale";
import {kilogram} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const pound = scale('pound (avoirdupois)', 'lb', 'lb av', 0.45359237, kilogram);
export const grain = scale('grain', 'gr', 1 / 7000, pound);
export const drachm = scale('drachm', 'dr', 1 / 256, pound);
export const ounce = scale('ounce (avoirdupois)', 'oz av', 1 / 16, pound);
export const stone = scale('stone', 'st', 14, pound);
export const quarter = scale('quarter', 'qr', 'qtr', 28, pound);
export const hundredweight = scale('hundredweight', 'cwt', 112, pound);
export const tonLong = scale('ton, long', 'tn', 'ton', 2240, pound);
export const tonShort = scale('ton, short', 'sh tn', 2000, pound);

export const slug = scale('slug', 32.17404856, pound);

export const IMPERIAL_MASS: ScaleSystem = {
  grain,
  drachm,
  ounce,
  pound,
  stone,
  quarter,
  hundredweight,
  tonLong,
  tonShort,
  slug,

  [scaleSystemNameSymbol]: 'Imperial mass',
}

export default IMPERIAL_MASS;
