import {scale, unit} from "../scale";
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";
import {mul} from "../operators";


/**
 * @summary 1 s = The duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.
 * @description <b>Second</b> is the base unit of time in the SI, commonly understood and historically defined as 1⁄86400 of a day
 * @link https://en.wikipedia.org/wiki/Second
 */
export const second = scale('second', 's', true);

/**
 * @summary 1 m = The distance travelled by light in vacuum in 1⁄299792458 second.
 * @description <b>Metre</b> is the base unit of mass in SI. The metre is defined as the length of the path travelled by light in a vacuum in 1 / 299 792 458 of a second.
 * @link https://en.wikipedia.org/wiki/Metre
 */
export const metre = scale('metre', 'm', true);

/**
 * @summary 1 kg = The kilogram is defined by setting the Planck constant h exactly to 6.62607015×10−34 kg⋅m²⁄s, given the definitions of the metre and the second.
 * @description <b>Kilogram</b> (also kilogramme) is the base unit of mass in SI. It is a widely used measure in science, engineering and commerce worldwide, and is often simply called a kilo in everyday speech.
 * @link https://en.wikipedia.org/wiki/Kilogram
 */
export const kilogram = scale('kilogram', 'kg', true);

/**
 * @summary 1 A = The flow of exactly 1 / 1.602176634×10−19 times the elementary charge e per second.
 * @description <b>Ampere</b> is the base unit of electric current in SI. The ampere is defined by taking the fixed numerical value of the elementary charge e to be 1.602 176 634 × 10−19 when expressed in the unit C, which is equal to A⋅s, where the second is defined in terms of ∆νCs, the unperturbed ground state hyperfine transition frequency of the caesium-133 atom.
 * @link https://en.wikipedia.org/wiki/Ampere
 */
export const ampere = scale('ampere', 'A', true);

/**
 * @summary 1 K = The kelvin is defined by setting the fixed numerical value of the Boltzmann constant k to 1.380649×10−23 J⋅K−1, (J = kg⋅m2⋅s−2), given the definition of the kilogram, the metre, and the second.
 * @description <b>Kelvin</b> is the base unit of temperature in SI. The kelvin is now defined by fixing the numerical value of the Boltzmann constant k to 1.380 649×10−23 J⋅K−1. This unit is equal to kg⋅m2⋅s−2⋅K−1, where the kilogram, metre and second are defined in terms of the Planck constant, the speed of light, and the duration of the caesium-133 ground-state hyperfine transition respectively.
 * @link https://en.wikipedia.org/wiki/Kelvin
 */
export const kelvin = scale('kelvin', 'K', true);

/**
 * @summary 1 mol = The amount of substance of exactly 6.02214076×10^23 elementary entities.
 * @description <b>Mole</b> is the unit of measurement for amount of substance in SI. A mole of a substance or a mole of particles is defined as containing exactly 6.02214076×1023 particles, which may be atoms, molecules, ions, or electrons. In short, 1 mol contains 6.02214076×1023 of the specified particles.
 * @link https://en.wikipedia.org/wiki/Mole_(unit)
 */
export const mole = scale('mole', 'mol', true);

/**
 * @summary 1 cd = The luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 5.4×1014 hertz and that has a radiant intensity in that direction of 1 / 683 W⁄sr.
 * @description <b>Candela</b> is the base unit of luminous intensity in SI; that is, luminous power per unit solid angle emitted by a point light source in a particular direction. Luminous intensity is analogous to radiant intensity, but instead of simply adding up the contributions of every wavelength of light in the source's spectrum, the contribution of each wavelength is weighted by the standard luminosity function (a model of the sensitivity of the human eye to different wavelengths). A common wax candle emits light with a luminous intensity of roughly one candela. If emission in some directions is blocked by an opaque barrier, the emission would still be approximately one candela in the directions that are not obscured.
 * @link https://en.wikipedia.org/wiki/Candela
 */
export const candela = scale('candela', 'cd', true);


/**
 * @summary 1 Standard gravity = 9.80665 m⁄s²
 * @description <b>Standard gravity</b>. The standard acceleration due to gravity (or standard acceleration of free fall), sometimes abbreviated as standard gravity, usually denoted by ɡ0 or ɡn, is the nominal gravitational acceleration of an object in a vacuum near the surface of the Earth. It is defined by standard as 9.80665 m/s2 (about 32.17405 ft/s2).
 * @link https://en.wikipedia.org/wiki/Standard_gravity
 */
export const g0 = scale('Standard gravity', 'g0', 'g₀', mul(unit(1, metre), unit(1, second).pow(-2), 9.80665));


/**
 * @summary 1 Speed of light = 299792458 m⁄s
 * @description <b>Speed of light</b>. The speed of light in vacuum, commonly denoted c, is a universal physical constant important in many areas of physics. Its exact value is defined as 299792458 metres per second (approximately 300000 km/s, or 186000 mi/s).
 * @link https://en.wikipedia.org/wiki/Speed_of_light
 */
export const SpeedOfLight = scale('Speed of light', 'с0', 'с₀', mul(unit(1, metre), unit(1, second).pow(-1), 299792458));


export const FUNDAMENTALS: ScaleSystem = {
  second,
  metre,
  kilogram,
  ampere,
  kelvin,
  mole,
  candela,

  g0,
  SpeedOfLight,

  [scaleSystemNameSymbol]: 'Fundamentals',
}

export default FUNDAMENTALS;
