import {scale, unit} from "../scale";
import {mul, pow} from '../operators';
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

import {Acre} from './area'
import {Foot_International, Inch_International, Centimetre, Decimetre, Dekametre, Fermi, Hectometre, Kilometre, Micrometre, MileTelegraph, Millimetre, Nanometre} from './length'
import {meter} from './SI'

/**
 * @summary 1 ac ft = 1 ac × ft = 43560 cu ft
 * @description <b>Acre-foot</b> is  <a>volume</a> unit, symbol: [ac ft]. Definition of 1 acre-foot ≡ 1 ac × ft ≡ 43560 cu ft. The acre-foot is a unit of volume commonly used in US in reference to large-scale water resources ≡ 1 acre (international) × ft cuboid ≡ 1233.48183754752 m³.
 * @link http://conversion.org/volume/acre-foot/
 */
export const AcreFoot = scale("Acre-foot", "ac ft", mul(unit(1, Acre), unit(1, Foot_International), 1));

/**
 * @summary 1 ac in = 1 ac × in
 * @description <b>Acre-inch</b> is  <a>volume</a> unit, symbol: [ac in]. Definition of 1 acre-inch ≡ 1 ac × in. Acre-inch is unit of volume commonly used as smaller unit of acre-foot, reference to large-scale water resources ≡ 102.79015312896 m³.
 * @link http://conversion.org/volume/acre-inch/
 */
export const AcreInch = scale("Acre-inch", "ac in", mul(unit(1, Acre), unit(1, Inch_International), 1));

/**
 * @summary 1 cord (firewood) =
 * @description <b>Cord (firewood)</b> is  <a>volume</a> unit. Definition of 1 cord (firewood) ≡ 8 ft × 4 ft × 4 ft.  ≡ 8 × 4 × 4 × 0.3048³ ≡ 3.624556363776 m³.
 * @link http://conversion.org/volume/cord-firewood/
 */
export const CordFirewood = scale("Cord (firewood)", "cord (firewood)", true);

/**
 * @summary 1 cm³ = 1 cm × cm × cm
 * @description <b>Cubic centimetre</b> is metric <a>volume</a> unit, symbol: [cm³]. Definition of 1 cubic centimetre  ≡ 1 cm × cm × cm. One cubic centimetre is volume equivalent to cube with base of 1 cm. In 1 litre there are 1000 cubic centimetres..
 * @link http://conversion.org/volume/cubic-centimetre/
 */
export const CubicCentimetre = scale("Cubic centimetre", "cm³", mul(pow(unit(1, Centimetre), 3), 1));

/**
 * @summary 1 dm³ = 1 dm × dm × dm
 * @description <b>Cubic decimetre</b> is metric <a>volume</a> unit, symbol: [dm³]. Definition of 1 cubic decimetre  ≡ 1 dm × dm × dm. One cubic decimetre is volume equivalent to one litre. .
 * @link http://conversion.org/volume/cubic-decimetre/
 */
export const CubicDecimetre = scale("Cubic decimetre", "dm³", mul(pow(unit(1, Decimetre), 3), 1));

/**
 * @summary 1 dam³ = 1 dam × dam × dam
 * @description <b>Cubic dekametre</b> is metric <a>volume</a> unit, symbol: [dam³]. Definition of 1 cubic dekametre  ≡ 1 dam × dam × dam. Equivalent to volume of 10 m × 10 m × 10 m cube ≡ thousands of cubic metre..
 * @link http://conversion.org/volume/cubic-dekametre/
 */
export const CubicDekametre = scale("Cubic dekametre", "dam³", mul(pow(unit(1, Dekametre), 3), 1));

/**
 * @summary 1 cu fm = 1 fm × fm × fm
 * @description <b>Cubic fathom</b> is  <a>volume</a> unit, symbol: [cu fm]. Definition of 1 cubic fathom ≡ 1 fm × fm × fm. ≡ 1.8288³ ≡ 6.116438863872 m³.
 * @link http://conversion.org/volume/cubic-fathom/
 */
export const CubicFathom = scale("Cubic fathom", "cu fm", mul(pow(unit(1, Fermi), 3), 1));

/**
 * @summary 1 cu ft = 1 ft × ft × ft
 * @description <b>Cubic foot</b> is  <a>volume</a> unit, symbol: [cu ft]. Definition of 1 cubic foot ≡ 1 ft × ft × ft. ≡ 0.3048³ ≡ 0.028316846592 m³.
 * @link http://conversion.org/volume/cubic-foot/
 */
export const CubicFoot = scale("Cubic foot", "cu ft", mul(pow(unit(1, Foot_International), 3), 1));

/**
 * @summary 1 hm³ = 1 hm × hm × hm
 * @description <b>Cubic hectometre</b> is metric <a>volume</a> unit, symbol: [hm³]. Definition of 1 cubic hectometre  ≡ 1 hm × hm × hm. One million of cubic metres. For example lake Balaton (in Hungary) has volume of 1900 hm³.
 * @link http://conversion.org/volume/cubic-hectometre/
 */
export const CubicHectometre = scale("Cubic hectometre", "hm³", mul(pow(unit(1, Hectometre), 3), 1));

/**
 * @summary 1 cu in = 1 in × in × in
 * @description <b>Cubic inch</b> is  <a>volume</a> unit, symbol: [cu in]. Definition of 1 cubic inch ≡ 1 in × in × in. ≡ 0.0254³ ≡ 16.387064×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/cubic-inch/
 */
export const CubicInch = scale("Cubic inch", "cu in", mul(pow(unit(1, Inch_International), 3), 1));

/**
 * @summary 1 km³ = 1 km × km × km
 * @description <b>Cubic kilometre</b> is metric <a>volume</a> unit, symbol: [km³]. Definition of 1 cubic kilometre  ≡ 1 km × km × km. One cubic kilometre is very large volume. For example Caspian Sea has water volume of 78,200 km³.
 * @link http://conversion.org/volume/cubic-kilometre/
 */
export const CubicKilometre = scale("Cubic kilometre", "km³", mul(pow(unit(1, Kilometre), 3), 1));

/**
 * @summary 1 m³ = 1 m × m × m
 * @description <b>Cubic metre</b> is  <a>volume</a> unit, symbol: [m³]. Definition of 1 cubic metre ≡ 1 m × m × m. ≡ SI unit for volume is 1 m³ ≡ 1m × 1m ×1m size cube..
 * @link http://conversion.org/volume/cubic-metre/
 */
export const CubicMetre = scale("Cubic metre", "m³", mul(pow(unit(1, meter), 3), 1));

/**
 * @summary 1 µm³ = 1 µm × µm × µm
 * @description <b>Cubic micrometre</b> is metric <a>volume</a> unit, symbol: [µm³]. Definition of 1 cubic micrometre  ≡ 1 µm × µm × µm. It is a very small volume unit. One millionth of microlitre..
 * @link http://conversion.org/volume/cubic-micrometre/
 */
export const CubicMicrometre = scale("Cubic micrometre", "µm³", mul(pow(unit(1, Micrometre), 3), 1));

/**
 * @summary 1 cu mi = 1 mi × mi × mi
 * @description <b>Cubic mile</b> is  <a>volume</a> unit, symbol: [cu mi]. Definition of 1 cubic mile ≡ 1 mi × mi × mi. ≡ 1609.344³ ≡ 4168181825.440579584 m³.
 * @link http://conversion.org/volume/cubic-mile/
 */
export const CubicMile = scale("Cubic mile", "cu mi", mul(pow(unit(1, MileTelegraph), 3), 1));

