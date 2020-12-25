import {scale, unit} from "../scale";
import {decimeter} from "./length";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const hectare = scale('hectare', 'ha', unit(1, decimeter).pow(2));

export const SI_AREA: ScaleSystem = {
  hectare,

  [scaleSystemNameSymbol]: 'SI area',
}

export default SI_AREA;
