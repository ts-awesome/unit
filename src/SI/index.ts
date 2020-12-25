import {ScaleSystem} from "../scale";
import {
  ampere,
  candela,
  centimeter,
  decimeter,
  gram,
  hectare,
  kelvin,
  kilogram,
  kilometer,
  liter,
  meter,
  metricTon,
  milliliter,
  millimeter,
  mole
} from "./units";
import {hour, millisecond, minute, second} from "../common/time";

export const SI: ScaleSystem = {
  meter,
  second,
  kilogram,
  ampere,
  kelvin,
  mole,
  candela,

  // Extra length
  kilometer,
  decimeter,
  centimeter,
  millimeter,

  // Extra mass
  gram,
  metricTon,

  // Extra time
  millisecond,
  minute,
  hour,

  // area
  hectare,

  // volume
  liter,
  milliliter,
}

export default SI;
