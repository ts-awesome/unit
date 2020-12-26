import {scale, unit} from "../scale";
import {liter} from "../SI/volume";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";
import {foot, inch} from "./length";

export const fluidOunce = scale('US fl oz', 'fl oz', 28.4130625, liter);
export const gill = scale('gill', 'gi', 5, fluidOunce);
export const pint = scale('pint', 'pt', 20, fluidOunce);
export const quart = scale('quart', 'qt', 40, fluidOunce);
export const gallon = scale('gallon', 'gal', 160, fluidOunce);

export const cubicFoot = scale('cubic foot', 'cu ft', 'ft3', unit(1, foot).pow(3));
export const cubicInch = scale('cubic inch', 'cu in', 'in3', unit(1, inch).pow(3));

export const teaspoon = scale('teaspoon (imperial)', 'tsp (imp)', 1/24, gill);
export const tablespoon = scale('tablespoon (imperial)', 'tbsp (imp)', 5/8, fluidOunce);

export const IMPERIAL_VOLUME: ScaleSystem = {
  fluidOunce,
  gill,
  pint,
  quart,
  gallon,

  cubicFoot,
  cubicInch,

  teaspoon,
  tablespoon,

  [scaleSystemNameSymbol]: 'Imperial volume',
}

export default IMPERIAL_VOLUME;
