import {scale} from "../scale";
import {
  measureOfCurrent,
  measureOfLength,
  measureOfLuminousIntensity,
  measureOfMass,
  measureOfSubstance,
  measureOfThermodynamicTemperature
} from "../fundamentals";
import {unit} from "../unit";
import {mul} from "../operators";
import {second} from "../common/time";

export const meter = scale('meter', 'm', 1, measureOfLength);
export const kilogram = scale('kilogram', 'kg', 1, measureOfMass);
export const ampere = scale('ampere', 'A', 1, measureOfCurrent);
export const kelvin = scale('kelvin', 'K', 'K', 1, measureOfThermodynamicTemperature);
export const mole = scale('mole', 'mol', 1, measureOfSubstance);
export const candela = scale('candela', 'cd', 1, measureOfLuminousIntensity);

export const kilometer = scale('kilometer', 'km', 1000, meter);
export const decimeter = scale('decimeter', 'dm', 1/10, meter);
export const centimeter = scale('centimeter', 'cm', 1/100, meter);
export const millimeter = scale('millimeter', 'mm', 1/1000, meter);

export const gram = scale('gram', 'g', 1/1000, kilogram);
export const metricTon = scale('metric ton', 1000, kilogram);

export const hectare = scale('hectare', 'ha', unit(1, decimeter).pow(2));

export const liter = scale('liter', 'l', unit(1, decimeter).pow(3));
export const milliliter = scale('milliliter', 'ml', 1/1000, liter);

export const degreeCelsius = scale('degree Celsius', '°C', {
  scale: kelvin,
  to: (x: number) => x + 273.15,
  from: (x: number) => x - 273.15,
});

export const radian = scale('radian', 'rad', mul(unit(1, meter), unit(1, meter).pow(-1))); // m / m
export const steradian = scale('steradian', 'sr', mul(unit(1, meter).pow(1), unit(1, meter).pow(-2))); // m² / m²
export const hertz = scale('hertz', 'Hz', unit(1, second).pow(-2)); // 1 / s²
export const newton = scale('newton', 'N', mul(unit(1, meter), unit(1, kilogram), unit(1, second).pow(-2))); // m × kg / s²
export const pascal = scale('pascal', 'Pa', mul(unit(1, newton), unit(1, meter).pow(-2))); // N / m²
export const joule = scale('joule', 'J', mul(unit(1, newton), unit(1, meter))); // N × m
export const watt = scale('watt', 'W', mul(unit(1, joule), unit(1, second).pow(-1))); // J / s²
export const coulomb = scale('coulomb', 'C', mul(unit(1, ampere), unit(1, second))); // A × s
export const volt = scale('volt', 'V', mul(unit(1, watt), unit(1, ampere).pow(-1))); // W × A
export const farad = scale('farad', 'F', mul(unit(1, coulomb), unit(1, volt).pow(-1))); // C / V
export const ohm = scale('ohm', 'Ω', mul(unit(1, volt), unit(1, ampere).pow(-1))); // V / A
export const siemens = scale('siemens', 'S', mul(unit(1, ampere), unit(1, volt).pow(-1))); // A / V
export const weber = scale('weber', 'Wb', mul(unit(1, volt), unit(1, second))); // V × s
export const tesla = scale('tesla', 'T', mul(unit(1, weber), unit(1, meter).pow(-2))); // Wb / m²
export const henry = scale('henry', 'H', mul(unit(1, weber), unit(1, ampere).pow(-1))); // Wb / A
export const lumen = scale('lumen', 'lm', mul(unit(1, candela), unit(1, steradian))); // C × sr
export const lux = scale('lux', 'lx', mul(unit(1, lumen), unit(1, meter).pow(-2))); // lm / m²
export const becquerel = scale('becquerel', 'Bq', unit(1, second).pow(-1)); // 1 / s
export const gray = scale('gray', 'Gy', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
export const sievert = scale('sievert', 'Sv', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
export const katal = scale('katal', 'kat', mul(unit(1, second).pow(-1), unit(1, mole))); // mol / s²

export * from '../common/time';
