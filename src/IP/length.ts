import {scale} from "../scale";
import {meter} from "../common/fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

// Defined as exactly 0.9144 metres in 1959
export const yard = scale('yard', 'yd', 0.9144, meter);
export const foot = scale('foot', 'ft', "'", 1 / 3, yard);

export const thou = scale('thou', 'th', 1 / 12000, foot);
export const inch = scale('inch', 'in', '"', 1 / 12, foot);
export const chain = scale('chain', 'ch', 66, foot);
export const furlong = scale('furlong', 'fur', 660, foot);
export const mile = scale('mile', 'mi', 5280, foot);
export const league = scale('league', 'lea', 15840, foot);

// 2.02667 yards
export const fathom = scale('fathom', 2.02667, yard);
export const cable = scale('cable', 100, fathom);
export const nauticalMile = scale('nautical mile', 10, cable);

export const link = scale('link', 'lnk', 66 / 100, foot);
export const rod = scale('rod', 25, link);  // 25 links

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

  [scaleSystemNameSymbol]: 'Imperial length',
}