/**
 * @summary 1 mm³ = 1 mm × mm × mm
 * @description <b>Cubic millimetre</b> is metric <a>volume</a> unit, symbol: [mm³]. Definition of 1 cubic millimetre  ≡ 1 mm × mm × mm. Cube with size 1 mm × mm × mm has volume of 1 mm³.
 * @link http://conversion.org/volume/cubic-millimetre/
 */
export const CubicMillimetre = scale("Cubic millimetre", "mm³", mul(pow(unit(1, Millimetre), 3), 1));

/**
 * @summary 1 nm³ = 1 nm × nm × nm
 * @description <b>Cubic nanometre</b> is metric <a>volume</a> unit, symbol: [nm³]. Definition of 1 cubic nanometre  ≡ 1 nm × nm × nm. Very small volume equivalent to one nanometre-based cubic volume..
 * @link http://conversion.org/volume/cubic-nanometre/
 */
export const CubicNanometre = scale("Cubic nanometre", "nm³", mul(pow(unit(1, Nanometre), 3), 1));

/**
 * @summary 1 cu yd = 27 cu ft
 * @description <b>Cubic yard</b> is  <a>volume</a> unit, symbol: [cu yd]. Definition of 1 cubic yard ≡ 27 cu ft. ≡ 0.9144³ ≡ 0.764554857984 m³ (1 yard ≡ 0.9144 m).
 * @link http://conversion.org/volume/cubic-yard/
 */
export const CubicYard = scale("Cubic yard", "cu yd", mul(unit(1, CubicFoot), 27));

/**
 * @summary 1 c =
 * @description <b>Cup (metric)</b> is  <a>volume</a> unit, symbol: [c]. Definition of 1 cup (metric) ≡ 250.0×10<sup>-6</sup> m³. Metric cup ≡ 250 mL ≡ 250.0×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/cup-metric/
 */
export const CupMetric = scale("Cup (metric)", "c", true);

/**
 * @summary 1 beer gal = 282 cu in
 * @description <b>Gallon (beer)</b> is  <a>volume</a> unit, symbol: [beer gal]. Definition of 1 gallon (beer) ≡ 282 cu in. The gallon originated as the base of systems for measuring wine, and beer in England ≡ 282 cubic inch ≡ 4.621152048×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/gallon-beer/
 */
export const GallonBeer = scale("Gallon (beer)", "beer gal", mul(unit(1, CubicInch), 282));

/**
 * @summary 1 gal (US) = 231 cu in
 * @description <b>Gallon (US fluid; Wine)</b> is  <a>volume</a> unit, symbol: [gal (US)]. Definition of 1 gallon (US fluid; Wine) ≡ 231 cu in. A traditional unit of liquid volume, in the United States, the liquid gallon is legally defined as exactly 231 cubic inches; this is equal to the old English wine gallon ≡ 3.785411784×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/gallon-us-fluid-wine/
 */
export const Gallon_USFluid_Wine = scale("Gallon (US fluid; Wine)", "gal (US)", mul(unit(1, CubicInch), 231));

/**
 * @summary 1 λ = 1 mm³
 * @description <b>Lambda</b> is  <a>volume</a> unit, symbol: [λ]. Definition of 1 lambda ≡ 1 mm³. Lambda is a legit metric unit of volume equal to ≡ 1×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/lambda/
 */
export const Lambda = scale("Lambda", "λ", mul(pow(unit(1, Millimetre), 3), 1));

/**
 * @summary 1 L = 1 dm³
 * @description <b>Litre</b> is  <a>volume</a> unit, symbol: [L]. Definition of 1 litre ≡ 1 dm³. Litre (or Liter spelling in American English) is very popular unit of volume equal to 10 cm × 10 cm × 10 cm cube ≡ 0.001 m³.
 * @link http://conversion.org/volume/litre/
 */
export const Litre = scale("Litre", "L", mul(pow(unit(1, Decimetre), 3), 1));

/**
 * @summary 1 load = 50 cu ft
 * @description <b>Load</b> is  <a>volume</a> unit. Definition of 1 load ≡ 50 cu ft. Load volume unit is equal to 50 cubic feet ≡ 50 × 0.3048³ ≡ 1.4158423296 m³.
 * @link http://conversion.org/volume/load/
 */
export const Load = scale("Load", "load", mul(unit(1, CubicFoot), 50));

/**
 * @summary 1 µL = 1e-6 L
 * @description <b>Microlitre</b> is metric <a>volume</a> unit, symbol: [µL]. Definition of 1 microlitre  ≡ 10<sup>-6</sup> L. One microlitre volume is equivalent to one millionth of Litre ≡ 1 cubic millimetre.
 * @link http://conversion.org/volume/microlitre/
 */
export const Microlitre = scale("Microlitre", "µL", mul(unit(1, Litre), 0.000001));

/**
 * @summary 1 mL = 0.001 L
 * @description <b>Millilitre</b> is metric <a>volume</a> unit, symbol: [mL]. Definition of 1 millilitre  ≡ 0.001 L. One millilitre is volume equivalent to one cubic centimetre.
 * @link http://conversion.org/volume/millilitre/
 */
export const Millilitre = scale("Millilitre", "mL", mul(unit(1, Litre), 0.001));

/**
 * @summary 1 US fl oz = 1⁄128 gal (US)
 * @description <b>Ounce (fluid US customary)</b> is  <a>volume</a> unit, symbol: [US fl oz]. Definition of 1 ounce (fluid US customary) ≡  1⁄128 gal (US). US fluid ounce is unit of volume (or capacity) equal to 1/128 of US fluid gallon ≡ 29.5735295625×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/ounce-fluid-us-customary/
 */
export const OunceFluid_USCustomary = scale("Ounce (fluid US customary)", "US fl oz", mul(unit(1, Gallon_USFluid_Wine), 0.0078125));

/**
 * @summary 1 US fl oz = 30 mL
 * @description <b>Ounce (fluid US food nutrition labeling)</b> is  <a>volume</a> unit, symbol: [US fl oz]. Definition of 1 ounce (fluid US food nutrition labeling) ≡ 30 mL. By definition exactly 30 mL ≡ 3×10<sup>-5</sup> m³.
 * @link http://conversion.org/volume/ounce-fluid-us-food-nutrition-labeling/
 */
export const OunceFluid_USFoodNutritionLabeling = scale("Ounce (fluid US food nutrition labeling)", "US fl oz (food)", mul(unit(1, Millilitre), 30));

/**
 * @summary 1 per =
 * @description <b>Perch</b> is  <a>volume</a> unit, symbol: [per]. Definition of 1 perch ≡  16 1⁄2 ft ×  1 1⁄2 ft × ft. Perch is a traditional unit of volume for stone and other masonry 24.75 cu ft ≡ 0.700841953152 m³.
 * @link http://conversion.org/volume/perch/
 */
export const Perch = scale("Perch", "per", true);

/**
 * @summary 1 pL = 1e-9 L
 * @description <b>Picolitre</b> is metric <a>volume</a> unit, symbol: [pL]. Definition of 1 picolitre  ≡ 10<sup>-9</sup> L. One picolitre is very small unit. 1 mL contains million picolitres..
 * @link http://conversion.org/volume/picolitre/
 */
export const Picolitre = scale("Picolitre", "pL", mul(unit(1, Litre), 1e-9));

/**
 * @summary 1 pinch (US) = 1⁄48 US fl oz = 1/16 US tsp
 * @description <b>Pinch (US)</b> is  <a>volume</a> unit. Definition of 1 pinch (US) ≡  1⁄48 US fl oz ≡ 1/16 US tsp. US pinch is kitchen US (dry) Volume Unit ≡ 616.11519921875×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/pinch-us/
 */
