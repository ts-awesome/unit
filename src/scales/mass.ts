import {scale, unit} from "../scale";
import {mul, pow} from '../operators';
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

import {kilogram, g0, second} from './SI'
import {Foot_International} from './length'

/**
 * @summary 1 u =
 * @description <b>Atomic mass unit, unified</b> is  <a>mass</a> unit, symbol: [u; AMU]. Definition of 1 atomic mass unit, unified ≡ 1.66053904 × 10<sup>-27</sup> kg. The unified atomic mass unit or dalton is a standard unit of mass that quantifies mass on an atomic or molecular scale (atomic mass)..
 * @link http://conversion.org/mass/atomic-mass-unit-unified/
 */
export const AtomicMassUnitUnified = scale("Atomic mass unit, unified", "u", true);
export const AtomicMassUnitUnified__AMU = scale("Atomic mass unit, unified", "AMU", true);

/**
 * @summary 1 me =
 * @description <b>Atomic unit of mass, electron rest mass</b> is  <a>mass</a> unit, symbol: [me]. Definition of 1 atomic unit of mass, electron rest mass ≡ 9.10938356 × 10<sup>-31</sup> kg. .
 * @link http://conversion.org/mass/atomic-unit-of-mass-electron-rest-mass/
 */
export const AtomicUnitOfMassElectronRestMass = scale("Atomic unit of mass, electron rest mass", "me", true);

/**
 * @summary 1 bag (coffee) = 60 kg
 * @description <b>Bag (coffee)</b> is  <a>mass</a> unit. Definition of 1 bag (coffee) ≡ 60 kg . .
 * @link http://conversion.org/mass/bag-coffee/
 */
export const BagCoffee = scale("Bag (coffee)", "bag (coffee)", mul(unit(1, kilogram), 60));

/**
 * @summary 1 cg = 1e-5 kg
 * @description <b>Centigram</b> is metric <a>mass</a> unit, symbol: [cg]. Definition of 1 Centigram  ≡1x10<sup>-5</sup> kg. .
 * @link http://conversion.org/mass/centigram/
 */
export const Centigram = scale("Centigram", "cg", mul(unit(1, kilogram), 0.00001));

/**
 * @summary 1 Da =
 * @description <b>Dalton</b> is  <a>mass</a> unit, symbol: [Da]. Definition of 1 dalton ≡ 1.66053904 × 10<sup>-27</sup> kg. Dalton (Da) or the unified atomic mass unit is a standard unit of mass that quantifies mass on an atomic or molecular scale (atomic mass)..
 * @link http://conversion.org/mass/dalton/
 */
export const Dalton = scale("Dalton", "Da", true);

/**
 * @summary 1 dag = 1e-2 kg
 * @description <b>Decagram</b> is metric <a>mass</a> unit, symbol: [dag]. Definition of 1 Decagram  ≡10<sup>-2</sup> kg. .
 * @link http://conversion.org/mass/decagram/
 */
export const Decagram = scale("Decagram", "dag", mul(unit(1, kilogram), 0.01));

/**
 * @summary 1 g = 1e-3 kg
 * @description <b>Gram</b> is metric <a>mass</a> unit, symbol: [g]. Definition of 1 Gram  ≡1x10<sup>-3</sup> kg. .
 * @link http://conversion.org/mass/gram/
 */
export const Gram = scale("Gram", "g", mul(unit(1, kilogram), 0.001));

/**
 * @summary 1 gv. = 1 kg
 * @description <b>Grave</b> is  <a>mass</a> unit, symbol: [gv.]. Definition of 1 grave ≡ 1 kg. grave was the original name of the kilogram .
 * @link http://conversion.org/mass/grave/
 */
export const Grave = scale("Grave", "gv.", mul(unit(1, kilogram), 1));

/**
 * @summary 1 hg = 1e-1 kg
 * @description <b>Hectogram</b> is metric <a>mass</a> unit, symbol: [hg]. Definition of 1 Hectogram  ≡10<sup>-1</sup> kg. .
 * @link http://conversion.org/mass/hectogram/
 */
export const Hectogram = scale("Hectogram", "hg", mul(unit(1, kilogram), 0.1));

