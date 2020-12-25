import {scale, ScaleSystem} from "../scale";
import {hour, millisecond, minute, second} from "../common/time";
import {
  acre,
  cable,
  chain,
  degreeFahrenheit,
  drachm,
  fathom,
  fluidOunce,
  foot,
  furlong,
  gallon,
  gill,
  grain,
  hundredweight,
  inch,
  league,
  link,
  mile,
  nauticalMile,
  ounce,
  perch,
  pint,
  pound,
  quart,
  quarter,
  rod,
  rood, slug,
  squareFoot,
  squareYard,
  stone,
  thou,
  ton,
  yard
} from "./units";

export const IMPERIAL_LENGTH: ScaleSystem = {
  thou,
  inch, // 1000 thou
  foot, // 12 inches
  yard, // 3 feet,
  chain, // 22 yards
  furlong, // 10 chains
  mile, // 8 furlongs
  league, // 3 miles

  // maritime
  fathom, // 2.02667 yards
  cable, // 100 fathoms
  nauticalMile, // 10 cables

  // Gunter's survey units (17th century onwards)
  link,
  rod,
}

export const IMPERIAL_AREA: ScaleSystem = {
  squareFoot,
  squareYard,

  perch, // 1 rod × 1 rod
  rood: rood,
  acre: acre,
}

export const IMPERIAL_VOLUME: ScaleSystem = {
  fluidOunce,
  gill: gill,
  pint: pint,
  quart: quart,
  gallon: gallon,
}

export const IMPERIAL_MASS: ScaleSystem = {
  grain,
  drachm,
  ounce,
  pound,
  stone,
  quarter,
  hundredweight,
  ton,
  slug,
}

export const IP: ScaleSystem = {
  ...IMPERIAL_LENGTH,
  ...IMPERIAL_AREA,
  ...IMPERIAL_VOLUME,
  ...IMPERIAL_MASS,

  second,
  // Extra time
  millisecond,
  minute,
  hour,

  degreeFahrenheit,
}

export default IP;
