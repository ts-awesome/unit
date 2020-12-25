// IP

// Defined as exactly 0.9144 metres in 1959
import {scale} from "../scale";
import {measureOfLength, measureOfMass, measureOfThermodynamicTemperature} from "../fundamentals";
import {unit} from "../unit";

export const yard = scale('yard', 'yd', 0.9144, measureOfLength);
export const foot = scale('foot', 'ft', "'", 1/3, yard);

// 2.02667 yards
export const fathom = scale('fathom', 2.02667, yard);

export const link = scale('link', 66/100, foot);
export const rod = scale('link', 66/4, foot); // 25 links

export const thou = scale('thou', 'th', 1/12000, foot);
export const inch = scale('inch', 'in', '"', 1 / 12, foot);
export const chain = scale('chain', 'ch', 66, foot);
export const furlong = scale('furlong', 'fur', 660, foot);
export const mile = scale('mile', 'mi', 5280, foot);
export const league = scale('league', 'lea', 15840, foot);
export const cable = scale('cable', 100, fathom);
export const nauticalMile = scale('nautical mile', 1000, fathom);

// 1 rod × 1 rod
export const perch = scale('perch', unit(1, rod).pow(2));

export const squareFoot = scale('square foot', 'sq ft', unit(1, foot).pow(2));
export const squareYard = scale('square yard', 'sq yd', unit(1, yard).pow(2));
export const rood = scale('rood', 40, perch);
export const acre = scale('rood', 160, perch);

export const fluidOunce = scale('fluid ounce', 'fl', 'oz', unit(1/10, measureOfLength).pow(3).div(1000).mul(28.4130625));

export const gill = scale('gill', 'gi', 5, fluidOunce);
export const pint = scale('pint', 'pt', 20, fluidOunce);
export const quart = scale('quart', 'qt', 40, fluidOunce);
export const gallon = scale('gallon', 'gal', 160, fluidOunce);

export const pound = scale('pound', 'lb', 0.45359237, measureOfMass);

export const grain = scale('grain', 'gr', 1/7000, pound);
export const drachm = scale('drachm', 'dr', 1/256, pound);
export const ounce = scale('ounce', 'oz', 1/16, pound);
export const stone = scale('stone', 'st', 14, pound);
export const quarter = scale('quarter', 'qr', 'qtr', 28, pound);
export const hundredweight = scale('hundredweight', 'cwt', 112, pound);
export const ton = scale('ton', 't', 2240, pound);

export const degreeFahrenheit = scale('degree Fahrenheit', '°F', {
  scale: measureOfThermodynamicTemperature,
  to: x => (x + 459.67) * 5 / 9,
  from: x => x * 9 / 5 - 459.67,
});

export const slug = scale('slug', 32.17404856, pound);