/**
 * @summary 1 µg = 1e-9 kg
 * @description <b>Microgram</b> is metric <a>mass</a> unit, symbol: [µg]. Definition of 1 Microgram  ≡1x10<sup>-9</sup> kg. .
 * @link http://conversion.org/mass/microgram/
 */
export const Microgram = scale("Microgram", "µg", mul(unit(1, kilogram), 1e-9));

/**
 * @summary 1 mg = 1e-6 kg
 * @description <b>Milligram</b> is metric <a>mass</a> unit, symbol: [mg]. Definition of 1 Milligram  ≡1x10<sup>-6</sup> kg. .
 * @link http://conversion.org/mass/milligram/
 */
export const Milligram = scale("Milligram", "mg", mul(unit(1, kilogram), 0.000001));

/**
 * @summary 1 mite (metric) = 1⁄20 g
 * @description <b>Mite (metric)</b> is  <a>mass</a> unit. Definition of 1 mite (metric) ≡  1⁄20 g . ≡ 50 mg.
 * @link http://conversion.org/mass/mite-metric/
 */
export const MiteMetric = scale("Mite (metric)", "mite (metric)", mul(unit(1, Gram), 0.05));

/**
 * @summary 1 ng = 1e-12 kg
 * @description <b>Nanogram</b> is metric <a>mass</a> unit, symbol: [ng]. Definition of 1 Nanogram  ≡1x10<sup>-12</sup> kg. .
 * @link http://conversion.org/mass/nanogram/
 */
export const Nanogram = scale("Nanogram", "ng", mul(unit(1, kilogram), 1e-12));

/**
 * @summary 1 oz = 28 g
 * @description <b>Ounce (US food nutrition labelling)</b> is  <a>mass</a> unit, symbol: [oz]. Definition of 1 ounce (US food nutrition labelling) ≡ 28 g. The ounce (abbreviated oz) is a unit of mass used in most British derived customary systems of measurement..
 * @link http://conversion.org/mass/ounce-us-food-nutrition-labelling/
 */
export const Ounce_USFoodNutritionLabelling = scale("Ounce (US food nutrition labelling)", "oz (US food)", mul(unit(1, Gram), 28));

/**
 * @summary 1 lb av = 0.45359237 kg = 7000 grains
 * @description <b>Pound (avoirdupois)</b> is  <a>mass</a> unit, symbol: [lb av]. Definition of 1 pound (avoirdupois) ≡ 0.45359237 kg ≡ 7000 grains . By definition, 1 lb av ≡ exactly 0.45359237 kg.
 * @link http://conversion.org/mass/pound-avoirdupois/
 */
export const PoundAvoirdupois = scale("Pound (avoirdupois)", "lb av", "lb", "lbs", mul(unit(1, kilogram), 0.45359237));

/**
 * @summary 1 pound (metric) = 500 g
 * @description <b>Pound (metric)</b> is  <a>mass</a> unit. Definition of 1 pound (metric) ≡ 500 g . ≡ 500 g ≡ 0.5 kg.
 * @link http://conversion.org/mass/pound-metric/
 */
export const PoundMetric = scale("Pound (metric)", "pound (metric)", mul(unit(1, Gram), 500));

/**
 * @summary 1 quarter (imperial) = 1⁄4 long cwt = 2 st = 28 lb av
 * @description <b>Quarter (imperial)</b> is  <a>mass</a> unit. Definition of 1 quarter (imperial) ≡  1⁄4 long cwt ≡ 2 st ≡ 28 lb av . 28 × 0.45359237 kg.
 * @link http://conversion.org/mass/quarter-imperial/
 */
export const QuarterImperial = scale("Quarter (imperial)", "quarter (imperial)", mul(unit(1, PoundAvoirdupois), 28));

/**
 * @summary 1 q = 100 kg
 * @description <b>Quintal (metric)</b> is  <a>mass</a> unit, symbol: [q]. Definition of 1 quintal (metric) ≡ 100 kg . .
 * @link http://conversion.org/mass/quintal-metric/
 */
export const QuintalMetric = scale("Quintal (metric)", "q", mul(unit(1, kilogram), 100));