export const Pinch_US = scale("Pinch (US)", "pinch (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.020833333333333332));

/**
 * @summary 1 pt (US fl) = 1⁄8 gal (US)
 * @description <b>Pint (US fluid)</b> is  <a>volume</a> unit, symbol: [pt (US fl)]. Definition of 1 pint (US fluid) ≡  1⁄8 gal (US). US fluid pint is unit of volume equal to one-eighth of an US liquid gallon≡ 473.176473×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/pint-us-fluid/
 */
export const Pint_USFluid = scale("Pint (US fluid)", "pt (US fl)", mul(unit(1, Gallon_USFluid_Wine), 0.125));

/**
 * @summary 1 pony = 3⁄4 US fl oz
 * @description <b>Pony</b> is  <a>volume</a> unit. Definition of 1 pony ≡  3⁄4 US fl oz. According to Encyclopædia Britannica Almanac 2009, a pony is 0.75 fluid ounces of liquor ≡ 22.180147171875×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/pony/
 */
export const Pony = scale("Pony", "pony", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.75));

/**
 * @summary 1 qt (US) = 1⁄4 gal (US fl)
 * @description <b>Quart (US fluid)</b> is  <a>volume</a> unit, symbol: [qt (US)]. Definition of 1 quart (US fluid) ≡  1⁄4 gal (US fl). Quart of an US fluid gallon ≡ 946.352946×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/quart-us-fluid/
 */
export const Quart_USFluid = scale("Quart (US fluid)", "qt (US)", mul(unit(1, Gallon_USFluid_Wine), 0.25));

/**
 * @summary 1 register ton = 100 cu ft
 * @description <b>Register ton</b> is  <a>volume</a> unit. Definition of 1 register ton ≡ 100 cu ft. Gross register tonnage a ship's total internal volume expressed in "register tons", each of which is equal to 100 cubic feet ≡ 2.8316846592 m³.
 * @link http://conversion.org/volume/register-ton/
 */
export const RegisterTon = scale("Register ton", "register ton", mul(unit(1, CubicFoot), 100));

/**
 * @summary 1 shot (US) =
 * @description <b>Shot (US)</b> is  <a>volume</a> unit. Definition of 1 shot (US) usually 1.5 US fl oz. Shot is a traditional unit of liquid volume. In the U.S. a shot is usually the same as a jigger 1.5 US fl oz ≡ 44.4 ml (but some bartenders use shot glasses of other sizes such as 1.25 US fl oz).
 * @link http://conversion.org/volume/shot-us/
 */
export const Shot_US = scale("Shot (US)", "shot (US)", true);

/**
 * @summary 1 tablespoon (Australian metric) = 20 ml
 * @description <b>Tablespoon (Australian metric)</b> is  <a>volume</a> unit. Definition of 1 tablespoon (Australian metric) ≡ 20 ml. Defined as exactly 20 mL ≡ 20.0×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/tablespoon-australian-metric/
 */
export const Tablespoon_AustralianMetric = scale("Tablespoon (Australian metric)", "tablespoon (Australian metric)", mul(unit(1, Millilitre), 20));

/**
 * @summary 1 tbsp (metric) = 15 ml
 * @description <b>Tablespoon (metric)</b> is  <a>volume</a> unit, symbol: [tbsp (metric)]. Definition of 1 tablespoon (metric) ≡ 15 ml. Metric tablespoon is exactly 15 mL ≡ 15.0×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/tablespoon-metric/
 */
export const TablespoonMetric = scale("Tablespoon (metric)", "tbsp (metric)", mul(unit(1, Millilitre), 15));

/**
 * @summary 1 tbsp (US) = 1⁄2 US fl oz
 * @description <b>Tablespoon (US customary)</b> is  <a>volume</a> unit, symbol: [tbsp (US)]. Definition of 1 tablespoon (US customary) ≡  1⁄2 US fl oz. The traditional US interpretation of the tablespoon as a unit of volume is 3 teaspoons or half US fluid ounce≡ 14.78676478125×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/tablespoon-us-customary/
 */
