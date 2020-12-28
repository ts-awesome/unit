import {scale, unit} from "../scale";
import {mul} from "../operators";

import FUNDAMENTALS, {ampere, candela, kilogram, metre, mole, second} from "./fundamentals";
import {scaleSystemNameSymbol} from "../symbols";
import {degreeCelsius, deltaDegreeCelsius} from "./temperature";

export * from './fundamentals';

export const radian = scale('radian', 'rad', mul(unit(1, metre), unit(1, metre).pow(-1))); // m / m
export const steradian = scale('steradian', 'sr', mul(unit(1, metre).pow(1), unit(1, metre).pow(-2))); // m² / m²
export const hertz = scale('hertz', 'Hz', unit(1, second).pow(-2)); // 1 / s²
export const newton = scale('newton', 'N', mul(unit(1, metre), unit(1, kilogram), unit(1, second).pow(-2))); // m × kg / s²
export const pascal = scale('pascal', 'Pa', mul(unit(1, newton), unit(1, metre).pow(-2))); // N / m²
export const joule = scale('joule', 'J', mul(unit(1, newton), unit(1, metre))); // N × m
export const watt = scale('watt', 'W', mul(unit(1, joule), unit(1, second).pow(-1))); // J / s²
export const coulomb = scale('coulomb', 'C', mul(unit(1, ampere), unit(1, second))); // A × s
export const volt = scale('volt', 'V', mul(unit(1, watt), unit(1, ampere).pow(-1))); // W × A
export const farad = scale('farad', 'F', mul(unit(1, coulomb), unit(1, volt).pow(-1))); // C / V
export const ohm = scale('ohm', 'Ω', 'ohm', mul(unit(1, volt), unit(1, ampere).pow(-1))); // V / A
export const siemens = scale('siemens', 'S', mul(unit(1, ampere), unit(1, volt).pow(-1))); // A / V
export const weber = scale('weber', 'Wb', mul(unit(1, volt), unit(1, second))); // V × s
export const tesla = scale('tesla', 'T', mul(unit(1, weber), unit(1, metre).pow(-2))); // Wb / m²
export const henry = scale('henry', 'H', mul(unit(1, weber), unit(1, ampere).pow(-1))); // Wb / A
export const lumen = scale('lumen', 'lm', mul(unit(1, candela), unit(1, steradian))); // C × sr
export const lux = scale('lux', 'lx', mul(unit(1, lumen), unit(1, metre).pow(-2))); // lm / m²
export const becquerel = scale('becquerel', 'Bq', unit(1, second).pow(-1)); // 1 / s
export const gray = scale('gray', 'Gy', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
export const sievert = scale('sievert', 'Sv', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
export const katal = scale('katal', 'kat', mul(unit(1, second).pow(-1), unit(1, mole))); // mol / s²

export const degree = scale('degree', 'deg', '°', Math.PI / 180, radian);

export const SI = {
  ...FUNDAMENTALS,

  radian,
  steradian,
  hertz,
  newton,
  pascal,
  joule,
  watt,
  coulomb,
  volt,
  farad,
  ohm,
  siemens,
  weber,
  tesla,
  henry,
  lumen,
  lux,
  becquerel,
  gray,
  sievert,
  katal,

  degreeCelsius,
  deltaDegreeCelsius,

  degree,

  [scaleSystemNameSymbol]: 'SI',
}

export default SI;