/**
 * @summary 1 sheet = 1⁄700 lb av
 * @description <b>Sheet</b> is  <a>mass</a> unit. Definition of 1 sheet ≡  1⁄700 lb av . ≡ 0.45359237 kg / 700 ≡ 647.9891 mg.
 * @link http://conversion.org/mass/sheet/
 */
export const Sheet = scale("Sheet", "sheet", mul(unit(1, PoundAvoirdupois), 0.0014285714285714286));

/**
 * @summary 1 slug = 1 ɡ0 × lb av × s²/ft
 * @description <b>Slug; geepound; hyl</b> is  <a>mass</a> unit, symbol: [slug]. Definition of 1 slug; geepound; hyl ≡ 1 ɡ0 × lb av × s²/ft .  ≡ 9.80665 × 0.45359237 / 0.3048 ≡ 14.593903 kg.
 * @link http://conversion.org/mass/slug-geepound-hyl/
 */
export const SlugGeepoundHyl = scale("Slug; geepound; hyl", "slug", mul(unit(1, g0), unit(1, PoundAvoirdupois), pow(unit(1, second), 2), pow(unit(1, Foot_International), -1), 1));

/**
 * @summary 1 st = 14 lb av
 * @description <b>Stone</b> is  <a>mass</a> unit, symbol: [st]. Definition of 1 stone ≡ 14 lb av . ≡14 × 0.45359237 kg.
 * @link http://conversion.org/mass/stone/
 */
export const Stone = scale("Stone", "st", mul(unit(1, PoundAvoirdupois), 14));

/**
 * @summary 1 ton = 2240 lb
 * @description <b>Ton, long</b> is  <a>mass</a> unit, symbol: [long tn or ton]. Definition of 1 ton, long ≡ 2240 lb . 2240 × 0.45359237 kg.
 * @link http://conversion.org/mass/ton-long/
 */
export const TonLong = scale("Ton, long", "ton", mul(unit(1, PoundAvoirdupois), 2240));

/**
 * @summary 1 sh tn = 2000 lb
 * @description <b>Ton, short</b> is  <a>mass</a> unit, symbol: [sh tn]. Definition of 1 ton, short ≡ 2000 lb . 2000 × 0.45359237 kg.
 * @link http://conversion.org/mass/ton-short/
 */
export const TonShort = scale("Ton, short", "sh tn", mul(unit(1, PoundAvoirdupois), 2000));

/**
 * @summary 1 t = 1000 kg
 * @description <b>Tonne</b> is metric <a>mass</a> unit, symbol: [t]. Definition of 1 tonne ≡ 1000 kg . ≡ 1 megagram (Mg) or 1 metric ton (tonne).
 * @link http://conversion.org/mass/tonne/
 */
export const Tonne = scale("Tonne", "t", mul(unit(1, kilogram), 1000));

/**
 * @summary 1 wey = 252 lb = 18 st
 * @description <b>Wey</b> is  <a>mass</a> unit. Definition of 1 wey ≡ 252 lb ≡ 18 st . 252 0.45359237 kg. Some other variants may exist.
 * @link http://conversion.org/mass/wey/
 */
export const Wey = scale("Wey", "wey", mul(unit(1, Stone), 18));

/**
 * @summary 1 bag (Portland cement) = 94 lb av
 * @description <b>Bag (Portland cement)</b> is  <a>mass</a> unit. Definition of 1 bag (Portland cement) ≡ 94 lb av . ≡ 94 × 0.45359237 kg.
 * @link http://conversion.org/mass/bag-portland-cement/
 */
export const Bag_PortlandCement = scale("Bag (Portland cement)", "bag (Portland cement)", mul(unit(1, PoundAvoirdupois), 94));

/**
 * @summary 1 barge = 22 1⁄2 short ton
 * @description <b>Barge</b> is  <a>mass</a> unit. Definition of 1 barge ≡  22 1⁄2 short ton . ≡ 20411.65665 kg.
 * @link http://conversion.org/mass/barge/
 */
export const Barge = scale("Barge", "barge", mul(unit(1, TonShort), 22.5));

