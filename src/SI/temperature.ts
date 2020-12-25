import {scale} from "../scale";
import {kelvin} from "../common/fundamentals";
import {scaleSystemNameSymbol} from "../symbols";

export {kelvin};
export const degreeCelsius = scale('degree Celsius', '°C', {
  scale: kelvin,
  to: (x: number) => x + 273.15,
  from: (x: number) => x - 273.15,
});

export const SI_TEMPERATURE = {
  kelvin,
  degreeCelsius,

  [scaleSystemNameSymbol]: 'SI temperature',
}

export default SI_TEMPERATURE;
