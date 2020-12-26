import {scale} from "../scale";
import {kilogram} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const ounce = scale('ounce (US food nutrition labelling)', 'oz', 0.028, kilogram);

export const US_MASS: ScaleSystem = {
  ounce,

  [scaleSystemNameSymbol]: 'US mass',
}

export default US_MASS;