/**
 * @summary 1 ct = 200 mg
 * @description <b>Carat (metric)</b> is  <a>mass</a> unit, symbol: [ct]. Definition of 1 carat (metric) ≡ 200 mg . The carat (ct) is a unit of mass equal to 200 mg and is used for measuring gemstones and pearls (metric carat).
 * @link http://conversion.org/mass/carat-metric/
 */
export const CaratMetric = scale("Carat (metric)", "ct", mul(unit(1, Milligram), 200));

/**
 * @summary 1 clove = 8 lb av
 * @description <b>Clove</b> is  <a>mass</a> unit. Definition of 1 clove ≡ 8 lb av . ≡ 8 × 0.45359237 kg.
 * @link http://conversion.org/mass/clove/
 */
export const Clove = scale("Clove", "clove", mul(unit(1, PoundAvoirdupois), 8));

/**
 * @summary 1 crith = 89.9349 mg
 * @description <b>Crith</b> is  <a>mass</a> unit. Definition of 1 crith ≡ 89.9349 mg. .
 * @link http://conversion.org/mass/crith/
 */
export const Crith = scale("Crith", "crith", mul(unit(1, Milligram), 89.9349));

/**
 * @summary 1 γ = 1 μg
 * @description <b>Gamma</b> is  <a>mass</a> unit, symbol: [γ]. Definition of 1 gamma ≡ 1 μg . ≡ 1 μg.
 * @link http://conversion.org/mass/gamma/
 */
export const Gamma = scale("Gamma", "γ", mul(unit(1, Microgram), 1));

/**
 * @summary 1 gr = 1⁄7000 lb av
 * @description <b>Grain</b> is  <a>mass</a> unit, symbol: [gr]. Definition of 1 grain ≡  1⁄7000 lb av . The grain is the same in avoirdupois, troy, and apothecaries units of mass, ≡ 64.79891 mg.
 * @link http://conversion.org/mass/grain/
 */
export const Grain = scale("Grain", "gr", mul(unit(1, PoundAvoirdupois), 0.00014285714285714287));

/**
 * @summary 1 long cwt or cwt = 112 lb av
 * @description <b>Hundredweight (long)</b> is  <a>mass</a> unit, symbol: [long cwt or cwt]. Definition of 1 hundredweight (long) ≡ 112 lb av . ≡112 × 0.45359237 kg ≡ 50.80234544 kg.
 * @link http://conversion.org/mass/hundredweight-long/
 */
export const HundredweightLong = scale("Hundredweight (long)", "long cwt or cwt", mul(unit(1, PoundAvoirdupois), 112));

/**
 * @summary 1 sh cwt = 100 lb av
 * @description <b>Hundredweight (short); cental</b> is  <a>mass</a> unit, symbol: [sh cwt]. Definition of 1 hundredweight (short); cental ≡ 100 lb av . ≡100 × 0.45359237 kg ≡ 45.359237 kg.
 * @link http://conversion.org/mass/hundredweight-short-cental/
 */
export const HundredweightShortCental = scale("Hundredweight (short); cental", "sh cwt", mul(unit(1, PoundAvoirdupois), 100));

/**
 * @summary 1 kip = 1000 lb av
 * @description <b>Kip</b> is  <a>mass</a> unit, symbol: [kip]. Definition of 1 kip ≡ 1000 lb av . A kip is a unit of force, uncommon, it is occasionally also considered a unit of weight, equal to 1000 pounds. ≡1000 × 0.45359237 kg.
 * @link http://conversion.org/mass/kip/
 */
export const Kip = scale("Kip", "kip", mul(unit(1, PoundAvoirdupois), 1000));

/**
 * @summary 1 mite = 1⁄20 gr
 * @description <b>Mite</b> is  <a>mass</a> unit. Definition of 1 mite ≡  1⁄20 gr . ≡ 1 grain / 20 ≡ 3.2399455 mg.
 * @link http://conversion.org/mass/mite/
 */
export const Mite = scale("Mite", "mite", mul(unit(1, Grain), 0.05));

/**
 * @summary 1 oz av = 1⁄16 lb
 * @description <b>Ounce (avoirdupois)</b> is  <a>mass</a> unit, symbol: [oz av]. Definition of 1 ounce (avoirdupois) ≡  1⁄16 lb . ≡ 0.45359237 kg /16 ≡ 28.349523125 g.
 * @link http://conversion.org/mass/ounce-avoirdupois/
 */
