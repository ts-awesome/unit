import {scale} from "../scale";
import {scaleSystemNameSymbol} from "../symbols";
import {fromLinear} from "../chainable";
import {kelvin} from "./fundamentals";

export const degreeCelsius = scale('degree Celsius', '°C', {
  absolute: true,
  scale: kelvin,
  ...fromLinear(1, +273.15),
});

export const deltaDegreeCelsius = scale('delta degree Celsius', 'Δ°C','d°C', 1, kelvin);

export const degreeFahrenheit = scale('degree Fahrenheit', '°F', {
  absolute: true,
  scale: degreeCelsius,
  ...fromLinear(5/9, -32 * 5 / 9),
});

export const deltaDegreeFahrenheit = scale('delta degree Fahrenheit', 'Δ°F', 'd°F', 5/9, kelvin);

export const TEMPERATURE_UNITS = {
  kelvin,
  degreeCelsius,
  deltaDegreeCelsius,
  degreeFahrenheit,
  deltaDegreeFahrenheit,

  [scaleSystemNameSymbol]: 'Temperature units',
};

export default TEMPERATURE_UNITS;
