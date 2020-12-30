import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

import FUNDAMENTALS from "./fundamentals";
import SI from "./SI";
import LENGTH_UNITS from "./length";
import AREA_UNITS from "./area";
import VOLUME_UNITS from "./volume";
import MASS_UNITS from "./mass";
import TEMPERATURE_UNITS from "./temperature";
import TIME_UNITS from "./time";
import ENERGY_UNITS from "./energy";

export const ALL: ScaleSystem = {
  ...FUNDAMENTALS,
  ...SI,
  ...LENGTH_UNITS,
  ...AREA_UNITS,
  ...VOLUME_UNITS,
  ...MASS_UNITS,
  ...TEMPERATURE_UNITS,
  ...TIME_UNITS,
  ...ENERGY_UNITS,

  [scaleSystemNameSymbol]: 'ALL',
}

export default ALL;