export const OunceAvoirdupois = scale("Ounce (avoirdupois)", "oz av", "oz", mul(unit(1, PoundAvoirdupois), 0.0625));

/**
 * @summary 1 point = 1⁄100 ct
 * @description <b>Point</b> is  <a>mass</a> unit. Definition of 1 point ≡  1⁄100 ct . ≡ 2 mg.
 * @link http://conversion.org/mass/point/
 */
export const Point = scale("Point", "point", mul(unit(1, CaratMetric), 0.01));

/**
 * @summary 1 lb t = 5760 grains
 * @description <b>Pound (troy)</b> is  <a>mass</a> unit, symbol: [lb t]. Definition of 1 pound (troy) ≡ 5760 grains . 64.79891 g × 5760 ≡ 0.3732417216 kg.
 * @link http://conversion.org/mass/pound-troy/
 */
export const PoundTroy = scale("Pound (troy)", "lb t", mul(unit(1, Grain), 5760));

/**
 * @summary 1 quarter (informal) = 1⁄4 short ton
 * @description <b>Quarter (informal)</b> is  <a>mass</a> unit. Definition of 1 quarter (informal) ≡  1⁄4 short ton . ≡ 907.18474 kg / 4.
 * @link http://conversion.org/mass/quarter-informal/
 */
export const QuarterInformal = scale("Quarter (informal)", "quarter (informal)", mul(unit(1, TonShort), 0.25));

/**
 * @summary 1 quarter, long (informal) = 1⁄4 long ton
 * @description <b>Quarter, long (informal)</b> is  <a>mass</a> unit. Definition of 1 quarter, long (informal) ≡  1⁄4 long ton . ≡ 1016.0469088 kg / 4.
 * @link http://conversion.org/mass/quarter-long-informal/
 */
export const QuarterLongInformal = scale("Quarter, long (informal)", "quarter, long (informal)", mul(unit(1, TonLong), 0.25));

/**
 * @summary 1 s ap = 20 gr
 * @description <b>Scruple (apothecary)</b> is  <a>mass</a> unit, symbol: [s ap]. Definition of 1 scruple (apothecary) ≡ 20 gr . 20 × 0.06479891 g ≡ 1.2959782 g.
 * @link http://conversion.org/mass/scruple-apothecary/
 */
export const ScrupleApothecary = scale("Scruple (apothecary)", "s ap", mul(unit(1, Grain), 20));

/**
 * @summary 1 kt = 3 1⁄6 gr
 * @description <b>Carat</b> is  <a>mass</a> unit, symbol: [kt]. Definition of 1 carat ≡  3 1⁄6 gr . ≡ 19/6 grain ≡ 205.1965483 mg.
 * @link http://conversion.org/mass/carat/
 */
export const Carat = scale("Carat", "kt", mul(unit(1, Grain), 3.1666666666666665));

/**
 * @summary 1 dr t = 60 gr
 * @description <b>Dram (apothecary; troy)</b> is  <a>mass</a> unit, symbol: [dr t]. Definition of 1 dram (apothecary; troy) ≡ 60 gr . The dram (alternative British spelling drachm) was originally both a coin and a weight in ancient Greece. ≡ 60 grain ≡ 3.8879346 g.
 * @link http://conversion.org/mass/dram-apothecary-troy/
 */
export const DramApothecaryTroy = scale("Dram (apothecary; troy)", "dr t", mul(unit(1, Grain), 60));

/**
 * @summary 1 dr av = 27 11⁄32 gr = 27.34375 gr
 * @description <b>Dram (avoirdupois)</b> is  <a>mass</a> unit, symbol: [dr av]. Definition of 1 dram (avoirdupois) ≡  27 11⁄32 gr ≡ 27.34375 gr. The dram was originally both a coin and a weight in ancient Greece. ≡ 875/32 grain ≡ 1.7718451953125 g.
 * @link http://conversion.org/mass/dram-avoirdupois/
 */
export const DramAvoirdupois = scale("Dram (avoirdupois)", "dr av", mul(unit(1, Grain), 27.34375));

