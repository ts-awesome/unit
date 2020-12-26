import {scale, unit} from "../scale";
import {kilometer, meter} from "./length";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const squareMeter = scale('square meter', 'm2', 'sq m', unit(1, meter).pow(2));
export const are = scale('are', 'a', unit(10, meter).pow(2));
export const hectare = scale('hectare', 'ha', unit(100, meter).pow(2));
export const squareKilometer = scale('square kilometer', 'km2', 'sq km', unit(1, kilometer).pow(2));

export const SI_AREA: ScaleSystem = {
  squareMeter,
  are,
  hectare,
  squareKilometer,

  [scaleSystemNameSymbol]: 'SI area',
}

export default SI_AREA;
