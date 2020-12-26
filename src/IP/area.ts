// 1 rod × 1 rod
import {scale, unit} from "../scale";
import {foot, inch, link, mile, rod, yard} from "./length";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const squareInch = scale('square inch', 'sq in', 'in2', unit(1, inch).pow(2));
export const squareFoot = scale('square foot', 'sq ft', 'ft2', unit(1, foot).pow(2));
export const squareYard = scale('square yard', 'sq yd', 'yd2', unit(1, yard).pow(2));
export const squareMile = scale('square mile', 'sq mi', 'mi2', unit(1, mile).pow(2));
export const squareLink = scale('square link', 'sq lnk', 'lnk2', unit(1, link).pow(2));

export const perch = scale('perch', unit(1, rod).pow(2));
export const rood = scale('rood', 40, perch);
export const acre = scale('acre', 160, perch);

export const IMPERIAL_AREA: ScaleSystem = {
  squareInch,
  squareFoot,
  squareYard,
  squareMile,

  perch, // 1 rod × 1 rod
  rood,
  acre,

  [scaleSystemNameSymbol]: 'Imperial area',
}

export default IMPERIAL_AREA;
