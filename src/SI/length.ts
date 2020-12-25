import {scale} from "../scale";
import {meter} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const millimeter = scale('millimeter', 'mm', 1 / 1000, meter);
export {meter};
export const kilometer = scale('kilometer', 'km', 1000, meter);
export const decimeter = scale('decimeter', 'dm', 1 / 10, meter);
export const centimeter = scale('centimeter', 'cm', 1 / 100, meter);

export const SI_LENGTH: ScaleSystem = {
  millimeter,
  centimeter,
  decimeter,
  meter,
  kilometer,

  [scaleSystemNameSymbol]: 'SI length',
}

export default SI_LENGTH;
