import FUNDAMENTALS from "../common/fundamentals";
import SI_LENGTH from "./length";
import SI_MASS from "./mass";
import SI_AREA from "./area";
import SI_VOLUME from "./volume";
import TIME from "../common/time";
import SI_TEMPERATURE from "./temperature";
import SI_PHYSICS from "./physics";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const SI: ScaleSystem = {
  ...FUNDAMENTALS,
  ...TIME,
  ...SI_LENGTH,
  ...SI_AREA,
  ...SI_VOLUME,
  ...SI_MASS,
  ...SI_TEMPERATURE,
  ...SI_PHYSICS,

  [scaleSystemNameSymbol]: 'SI',
}

export default SI;
