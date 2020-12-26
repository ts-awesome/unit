import {scale} from "../scale";
import {scaleSystemNameSymbol} from "../symbols";
import {fromLinear} from "../chainable";
import {degreeCelsius, kelvin} from "../SI/temperature";

export const degreeFahrenheit = scale('degree Fahrenheit', '°F', {
  absolute: true,
  scale: degreeCelsius,
  ...fromLinear(5/9, -32 * 5 / 9),
});

export const deltaDegreeFahrenheit = scale('delta degree Fahrenheit', 'Δ°F', 'd°F', 5/9, kelvin);

export const IMPERIAL_TEMPERATURE = {
  degreeFahrenheit,
  deltaDegreeFahrenheit,

  [scaleSystemNameSymbol]: 'Imperial temperature',
};

export default IMPERIAL_TEMPERATURE;
