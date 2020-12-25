import {scale, unit} from "../scale";
import {decimeter} from "./length";
import {scaleSystemNameSymbol} from "../symbols";

export const liter = scale('liter', 'l', unit(1, decimeter).pow(3));
export const milliliter = scale('milliliter', 'ml', 1 / 1000, liter);

export const SI_VOLUME = {
  milliliter,
  liter,

  [scaleSystemNameSymbol]: 'SI volume',
}

export default SI_VOLUME;