export const Tablespoon_USCustomary = scale("Tablespoon (US customary)", "tbsp (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.5));

/**
 * @summary 1 tbsp = 15 mL
 * @description <b>Tablespoon (US food nutrition labeling)</b> is  <a>volume</a> unit, symbol: [tbsp]. Definition of 1 tablespoon (US food nutrition labeling) ≡ 15 mL. Tablespoon for US food nutrition labeling is same as metric tablespoon, 15 mL ≡ 1.5×10<sup>-5</sup> m³.
 * @link http://conversion.org/volume/tablespoon-us-food-nutrition-labeling/
 */
export const Tablespoon_USFoodNutritionLabeling = scale("Tablespoon (US food nutrition labeling)", "tbsp", mul(unit(1, Millilitre), 15));

/**
 * @summary 1 tsp (metric) = 5 ml
 * @description <b>Teaspoon (metric)</b> is  <a>volume</a> unit, symbol: [tsp (metric)]. Definition of 1 teaspoon (metric) ≡ 5 ml. Metric teaspoon is exactly 5 mL ≡ 5.0×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/teaspoon-metric/
 */
export const TeaspoonMetric = scale("Teaspoon (metric)", "tsp (metric)", mul(unit(1, Millilitre), 5));

/**
 * @summary 1 tsp (US) = 1⁄6 US fl oz
 * @description <b>Teaspoon (US customary)</b> is  <a>volume</a> unit, symbol: [tsp (US)]. Definition of 1 teaspoon (US customary) ≡  1⁄6 US fl oz. US teaspoon is volume unit with capacity of one sixth of US fluid ounce ≡ 4.92892159375×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/teaspoon-us-customary/
 */
export const Teaspoon_USCustomary = scale("Teaspoon (US customary)", "tsp (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.16666666666666666));

/**
 * @summary 1 tsp = 5 mL
 * @description <b>Teaspoon (US food nutrition labeling)</b> is  <a>volume</a> unit, symbol: [tsp]. Definition of 1 teaspoon (US food nutrition labeling) ≡ 5 mL. Teaspoon (US food nutrition labeling) have same capacity as metric teaspoon ≡ 5 mL ≡ 5×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/teaspoon-us-food-nutrition-labeling/
 */
export const Teaspoon_USFoodNutritionLabeling = scale("Teaspoon (US food nutrition labeling)", "tsp", mul(unit(1, Millilitre), 5));

/**
 * @summary 1 timber foot = 1 cu ft
 * @description <b>Timber foot</b> is  <a>volume</a> unit. Definition of 1 timber foot ≡ 1 cu ft. Timperfoot is other name for cubic foot, cube with size of 1 ft × ft × ft ≡ 0.028316846592 m³.
 * @link http://conversion.org/volume/timber-foot/
 */
export const TimberFoot = scale("Timber foot", "timber foot", mul(unit(1, CubicFoot), 1));

/**
 * @summary 1 DT = 35 cu ft
 * @description <b>Ton (displacement)</b> is  <a>volume</a> unit, symbol: [DT]. Definition of 1 ton (displacement) ≡ 35 cu ft. The displacement, essentially the weight, of a ship is traditionally expressed in long tons. To simplify measurement it is determined by measuring the volume, rather than weight ≡ 35 × 0.3048³ ≡ 0.99108963072 m³.
 * @link http://conversion.org/volume/ton-displacement/
 */
export const TonDisplacement = scale("Ton (displacement)", "DT", mul(unit(1, CubicFoot), 35));

/**
 * @summary 1 ton (freight) = 40 cu ft
 * @description <b>Ton (freight)</b> is  <a>volume</a> unit. Definition of 1 ton (freight) ≡ 40 cu ft. The freight ton represents the volume of a truck, train or other freight carrier ≡ 40 × 0.3048³ ≡ 1.13267386368 m³.
 * @link http://conversion.org/volume/ton-freight/
 */
export const TonFreight = scale("Ton (freight)", "ton (freight)", mul(unit(1, CubicFoot), 40));

/**
 * @summary 1 tun = 252 gal (wine)
 * @description <b>Tun</b> is  <a>volume</a> unit. Definition of 1 tun ≡ 252 gal (wine). One tun is volume equivalent to 252 gallons (wine) ≡ 0.953923769568 m³.
 * @link http://conversion.org/volume/tun/
 */
export const Tun = scale("Tun", "tun", mul(unit(1, Gallon_USFluid_Wine), 252));

/**
 * @summary 1 bl = 42 gal (US)
 * @description <b>Barrel (petroleum); archaic blue-barrel</b> is  <a>volume</a> unit, symbol: [bl; bbl]. Definition of 1 barrel (petroleum); archaic blue-barrel ≡ 42 gal (US).  ≡ 42×0.003785411784 ≡ 0.158987294928 m³.
 * @link http://conversion.org/volume/barrel-petroleum-archaic-blue-barrel/
 */
export const BarrelPetroleumArchaicBlueBarrel = scale("Barrel (petroleum); archaic blue-barrel", "bl", mul(unit(1, Gallon_USFluid_Wine), 42));
export const BarrelPetroleumArchaicBlueBarrel__bbl = scale("Barrel (petroleum); archaic blue-barrel", "bbl", mul(unit(1, Gallon_USFluid_Wine), 42));

/**
 * @summary 1 bl (US) = 105 qt (US) = 105/32 bu (US lvl)
 * @description <b>Barrel (US dry)</b> is  <a>volume</a> unit, symbol: [bl (US)]. Definition of 1 barrel (US dry) ≡ 105 qt (US) ≡ 105/32 bu (US lvl).  ≡ 105 / 32 × (2150.42 × 0.0254 × 0.0254 × 0.0254) ≡ 0.115628198985075 m³.
 * @link http://conversion.org/volume/barrel-us-dry/
 */
export const Barrel_USDry = scale("Barrel (US dry)", "bl (US)", mul(unit(1, Quart_USFluid), 105));

/**
 * @summary 1 fl bl (US) = 31 1⁄2 gal (US)
 * @description <b>Barrel (US fluid)</b> is  <a>volume</a> unit, symbol: [fl bl (US)]. Definition of 1 barrel (US fluid) ≡  31 1⁄2 gal (US).  ≡ 31.5×0.003785411784 ≡ 0.119240471196 m³.
 * @link http://conversion.org/volume/barrel-us-fluid/
 */
export const Barrel_USFluid = scale("Barrel (US fluid)", "fl bl (US)", mul(unit(1, Gallon_USFluid_Wine), 31.5));

/**
 * @summary 1 fbm = 144 cu in
 * @description <b>Board-foot</b> is  <a>volume</a> unit, symbol: [fbm]. Definition of 1 board-foot ≡ 144 cu in. The board-foot is volume unit of lumber in the United States and Canada..
 * @link http://conversion.org/volume/board-foot/
 */
export const BoardFoot = scale("Board-foot", "fbm", mul(unit(1, CubicInch), 144));

/**
 * @summary 1 bu (US lvl) = 2150.42 cu in
 * @description <b>Bushel (US dry level)</b> is  <a>volume</a> unit, symbol: [bu (US lvl)]. Definition of 1 bushel (US dry level) ≡ 2150.42 cu in. ≡ 2150.42 × 0.0254³ ≡ 0.03523907016688 m³.
 * @link http://conversion.org/volume/bushel-us-dry-level/
 */
export const Bushel_USDryLevel = scale("Bushel (US dry level)", "bu (US lvl)", mul(unit(1, CubicInch), 2150.42));

/**
 * @summary 1 butt, pipe = 126 gal (wine)
 * @description <b>Butt, pipe</b> is  <a>volume</a> unit. Definition of 1 butt, pipe ≡ 126 gal (wine). The US butt (or pipe) was a measure of liquid volume equalling two hogsheads or 126 US gallons ≡ 0.476961884784 m³.
 * @link http://conversion.org/volume/butt-pipe/
 */
export const ButtPipe = scale("Butt, pipe", "butt, pipe", mul(unit(1, Gallon_USFluid_Wine), 126));

/**
 * @summary 1 cL = 0.01 L
 * @description <b>Centilitre</b> is metric <a>volume</a> unit, symbol: [cL]. Definition of 1 centilitre  ≡ 0.01 L. One centilitre is volume equivalent to hundreds of Litre (L/100).
 * @link http://conversion.org/volume/centilitre/
 */
export const Centilitre = scale("Centilitre", "cL", mul(unit(1, Litre), 0.01));

/**
 * @summary 1 cord-foot = 16 cu ft
 * @description <b>Cord-foot</b> is  <a>volume</a> unit. Definition of 1 cord-foot ≡ 16 cu ft.  ≡ 16 × 0.3048³≡ 0.453069545472 m³.
 * @link http://conversion.org/volume/cord-foot/
 */
export const CordFoot = scale("Cord-foot", "cord-foot", mul(unit(1, CubicFoot), 16));

/**
 * @summary 1 c (US) = 8 US fl oz = 1⁄16 gal (US)
 * @description <b>Cup (US customary)</b> is  <a>volume</a> unit, symbol: [c (US)]. Definition of 1 cup (US customary) ≡ 8 US fl oz ≡  1⁄16 gal (US). United States customary cup is defined as half a U.S. pint or 1/16 of US gallon ≡ 236.5882365×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/cup-us-customary/
 */
export const Cup_USCustomary = scale("Cup (US customary)", "c (US)", mul(unit(1, Gallon_USFluid_Wine), 0.0625));

/**
 * @summary 1 c (US) = 240 mL
 * @description <b>Cup (US food nutrition labeling)</b> is  <a>volume</a> unit, symbol: [c (US)]. Definition of 1 cup (US food nutrition labeling) ≡ 240 mL. The cup currently used in the United States for nutrition labelling is defined in United States law as 240 ml ≡ 2.4×10<sup>-4</sup> m³.
 * @link http://conversion.org/volume/cup-us-food-nutrition-labeling/
 */
export const Cup_USFoodNutritionLabeling = scale("Cup (US food nutrition labeling)", "c (US food)", mul(unit(1, Millilitre), 240));

/**
 * @summary 1 dash (US) = 1⁄96 US fl oz = 1⁄2 US pinch
 * @description <b>Dash (US)</b> is  <a>volume</a> unit. Definition of 1 dash (US) ≡  1⁄96 US fl oz ≡  1⁄2 US pinch.  ≡ 0.0000295735295625 / 96 ≡ 308.057599609375×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/dash-us/
 */
export const Dash_US = scale("Dash (US)", "dash (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.010416666666666666));

/**
 * @summary 1 dL = 0.1 L
 * @description <b>Decilitre</b> is metric <a>volume</a> unit, symbol: [dL]. Definition of 1 decilitre  ≡ 0.1 L. Decilitre is volume equivalent to one tenth of a liter (L/10).
 * @link http://conversion.org/volume/decilitre/
 */
export const Decilitre = scale("Decilitre", "dL", mul(unit(1, Litre), 0.1));

/**
 * @summary 1 daL = 10 L
 * @description <b>Dekalitre</b> is metric <a>volume</a> unit, symbol: [daL]. Definition of 1 dekalitre  ≡ 10 L. Dekalitre is equivalent to volume of ten litres.
 * @link http://conversion.org/volume/dekalitre/
 */
export const Dekalitre = scale("Dekalitre", "daL", mul(unit(1, Litre), 10));

/**
 * @summary 1 gtt (med.) = 1⁄12 ml
 * @description <b>Drop (medical)</b> is  <a>volume</a> unit, symbol: [gtt (med.)]. Definition of 1 drop (medical) ≡  1⁄12 ml. Medical drop is defined ad 1 mL / 12 ≡ 83.33(3)×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/drop-medical/
 */
export const DropMedical = scale("Drop (medical)", "gtt (med.)", mul(unit(1, Millilitre), 0.08333333333333333));

/**
 * @summary 1 gtt (metric) = 1⁄20 mL
 * @description <b>Drop (metric)</b> is  <a>volume</a> unit, symbol: [gtt (metric)]. Definition of 1 drop (metric) ≡  1⁄20 mL. Metric drop: 1 mL/20 ≡ 50.0×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/drop-metric/
 */
export const DropMetric = scale("Drop (metric)", "gtt (metric)", mul(unit(1, Millilitre), 0.05));

/**
 * @summary 1 gtt (US) = 1⁄360 US fl oz
 * @description <b>Drop (US)</b> is  <a>volume</a> unit, symbol: [gtt (US)]. Definition of 1 drop (US) ≡  1⁄360 US fl oz. Most common definition for US drop is US fl oz/30 ≡ 82.14869322916×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/drop-us/
 */
export const Drop_US = scale("Drop (US)", "gtt (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.002777777777777778));

/**
 * @summary 1 fifth = 1⁄5 US gal
 * @description <b>Fifth</b> is  <a>volume</a> unit. Definition of 1 fifth ≡  1⁄5 US gal. Fifth part of US gallon ≡ 0.003785411784 / 5 ≡ 757.0823568×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/fifth/
 */
export const Fifth = scale("Fifth", "fifth", mul(unit(1, Gallon_USFluid_Wine), 0.2));

/**
 * @summary 1 fl dr = 1⁄8 US fl oz
 * @description <b>Fluid dram (US)</b> is  <a>volume</a> unit, symbol: [fl dr]. Definition of 1 fluid dram (US) ≡  1⁄8 US fl oz. Fluid dram (or Drachm in UK spelling) ≡ US fl oz / 8 ≡ 3.6966911953125×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/fluid-dram-us/
 */
export const FluidDram_US = scale("Fluid dram (US)", "fl dr (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.125));

/**
 * @summary 1 gal (imp) = 4.54609 L
 * @description <b>Gallon (imperial)</b> is  <a>volume</a> unit, symbol: [gal (imp)]. Definition of 1 gallon (imperial) ≡ 4.54609 L. Since 1985 one imperial gallon is exactly defnied as ≡ 4.54609×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/gallon-imperial/
 */
export const GallonImperial = scale("Gallon (imperial)", "gal (imp)", mul(unit(1, Litre), 4.54609));

/**
 * @summary 1 gal (US dry) = 1⁄8 bu (US lvl)
 * @description <b>Gallon (US dry)</b> is  <a>volume</a> unit, symbol: [gal (US dry)]. Definition of 1 gallon (US dry) ≡  1⁄8 bu (US lvl). Dry US gallon is a rarely used and unofficial unit of measure ≡ 4.40488377086×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/gallon-us-dry/
 */
export const Gallon_USDry = scale("Gallon (US dry)", "gal (US dry)", mul(unit(1, Bushel_USDryLevel), 0.125));

/**
 * @summary 1 gi (US) = 4 US fl oz
 * @description <b>Gill (US)</b> is  <a>volume</a> unit, symbol: [gi (US)]. Definition of 1 gill (US) ≡ 4 US fl oz. The US gill is a unit of measurement for volume equal to a quarter of a US pint ≡ 118.29411825×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/gill-us/
 */
export const Gill_US = scale("Gill (US)", "gi (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 4));

/**
 * @summary 1 hL = 100 L
 * @description <b>Hectolitre</b> is metric <a>volume</a> unit, symbol: [hL]. Definition of 1 hectolitre  ≡ 100 L. Hectolitre is equivalent to volume of hundred litres.
 * @link http://conversion.org/volume/hectolitre/
 */
export const Hectolitre = scale("Hectolitre", "hL", mul(unit(1, Litre), 100));

/**
 * @summary 1 hhd (US) = 2 fl bl (US)
 * @description <b>Hogshead (US)</b> is  <a>volume</a> unit, symbol: [hhd (US)]. Definition of 1 hogshead (US) ≡ 2 fl bl (US). US hogshead is a large cask of liquid, equal to ≡ 0.238480942392 m³.
 * @link http://conversion.org/volume/hogshead-us/
 */
export const Hogshead_US = scale("Hogshead (US)", "hhd (US)", mul(unit(1, Barrel_USFluid), 2));

/**
 * @summary 1 jigger (bartending) = 1 1⁄2 US fl oz
 * @description <b>Jigger (bartending)</b> is  <a>volume</a> unit. Definition of 1 jigger (bartending) ≡  1 1⁄2 US fl oz. A jigger or measure is a bartending tool used to measure liquor, which is typically then poured into a cocktail shaker..
 * @link http://conversion.org/volume/jigger-bartending/
 */
export const JiggerBartending = scale("Jigger (bartending)", "jigger (bartending)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 1.5));

/**
 * @summary 1 kilderkin = 18 gal (imp)
 * @description <b>Kilderkin</b> is  <a>volume</a> unit. Definition of 1 kilderkin ≡ 18 gal (imp). The kilderkin (from the Dutch for small cask) is equal to half a barrel or two firkins or 18 imperial gallons ≡ 0.08182962 m³.
 * @link http://conversion.org/volume/kilderkin/
 */
export const Kilderkin = scale("Kilderkin", "kilderkin", mul(unit(1, GallonImperial), 18));

/**
 * @summary 1 min = 1⁄480 US fl oz = 1⁄60 US fl dr
 * @description <b>Minim (US)</b> is  <a>volume</a> unit, symbol: [min]. Definition of 1 minim (US) ≡  1⁄480 US fl oz ≡  1⁄60 US fl dr. US minim is volume unit equal to 1/480 part of US fluid ounce≡ 61.611519921875×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/minim-us/
 */
export const Minim_US = scale("Minim (US)", "min (US)", mul(unit(1, OunceFluid_USFoodNutritionLabeling), 0.0020833333333333333));

/**
 * @summary 1 fl oz (imp) = 1⁄160 gal (imp)
 * @description <b>Ounce (fluid imperial)</b> is  <a>volume</a> unit, symbol: [fl oz (imp)]. Definition of 1 ounce (fluid imperial) ≡  1⁄160 gal (imp). Imperial fluid ounce is unit of volume (or capacity) equal to 1/160 of imperial gallon ≡ 28.4130625×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/ounce-fluid-imperial/
 */
export const OunceFluidImperial = scale("Ounce (fluid imperial)", "fl oz (imp)", mul(unit(1, GallonImperial), 0.00625));

/**
 * @summary 1 pk = 2 gal (imp)
 * @description <b>Peck (imperial)</b> is  <a>volume</a> unit, symbol: [pk]. Definition of 1 peck (imperial) ≡ 2 gal (imp). A peck is an imperial (and US customary) unit of dry volume equivalent to 2 imperial gallons ≡ 9.09218×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/peck-imperial/
 */
export const PeckImperial = scale("Peck (imperial)", "pk (imp)", mul(unit(1, GallonImperial), 2));

/**
 * @summary 1 pk = 1⁄4 US lvl bu
 * @description <b>Peck (US dry)</b> is  <a>volume</a> unit, symbol: [pk]. Definition of 1 peck (US dry) ≡  1⁄4 US lvl bu. US peck is an US customary (and imperial) unit of dry volume equivalent to 2 US dry gallons ≡ 8.80976754172×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/peck-us-dry/
 */
export const Peck_USDry = scale("Peck (US dry)", "pk (US dry)", mul(unit(1, Bushel_USDryLevel), 0.25));

/**
 * @summary 1 pt (imp) = 1⁄8 gal (imp)
 * @description <b>Pint (imperial)</b> is  <a>volume</a> unit, symbol: [pt (imp)]. Definition of 1 pint (imperial) ≡  1⁄8 gal (imp). Imperial pint is unit of volume equal to one-eighth of an imperial gallon ≡ 568.26125×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/pint-imperial/
 */
export const PintImperial = scale("Pint (imperial)", "pt (imp)", mul(unit(1, GallonImperial), 0.125));

/**
 * @summary 1 pt (US dry) = 1⁄64 bu (US lvl) = 1⁄8 gal (US dry)
 * @description <b>Pint (US dry)</b> is  <a>volume</a> unit, symbol: [pt (US dry)]. Definition of 1 pint (US dry) ≡  1⁄64 bu (US lvl) ≡  1⁄8 gal (US dry). US dry pint is unit of volume equal to one-eighth of an US dry gallon ≡ 550.6104713575×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/pint-us-dry/
 */
export const Pint_USDry = scale("Pint (US dry)", "pt (US dry)", mul(unit(1, Gallon_USDry), 0.125));

/**
 * @summary 1 pottle = 1⁄2 gal (imp) = 80 fl oz (imp)
 * @description <b>Pottle; quartern</b> is  <a>volume</a> unit. Definition of 1 pottle; quartern ≡  1⁄2 gal (imp) ≡ 80 fl oz (imp). A former unit of volume, equivalent to half a gallon (imperial), used for liquids and corn ≡ 2.273045×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/pottle-quartern/
 */
export const PottleQuartern = scale("Pottle; quartern", "pottle", mul(unit(1, OunceFluidImperial), 80));
export const PottleQuartern__quartern = scale("Pottle; quartern", "quartern", mul(unit(1, OunceFluidImperial), 80));

/**
 * @summary 1 qt (imp) = 1⁄4 gal (imp)
 * @description <b>Quart (imperial)</b> is  <a>volume</a> unit, symbol: [qt (imp)]. Definition of 1 quart (imperial) ≡  1⁄4 gal (imp). Quart of an imperial gallon ≡ 1.1365225×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/quart-imperial/
 */
export const QuartImperial = scale("Quart (imperial)", "qt (imp)", mul(unit(1, GallonImperial), 0.25));

/**
 * @summary 1 qt (US) = 1⁄32 bu (US lvl) = 1⁄4 gal (US dry)
 * @description <b>Quart (US dry)</b> is  <a>volume</a> unit, symbol: [qt (US)]. Definition of 1 quart (US dry) ≡  1⁄32 bu (US lvl) ≡  1⁄4 gal (US dry). Quart of an US dry gallon ≡ 1.101220942715×10<sup>-3</sup> m³.
 * @link http://conversion.org/volume/quart-us-dry/
 */
export const Quart_USDry = scale("Quart (US dry)", "qt (US dry)", mul(unit(1, Gallon_USDry), 0.25));

/**
 * @summary 1 sack (US) = 3 bu (US lvl)
 * @description <b>Sack (US)</b> is  <a>volume</a> unit. Definition of 1 sack (US) ≡ 3 bu (US lvl). Sack is dry unit equivalent to 3 US level bushels ≡ 0.10571721050064 m³.
 * @link http://conversion.org/volume/sack-us/
 */
export const Sack_US = scale("Sack (US)", "sack (US)", mul(unit(1, Bushel_USDryLevel), 3));

/**
 * @summary 1 strike (US) = 2 bu (US lvl)
 * @description <b>Strike (US)</b> is  <a>volume</a> unit. Definition of 1 strike (US) ≡ 2 bu (US lvl). US strike is unit of volume equivalent to two US level bushels ≡ 0.07047814033376 m³.
 * @link http://conversion.org/volume/strike-us/
 */
export const Strike_US = scale("Strike (US)", "strike (US)", mul(unit(1, Bushel_USDryLevel), 2));

/**
 * @summary 1 tbsp = 1⁄2 fl oz (imp)
 * @description <b>Tablespoon (Canadian)</b> is  <a>volume</a> unit, symbol: [tbsp]. Definition of 1 tablespoon (Canadian) ≡  1⁄2 fl oz (imp). ≡ 28.4130625 mL /2 ≡ 14.20653125×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/tablespoon-canadian/
 */
export const Tablespoon_Canadian = scale("Tablespoon (Canadian)", "tbsp (Canadian)", mul(unit(1, OunceFluidImperial), 0.5));

/**
 * @summary 1 tbsp (imp) = 5⁄8 fl oz (imp)
 * @description <b>Tablespoon (imperial)</b> is  <a>volume</a> unit, symbol: [tbsp (imp)]. Definition of 1 tablespoon (imperial) ≡  5⁄8 fl oz (imp). Imperial tablespoon is a unit of volume, especially widely used in cooking recipes and pharmaceutic prescriptions, equivalent with 5/8 imperial fluid ounce ≡ 17.7581640625×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/tablespoon-imperial/
 */
export const TablespoonImperial = scale("Tablespoon (imperial)", "tbsp (imp)", mul(unit(1, OunceFluidImperial), 0.625));

/**
 * @summary 1 tsp = 1⁄6 fl oz (imp)
 * @description <b>Teaspoon (Canadian)</b> is  <a>volume</a> unit, symbol: [tsp]. Definition of 1 teaspoon (Canadian) ≡  1⁄6 fl oz (imp). Canadian teaspoon is volume unit equivalent with one sixth of imperial fluid ounce ≡ 4.73551041(6)×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/teaspoon-canadian/
 */
export const Teaspoon_Canadian = scale("Teaspoon (Canadian)", "tsp (Canadian)", mul(unit(1, OunceFluidImperial), 0.16666666666666666));

/**
 * @summary 1 wey (US) = 40 bu (US lvl)
 * @description <b>Wey (US)</b> is  <a>volume</a> unit. Definition of 1 wey (US) ≡ 40 bu (US lvl). As a measure of volume for dry commodities, it denoted roughly 40 US level bushels or 320 gallons ≡ 1.4095628066752 m³.
 * @link http://conversion.org/volume/wey-us/
 */
export const Wey_US = scale("Wey (US)", "wey (US)", mul(unit(1, Bushel_USDryLevel), 40));

/**
 * @summary 1 bl (imp) = 36 gal (imp)
 * @description <b>Barrel (imperial)</b> is  <a>volume</a> unit, symbol: [bl (imp)]. Definition of 1 barrel (imperial) ≡ 36 gal (imp).  ≡ 36×0.00454609 m³ ≡ 0.16365924 m³.
 * @link http://conversion.org/volume/barrel-imperial/
 */
export const BarrelImperial = scale("Barrel (imperial)", "bl (imp)", mul(unit(1, GallonImperial), 36));

/**
 * @summary 1 bkt = 4 gal (imp)
 * @description <b>Bucket (imperial)</b> is  <a>volume</a> unit, symbol: [bkt]. Definition of 1 bucket (imperial) ≡ 4 gal (imp).  ≡ 4×0.00454609 ≡ 0.01818436 m³.
 * @link http://conversion.org/volume/bucket-imperial/
 */
export const BucketImperial = scale("Bucket (imperial)", "bkt", mul(unit(1, GallonImperial), 4));

/**
 * @summary 1 bu (imp) = 8 gal (imp)
 * @description <b>Bushel (imperial)</b> is  <a>volume</a> unit, symbol: [bu (imp)]. Definition of 1 bushel (imperial) ≡ 8 gal (imp). An imperial bushel was unit of weight or mass based upon an earlier measure of dry capacity. ≡ 0.03636872 m³.
 * @link http://conversion.org/volume/bushel-imperial/
 */
export const BushelImperial = scale("Bushel (imperial)", "bu (imp)", mul(unit(1, GallonImperial), 8));

/**
 * @summary 1 bu (US) = 1 1⁄4 bu (US lvl)
 * @description <b>Bushel (US dry heaped)</b> is  <a>volume</a> unit, symbol: [bu (US)]. Definition of 1 bushel (US dry heaped) ≡  1 1⁄4 bu (US lvl). ≡ 1.25 × (2150.42×0.0254³) ≡ 0.0440488377086 m³.
 * @link http://conversion.org/volume/bushel-us-dry-heaped/
 */
export const Bushel_USDryHeaped = scale("Bushel (US dry heaped)", "bu (US)", mul(unit(1, Bushel_USDryLevel), 1.25));

/**
 * @summary 1 coomb = 4 bu (imp)
 * @description <b>Coomb</b> is  <a>volume</a> unit. Definition of 1 coomb ≡ 4 bu (imp). A coomb is a measure of volume. In 13th century it was defined as 4 imperial bushels ≡ 0.14547488 m³.
 * @link http://conversion.org/volume/coomb/
 */
export const Coomb = scale("Coomb", "coomb", mul(unit(1, BushelImperial), 4));

/**
 * @summary 1 cup (breakfast) = 10 fl oz (imp)
 * @description <b>Cup (breakfast)</b> is  <a>volume</a> unit. Definition of 1 cup (breakfast) ≡ 10 fl oz (imp). A unit of liquid volume, used in food recipes in Britain ≡ 284.130625×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/cup-breakfast/
 */
export const CupBreakfast = scale("Cup (breakfast)", "cup (breakfast)", mul(unit(1, OunceFluidImperial), 10));

/**
 * @summary 1 c (CA) = 8 fl oz (imp)
 * @description <b>Cup (Canadian)</b> is  <a>volume</a> unit, symbol: [c (CA)]. Definition of 1 cup (Canadian) ≡ 8 fl oz (imp). ≡ 8 × 0.0000284130625 ≡ 227.3045×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/cup-canadian/
 */
export const Cup_Canadian = scale("Cup (Canadian)", "c (CA)", mul(unit(1, OunceFluidImperial), 8));

/**
 * @summary 1 gtt (imp) = 1⁄288 fl oz (imp)
 * @description <b>Drop (imperial)</b> is  <a>volume</a> unit, symbol: [gtt (imp)]. Definition of 1 drop (imperial) ≡  1⁄288 fl oz (imp). Most common definition for imperial drop is fl oz (imp)/288 ≡ 98.6564670138×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/drop-imperial/
 */
export const DropImperial = scale("Drop (imperial)", "gtt (imp)", mul(unit(1, OunceFluidImperial), 0.003472222222222222));

/**
 * @summary 1 firkin = 9 gal (imp)
 * @description <b>Firkin</b> is  <a>volume</a> unit. Definition of 1 firkin ≡ 9 gal (imp). Firkin is equal to nine imperial gallon ≡ 9×0.00454609 ≡ 0.04091481 m³.
 * @link http://conversion.org/volume/firkin/
 */
export const Firkin = scale("Firkin", "firkin", mul(unit(1, GallonImperial), 9));

/**
 * @summary 1 fl dr = 1⁄8 fl oz (imp)
 * @description <b>Fluid drachm (imperial)</b> is  <a>volume</a> unit, symbol: [fl dr]. Definition of 1 fluid drachm (imperial) ≡  1⁄8 fl oz (imp). Drachm is British spelling for dram: fl oz (imperial) / 8 ≡ 3.5516328125×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/fluid-drachm-imperial/
 */
export const FluidDrachmImperial = scale("Fluid drachm (imperial)", "fl dr (imp)", mul(unit(1, OunceFluidImperial), 0.125));

/**
 * @summary 1 fl s = 1⁄24 fl oz (imp)
 * @description <b>Fluid scruple (imperial)</b> is  <a>volume</a> unit, symbol: [fl s]. Definition of 1 fluid scruple (imperial) ≡  1⁄24 fl oz (imp). The scruple is a small unit in the apothecaries system, derived from the old Roman scrupulum unit, equal to: fl oz (imp) / 24 ≡ 1.18387760416×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/fluid-scruple-imperial/
 */
export const FluidScrupleImperial = scale("Fluid scruple (imperial)", "fl s (imp)", mul(unit(1, OunceFluidImperial), 0.041666666666666664));

/**
 * @summary 1 gi (imp) = 5 fl oz (imp)
 * @description <b>Gill (imperial); Noggin</b> is  <a>volume</a> unit, symbol: [gi (imp); nog]. Definition of 1 gill (imperial); Noggin ≡ 5 fl oz (imp). The imperial gill or teacup is a unit of measurement for volume equal to a quarter of a imperial pint ≡ 142.0653125×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/gill-imperial-noggin/
 */
export const GillImperial_Noggin = scale("Gill (imperial); Noggin", "gi (imp)", mul(unit(1, OunceFluidImperial), 5));
export const GillImperial_Noggin__nog = scale("Gill (imperial); Noggin", "nog", mul(unit(1, OunceFluidImperial), 5));

/**
 * @summary 1 hhd (imp) = 2 bl (imp)
 * @description <b>Hogshead (imperial)</b> is  <a>volume</a> unit, symbol: [hhd (imp)]. Definition of 1 hogshead (imperial) ≡ 2 bl (imp). Hogshead is a large cask of liquid. Imperial hogshead is equal to 0.32731848 m³.
 * @link http://conversion.org/volume/hogshead-imperial/
 */
export const HogsheadImperial = scale("Hogshead (imperial)", "hhd (imp)", mul(unit(1, BarrelImperial), 2));

/**
 * @summary 1 last = 80 bu (imp)
 * @description <b>Last</b> is  <a>volume</a> unit. Definition of 1 last ≡ 80 bu (imp). The last was a large English unit of volume. It referred to standardized amounts of ships lading and varied by commodity and over time ≡ 2.9094976 m³.
 * @link http://conversion.org/volume/last/
 */
export const Last = scale("Last", "last", mul(unit(1, BushelImperial), 80));

/**
 * @summary 1 min = 1⁄480 fl oz (imp) = 1/60 fl dr (imp)
 * @description <b>Minim (imperial)</b> is  <a>volume</a> unit, symbol: [min]. Definition of 1 minim (imperial) ≡  1⁄480 fl oz (imp) ≡ 1/60 fl dr (imp). Imperial minim is volume unit equal to 1/480 part of imperial ounce ≡ 59.1938802083×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/minim-imperial/
 */
export const MinimImperial = scale("Minim (imperial)", "min (imp)", mul(unit(1, OunceFluidImperial), 0.0020833333333333333));

/**
 * @summary 1 pinch (imperial) = 1⁄192 gi (imp) = 1/16 tsp (imp)
 * @description <b>Pinch (imperial)</b> is  <a>volume</a> unit. Definition of 1 pinch (imperial) ≡  1⁄192 gi (imp) ≡ 1/16 tsp (imp). Imperial pinch is a kitchen volume unit used to dose salt, sugar, spice ≡ 739.92350260416×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/pinch-imperial/
 */
export const PinchImperial = scale("Pinch (imperial)", "pinch (imperial)", mul(unit(1, GillImperial_Noggin), 0.005208333333333333));

/**
 * @summary 1 quarter = 8 bu (imp)
 * @description <b>Quarter; pail</b> is  <a>volume</a> unit. Definition of 1 quarter; pail ≡ 8 bu (imp). Equivalent to 8 imperial bushels: 8 × 0.03636872 ≡ 0.29094976 m³.
 * @link http://conversion.org/volume/quarter-pail/
 */
export const QuarterPail = scale("Quarter; pail", "quarter (volume)", mul(unit(1, BushelImperial), 8));
export const QuarterPail__pail = scale("Quarter; pail", "pail", mul(unit(1, BushelImperial), 8));

/**
 * @summary 1 sack (imperial) = 3 bu (imp)
 * @description <b>Sack (imperial); bag</b> is  <a>volume</a> unit. Definition of 1 sack (imperial); bag ≡ 3 bu (imp). Dry unit, sack (or bag) equivalent to 3 imperial bushels ≡ 0.10910616 m³.
 * @link http://conversion.org/volume/sack-imperial-bag/
 */
export const SackImperialBag = scale("Sack (imperial); bag", "sack (imperial)", mul(unit(1, BushelImperial), 3));
export const SackImperialBag__bag = scale("Sack (imperial); bag", "bag", mul(unit(1, BushelImperial), 3));

/**
 * @summary 1 seam = 8 bu (imperial)
 * @description <b>Seam</b> is  <a>volume</a> unit. Definition of 1 seam ≡ 8 bu (imperial). A Seam is an obsolete unit of volume in the UK ≡ 0.29094976 m³.
 * @link http://conversion.org/volume/seam/
 */
export const Seam = scale("Seam", "seam", mul(unit(1, BushelImperial), 8));

/**
 * @summary 1 strike (imperial) = 2 bu (imp)
 * @description <b>Strike (imperial)</b> is  <a>volume</a> unit. Definition of 1 strike (imperial) ≡ 2 bu (imp). Imperial strike unit of volume equivalent to two imperial bushels ≡ 0.07273744 m³.
 * @link http://conversion.org/volume/strike-imperial/
 */
export const StrikeImperial = scale("Strike (imperial)", "strike (imperial)", mul(unit(1, BushelImperial), 2));

/**
 * @summary 1 tsp (imp) = 1⁄24 gi (imp)
 * @description <b>Teaspoon (imperial)</b> is  <a>volume</a> unit, symbol: [tsp (imp)]. Definition of 1 teaspoon (imperial) ≡  1⁄24 gi (imp). Imperial teaspoon is volume unit (widely used in cooking recipes) equivalent with 1/24 of imperial gill ≡ 5.91938802083×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/teaspoon-imperial/
 */
export const TeaspoonImperial = scale("Teaspoon (imperial)", "tsp (imp)", mul(unit(1, GillImperial_Noggin), 0.041666666666666664));

/**
 * @summary 1 ton (water) = 28 bu (imp)
 * @description <b>Ton (water)</b> is  <a>volume</a> unit. Definition of 1 ton (water) ≡ 28 bu (imp). The water ton is used chiefly in Great Britain, in statistics dealing with petroleum products, and is defined as 224 imperial gallons ≡ 1.01832416 m³.
 * @link http://conversion.org/volume/ton-water/
 */
export const TonWater = scale("Ton (water)", "ton (water)", mul(unit(1, BushelImperial), 28));

/**
 * @summary 1 dash (imperial) = 1⁄384 gi (imp) = 1⁄2 pinch (imp)
 * @description <b>Dash (imperial)</b> is  <a>volume</a> unit. Definition of 1 dash (imperial) ≡  1⁄384 gi (imp) ≡  1⁄2 pinch (imp).  ≡ 5 × 0.0000284130625 / 384 ≡ 369.96175130208(3)×10<sup>-9</sup> m³.
 * @link http://conversion.org/volume/dash-imperial/
 */
export const DashImperial = scale("Dash (imperial)", "dash (imperial)", mul(unit(1, GillImperial_Noggin), 0.0026041666666666665));

/**
 * @summary 1 dessertspoon (imperial) = 1⁄12 gi (imp)
 * @description <b>Dessertspoon (imperial)</b> is  <a>volume</a> unit. Definition of 1 dessertspoon (imperial) ≡  1⁄12 gi (imp). A dessertspoon unit of volume based on a spoon designed specifically for eating dessert. ≡ 11.8387760416×10<sup>-6</sup> m³.
 * @link http://conversion.org/volume/dessertspoon-imperial/
 */
export const DessertspoonImperial = scale("Dessertspoon (imperial)", "dessertspoon (imperial)", mul(unit(1, GillImperial_Noggin), 0.08333333333333333));


export const VOLUME_UNITS: ScaleSystem = {
  AcreFoot,
  AcreInch,
  CordFirewood,
  CubicCentimetre,
  CubicDecimetre,
  CubicDekametre,
  CubicFathom,
  CubicFoot,
  CubicHectometre,
  CubicInch,
  CubicKilometre,
  CubicMetre,
  CubicMicrometre,
  CubicMile,
  CubicMillimetre,
  CubicNanometre,
  CubicYard,
  CupMetric,
  GallonBeer,
  Gallon_USFluid_Wine,
  Lambda,
  Litre,
  Load,
  Microlitre,
  Millilitre,
  OunceFluid_USCustomary,
  OunceFluid_USFoodNutritionLabeling,
  Perch,
  Picolitre,
  Pinch_US,
  Pint_USFluid,
  Pony,
  Quart_USFluid,
  RegisterTon,
  Shot_US,
  Tablespoon_AustralianMetric,
  TablespoonMetric,
  Tablespoon_USCustomary,
  Tablespoon_USFoodNutritionLabeling,
  TeaspoonMetric,
  Teaspoon_USCustomary,
  Teaspoon_USFoodNutritionLabeling,
  TimberFoot,
  TonDisplacement,
  TonFreight,
  Tun,
  BarrelPetroleumArchaicBlueBarrel,
  BarrelPetroleumArchaicBlueBarrel__bbl,
  Barrel_USDry,
  Barrel_USFluid,
  BoardFoot,
  Bushel_USDryLevel,
  ButtPipe,
  Centilitre,
  CordFoot,
  Cup_USCustomary,
  Cup_USFoodNutritionLabeling,
  Dash_US,
  Decilitre,
  Dekalitre,
  DropMedical,
  DropMetric,
  Drop_US,
  Fifth,
  FluidDram_US,
  GallonImperial,
  Gallon_USDry,
  Gill_US,
  Hectolitre,
  Hogshead_US,
  JiggerBartending,
  Kilderkin,
  Minim_US,
  OunceFluidImperial,
  PeckImperial,
  Peck_USDry,
  PintImperial,
  Pint_USDry,
  PottleQuartern,
  PottleQuartern__quartern,
  QuartImperial,
  Quart_USDry,
  Sack_US,
  Strike_US,
  Tablespoon_Canadian,
  TablespoonImperial,
  Teaspoon_Canadian,
  Wey_US,
  BarrelImperial,
  BucketImperial,
  BushelImperial,
  Bushel_USDryHeaped,
  Coomb,
  CupBreakfast,
  Cup_Canadian,
  DropImperial,
  Firkin,
  FluidDrachmImperial,
  FluidScrupleImperial,
  GillImperial_Noggin,
  GillImperial_Noggin__nog,
  HogsheadImperial,
  Last,
  MinimImperial,
  PinchImperial,
  QuarterPail,
  QuarterPail__pail,
  SackImperialBag,
  SackImperialBag__bag,
  Seam,
  StrikeImperial,
  TeaspoonImperial,
  TonWater,
  DashImperial,
  DessertspoonImperial,

  [scaleSystemNameSymbol]: "volume units",
}

export default VOLUME_UNITS;
