import TIME from "../common/time";
import {IMPERIAL_LENGTH} from "./length";
import {IMPERIAL_AREA} from "./area";
import {IMPERIAL_VOLUME} from "./volume";
import {IMPERIAL_MASS} from "./mass";
import IMPERIAL_TEMPERATURE from "./temperature";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const IMPERIAL: ScaleSystem = {
  ...TIME,
  ...IMPERIAL_LENGTH,
  ...IMPERIAL_AREA,
  ...IMPERIAL_VOLUME,
  ...IMPERIAL_MASS,
  ...IMPERIAL_TEMPERATURE,

  [scaleSystemNameSymbol]: 'Imperial',
}

export default IMPERIAL;
