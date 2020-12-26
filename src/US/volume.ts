import {scale, unit} from "../scale";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";
import {cubicInch} from "../IP/volume";

export const gallon = scale('gallon (US fluid; Wine)', 'gal (US)', 231, cubicInch);

export const fluidOunce = scale('ounce (fluid imperial)', 'US fl oz', 1/128, gallon);
export const gill = scale('gill (US)', 'gi (US)', 4, fluidOunce);
export const pint = scale('pint (US fluid)', 'pt (US fl)', 1/8, gallon);
export const quart = scale('quart (US fluid)', 'qt (US)', 1/4, gallon);

export const teaspoon = scale('teaspoon (US customary)', 'tsp (US)', 1/6, fluidOunce);
export const tablespoon = scale('tablespoon (US customary)', 'tbsp (US)', 1/2, fluidOunce);


export const US_VOLUME: ScaleSystem = {
  fluidOunce,
  gill,
  pint,
  quart,
  gallon,

  teaspoon,
  tablespoon,

  [scaleSystemNameSymbol]: 'US volume',
}

export default US_VOLUME;
