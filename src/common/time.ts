import {scale} from "../scale";
import {second} from "./fundamentals";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

export const millisecond = scale('millisecond', 'ms', 1 / 1000, second);
export {second};
export const minute = scale('minute', 'min', 60, second);
export const hour = scale('hour', 'h', 3600, second);

export const TIME: ScaleSystem = {
  millisecond,
  second,
  minute,
  hour,

  [scaleSystemNameSymbol]: 'Common time',
}
export default TIME;
