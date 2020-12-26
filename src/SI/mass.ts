import {scale} from "../scale";
import {kilogram} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const gram = scale('gram', 'g', 1 / 1000, kilogram);
export const decagram = scale('decagram', 'dag', 1 / 100, kilogram);
export const centigram = scale('centigram', 'cg', 1 / 100, gram);
export const milligram = scale('milligram', 'mg', 1 / 1000, gram);
export {kilogram};
export const tonne = scale('tonne', 't', 1000, kilogram);

export const SI_MASS: ScaleSystem = {
  milligram,
  centigram,
  gram,
  decagram,
  kilogram,
  tonne,

  [scaleSystemNameSymbol]: 'SI mass',
}

export default SI_MASS;