/**
 * @summary 1 oz t = 1⁄12 lb t
 * @description <b>Ounce (apothecary; troy)</b> is  <a>mass</a> unit, symbol: [oz t]. Definition of 1 ounce (apothecary; troy) ≡  1⁄12 lb t . ≡ 31.1034768 g.
 * @link http://conversion.org/mass/ounce-apothecary-troy/
 */
export const OunceApothecaryTroy = scale("Ounce (apothecary; troy)", "oz t", mul(unit(1, PoundTroy), 0.08333333333333333));

/**
 * @summary 1 dwt = 1⁄20 oz t
 * @description <b>Pennyweight</b> is  <a>mass</a> unit, symbol: [dwt; pwt]. Definition of 1 pennyweight ≡  1⁄20 oz t . ≡ 1.55517384 g.
 * @link http://conversion.org/mass/pennyweight/
 */
export const Pennyweight = scale("Pennyweight", "dwt", mul(unit(1, OunceApothecaryTroy), 0.05));
export const Pennyweight__pwt = scale("Pennyweight", "pwt", mul(unit(1, OunceApothecaryTroy), 0.05));

/**
 * @summary 1 AT = 1 mg × long ton / oz t
 * @description <b>Ton, assay (long)</b> is  <a>mass</a> unit, symbol: [AT]. Definition of 1 ton, assay (long) ≡ 1 mg × long ton / oz t .  ≡ 32.(6) g.
 * @link http://conversion.org/mass/ton-assay-long/
 */
export const TonAssayLong = scale("Ton, assay (long)", "AT", mul(unit(1, Milligram), unit(1, TonLong), pow(unit(1, OunceApothecaryTroy), -1), 1));

/**
 * @summary 1 AT = 1 mg × short ton / oz t
 * @description <b>Ton, assay (short)</b> is  <a>mass</a> unit, symbol: [AT]. Definition of 1 ton, assay (short) ≡ 1 mg × short ton / oz t .  ≡ 29.1(6) g.
 * @link http://conversion.org/mass/ton-assay-short/
 */
export const TonAssayShort = scale("Ton, assay (short)", "sh AT", mul(unit(1, Milligram), unit(1, TonShort), pow(unit(1, OunceApothecaryTroy), -1), 1));

/**
 * @summary 1 mark = 8 oz t
 * @description <b>Mark</b> is  <a>mass</a> unit. Definition of 1 mark ≡ 8 oz t . The Mark is originally a medieval weight or mass unit, which supplanted the pound weight as a precious metals and coinage weight from the 11th century ≡ 248.8278144 g.
 * @link http://conversion.org/mass/mark/
 */
export const Mark = scale("Mark", "mark", mul(unit(1, OunceApothecaryTroy), 8));


export const MASS_UNITS: ScaleSystem = {
  AtomicMassUnitUnified,
  AtomicMassUnitUnified__AMU,
  AtomicUnitOfMassElectronRestMass,
  BagCoffee,
  Centigram,
  Dalton,
  Decagram,
  Gram,
  Grave,
  Hectogram,
  Microgram,
  Milligram,
  MiteMetric,
  Nanogram,
  Ounce_USFoodNutritionLabelling,
  PoundAvoirdupois,
  PoundMetric,
  QuarterImperial,
  QuintalMetric,
  Sheet,
  SlugGeepoundHyl,
  Stone,
  TonLong,
  TonShort,
  Tonne,
  Wey,
  Bag_PortlandCement,
  Barge,
  CaratMetric,
  Clove,
  Crith,
  Gamma,
  Grain,
  HundredweightLong,
  HundredweightShortCental,
  Kip,
  Mite,
  OunceAvoirdupois,
  Point,
  PoundTroy,
  QuarterInformal,
  QuarterLongInformal,
  ScrupleApothecary,
  Carat,
  DramApothecaryTroy,
  DramAvoirdupois,
  OunceApothecaryTroy,
  Pennyweight,
  Pennyweight__pwt,
  TonAssayLong,
  TonAssayShort,
  Mark,

  [scaleSystemNameSymbol]: "mass units",
}

export default MASS_UNITS;
