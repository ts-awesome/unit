import {scale} from "../scale";
import {kelvin} from "../common/fundamentals";
import {scaleSystemNameSymbol} from "../symbols";
import {fromLinear} from "../chainable";

export {kelvin};

export const degreeCelsius = scale('degree Celsius', '°C', {
  absolute: true,
  scale: kelvin,
  ...fromLinear(1, +273.15),
});

export const deltaDegreeCelsius = scale('delta degree Celsius', 'Δ°C','d°C', 1, kelvin);

export const SI_TEMPERATURE = {
  kelvin,
  degreeCelsius,
  deltaDegreeCelsius,

  [scaleSystemNameSymbol]: 'SI temperature',
}

export default SI_TEMPERATURE;
