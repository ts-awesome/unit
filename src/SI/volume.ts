import {scale, unit} from "../scale";
import {centimeter, decimeter, meter} from "./length";
import {scaleSystemNameSymbol} from "../symbols";

export const cubicMeter = scale('cubic meter', 'm3', 'cu m', unit(1, meter).pow(3));
export const cubicCentimeter = scale('cubic centimeter', 'cm3', 'cu cm', unit(1, centimeter).pow(3));
export const liter = scale('liter', 'l', unit(1, decimeter).pow(3));
export const milliliter = scale('milliliter', 'ml', 1 / 1000, liter);

export const teaspoon = scale('teaspoon (metric)', 'tsp (metric)', 5, milliliter);
export const tablespoon = scale('tablespoon (metric)', 'tbsp (metric)', 15, milliliter);

export const SI_VOLUME = {
  milliliter,
  liter,
  cubicCentimeter,
  cubicMeter,

  teaspoon,
  tablespoon,

  [scaleSystemNameSymbol]: 'SI volume',
}

export default SI_VOLUME;
