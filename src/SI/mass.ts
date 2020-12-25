import {scale} from "../scale";
import {kilogram} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const gram = scale('gram', 'g', 1 / 1000, kilogram);
export {kilogram};
export const metricTon = scale('metric ton', 1000, kilogram);

export const SI_MASS: ScaleSystem = {
  gram,
  kilogram,
  metricTon,

  [scaleSystemNameSymbol]: 'SI mass',
}

export default SI_MASS;
