import {scale} from "../scale";
import {kelvin} from "../common/fundamentals";
import {scaleSystemNameSymbol} from "../symbols";

export const degreeFahrenheit = scale('degree Fahrenheit', '°F', {
  scale: kelvin,
  to: x => (x + 459.67) * 5 / 9,
  from: x => x * 9 / 5 - 459.67,
});

export const IMPERIAL_TEMPERATURE = {
  degreeFahrenheit,

  [scaleSystemNameSymbol]: 'Imperial temperature',
};

export default IMPERIAL_TEMPERATURE;
