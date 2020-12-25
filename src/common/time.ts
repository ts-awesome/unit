import {scale} from "../scale";
import {measureOfTime} from "../fundamentals";

export const second = scale('second', 's', 'sec', 1, measureOfTime);
export const millisecond = scale('millisecond', 'ms', 1 / 1000, second);
export const minute = scale('minute', 'min', 60, second);
export const hour = scale('hour', 'h', 3600, second);
