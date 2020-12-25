// 1 rod × 1 rod
import {scale, unit} from "../scale";
import {foot, rod, yard} from "./length";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const perch = scale('perch', unit(1, rod).pow(2));
export const squareFoot = scale('square foot', 'sq ft', unit(1, foot).pow(2));
export const squareYard = scale('square yard', 'sq yd', unit(1, yard).pow(2));
export const rood = scale('rood', 40, perch);
export const acre = scale('acre', 160, perch);

export const IMPERIAL_AREA: ScaleSystem = {
  squareFoot,
  squareYard,

  perch, // 1 rod × 1 rod
  rood,
  acre,

  [scaleSystemNameSymbol]: 'Imperial area',
}

export default IMPERIAL_AREA;
