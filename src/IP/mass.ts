import {scale} from "../scale";
import {kilogram} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const pound = scale('pound', 'lb', 0.45359237, kilogram);
export const grain = scale('grain', 'gr', 1 / 7000, pound);
export const drachm = scale('drachm', 'dr', 1 / 256, pound);
export const ounce = scale('ounce', 'oz', 1 / 16, pound);
export const stone = scale('stone', 'st', 14, pound);
export const quarter = scale('quarter', 'qr', 'qtr', 28, pound);
export const hundredweight = scale('hundredweight', 'cwt', 112, pound);
export const ton = scale('ton', 't', 2240, pound);

export const slug = scale('slug', 32.17404856, pound);

export const IMPERIAL_MASS: ScaleSystem = {
  grain,
  drachm,
  ounce,
  pound,
  stone,
  quarter,
  hundredweight,
  ton,
  slug,

  [scaleSystemNameSymbol]: 'Imperial mass',
}

export default IMPERIAL_MASS;