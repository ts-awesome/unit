import {scale} from "../scale";
import {liter} from "../SI/volume";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const fluidOunce = scale('fluid ounce', 'fl', 28.4130625, liter);
export const gill = scale('gill', 'gi', 5, fluidOunce);
export const pint = scale('pint', 'pt', 20, fluidOunce);
export const quart = scale('quart', 'qt', 40, fluidOunce);
export const gallon = scale('gallon', 'gal', 160, fluidOunce);

export const IMPERIAL_VOLUME: ScaleSystem = {
  fluidOunce,
  gill,
  pint,
  quart,
  gallon,

  [scaleSystemNameSymbol]: 'Imperial volume',
}

export default IMPERIAL_VOLUME;
