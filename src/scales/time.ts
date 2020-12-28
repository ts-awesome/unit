import {scale} from "../scale";
import {second} from "./fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

/**
 * @summary 1 blink ≈ 0.25 s.
 * @description <b>Blink</b> is  <i>time</i> unit. Definition of 1 blink ≈ 0.25 s. Human blink duration ranges from 0.1 to 0.4 seconds. Blink time is calculated as average of this range, and this value is a quarter of a second..
 * @link http://conversion.org/time/blink/
 */
export const blink = scale('Blink', 'blink', 1 / 4, second);

/**
 * @summary 1 century ≡ 100 years (Gregorian). = 365.2425 × 100 × 86400 seconds
 * @description <b>Century</b> is  <a>time</a> unit, symbol: [c]. Definition of 1 century ≡ 100 years (Gregorian). = 365.2425 × 100 × 86400 seconds.
 * @link http://conversion.org/time/century/
 */
export const century = scale('Century', 'century', 365.2425 * 100 * 86400, second);

/**
 * @summary 1 day = 24 h = 1440 min
 * @description <b>Day</b> is  <i>time</i> unit, symbol: [d]. Definition of 1 day = 24 h = 1440 min. One day (solar day) is period of time from noon to noon = 24 hours. A solar day is the time it takes for the Earth to rotate about its axis so that the Sun appears in the same position in the sky. 24 [h] × 3600 [s] = 86.4 [ks] = 86400 [s].
 * @link http://conversion.org/time/day/
 */
export const day = scale('Day', 'day', 86400, second);

/**
 * @summary 1 decade ≡ 10 years (Gregorian). = 365.2425 × 10 × 86400 seconds.
 * @description <b>Decade</b> is  <a>time</a> unit, symbol: [dec]. Definition of 1 decade ≡ 10 years (Gregorian). = 365.2425 × 10 × 86400 seconds.
 * @link http://conversion.org/time/decade/
 */
export const decade = scale('Decade', 'decade', 365.2425 * 10 * 86400, second);



export const millisecond = scale('millisecond', 'ms', 1 / 1000, second);
export {second};
export const minute = scale('minute', 'min', 60, second);
export const hour = scale('hour', 'h', 3600, second);

export const TIME_UNITS: ScaleSystem = {
  millisecond,
  second,
  minute,
  hour,

  [scaleSystemNameSymbol]: 'Common time',
}
export default TIME_UNITS;
