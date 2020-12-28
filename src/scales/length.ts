import {scale, unit} from "../scale";
import {mul, pow} from '../operators';
import {ScaleSystem} from "../interfaces";
import {scaleSystemNameSymbol} from "../symbols";

import {metre, SpeedOfLight, second} from './SI'

/** 
 * @summary 1 Å = 1e-10 m
 * @description <b>ångström</b> is metric <i>length</i> unit, symbol: [Å]. Definition of 1 ångström ≡ 1e-10 m . ≡ 0.1 nm.
 * @link http://conversion.org/length/angstrom/
 */
export const angstrom = scale("ångström", "Å", mul(unit(1, metre), 1e-10));

/** 
 * @summary 1 AU = 149597870700 m
 * @description <b>Astronomical unit</b> is  <i>length</i> unit, symbol: [AU]. Definition of 1 astronomical unit ≡ 149597870700 m. ≡ Distance from Earth to Sun .
 * @link http://conversion.org/length/astronomical-unit/
 */
export const AstronomicalUnit = scale("Astronomical unit", "AU", mul(unit(1, metre), 149597870700));

/** 
 * @summary 1 a₀ = 5.29e-11 m = Bohr radius of hydrogen
 * @description <b>Bohr, atomic unit of length</b> is  <i>length</i> unit, symbol: [a₀]. Definition of 1 bohr, atomic unit of length ≡ 5.29e-11 m ≡ Bohr radius of hydrogen . .
 * @link http://conversion.org/length/bohr-atomic-unit-of-length/
 */
export const BohrAtomicUnitOfLength = scale("Bohr, atomic unit of length", "a₀", mul(unit(1, metre), 5.29e-11));

/** 
 * @summary 1 cm = 1e-2 m
 * @description <b>Centimetre</b> is metric <i>length</i> unit, symbol: [cm]. Definition of 1 centimetre  ≡1e-2 m. .
 * @link http://conversion.org/length/centimetre/
 */
export const Centimetre = scale("Centimetre", "cm", mul(unit(1, metre), 0.01));

/** 
 * @summary 1 dm = 1e-1 m
 * @description <b>Decimetre</b> is metric <i>length</i> unit, symbol: [dm]. Definition of 1 decimetre  ≡1e-1 m. .
 * @link http://conversion.org/length/decimetre/
 */
export const Decimetre = scale("Decimetre", "dm", mul(unit(1, metre), 0.1));

/** 
 * @summary 1 dam = 10 m
 * @description <b>Dekametre</b> is metric <i>length</i> unit, symbol: [dam]. Definition of 1 dekametre  ≡10 m. .
 * @link http://conversion.org/length/dekametre/
 */
export const Dekametre = scale("Dekametre", "dam", mul(unit(1, metre), 10));

/** 
 * @summary 1 fm = 1e-15 m
 * @description <b>Fermi</b> is  <i>length</i> unit, symbol: [fm]. Definition of 1 fermi ≡ 1e-15 m. .
 * @link http://conversion.org/length/fermi/
 */
export const Fermi = scale("Fermi", "fm", mul(unit(1, metre), 1e-15));

/** 
 * @summary 1 ft = 0.3048 m = 1⁄3 yd = 12 inches
 * @description <b>Foot (International)</b> is  <i>length</i> unit, symbol: [ft]. Definition of 1 foot (International) ≡ 0.3048 m ≡  1⁄3 yd ≡ 12 inches . .
 * @link http://conversion.org/length/foot-international/
 */
export const Foot_International = scale("Foot (International)", "ft", mul(unit(1, metre), 0.3048));

/** 
 * @summary 1 mf = √ 1⁄10 m
 * @description <b>Foot, metric</b> is  <i>length</i> unit, symbol: [mf]. Definition of 1 foot, metric ≡ √ 1⁄10 m . .
 * @link http://conversion.org/length/foot-metric/
 */
export const FootMetric = scale("Foot, metric", "mf", mul(unit(1, metre), 0.31622776601683794));

/** 
 * @summary 1 lmf = 1⁄3 m
 * @description <b>Foot, metric (long)</b> is  <i>length</i> unit, symbol: [lmf]. Definition of 1 foot, metric (long) ≡  1⁄3 m . .
 * @link http://conversion.org/length/foot-metric-long/
 */
export const FootMetricLong = scale("Foot, metric (long)", "lmf", mul(unit(1, metre), 0.3333333333333333));

/** 
 * @summary 1 smf = 0.30 m
 * @description <b>Foot, metric (short)</b> is  <i>length</i> unit, symbol: [smf]. Definition of 1 foot, metric (short) ≡ 0.30 m . .
 * @link http://conversion.org/length/foot-metric-short/
 */
export const FootMetricShort = scale("Foot, metric (short)", "smf", mul(unit(1, metre), 0.3));

/** 
 * @summary 1 ft (US) = 1200⁄3937 m
 * @description <b>Foot (US Survey)</b> is  <i>length</i> unit, symbol: [ft (US)]. Definition of 1 foot (US Survey) ≡  1200⁄3937 m. .
 * @link http://conversion.org/length/foot-us-survey/
 */
export const Foot_US_Survey = scale("Foot (US Survey)", "ft (US)", mul(unit(1, metre), 0.3048006096012192));

/** 
 * @summary 1 fur = 10 chains = 660 ft = 220 yd
 * @description <b>Furlong</b> is  <i>length</i> unit, symbol: [fur]. Definition of 1 furlong ≡ 10 chains ≡ 660 ft ≡ 220 yd. .
 * @link http://conversion.org/length/furlong/
 */
export const Furlong = scale("Furlong", "fur", mul(unit(1, Foot_International), 660));

/** 
 * @summary 1 hm = 100 m
 * @description <b>Hectometre</b> is metric <i>length</i> unit, symbol: [hm]. Definition of 1 hectometre  ≡100 m. .
 * @link http://conversion.org/length/hectometre/
 */
export const Hectometre = scale("Hectometre", "hm", mul(unit(1, metre), 100));

/** 
 * @summary 1 in = 2.54 cm = 1⁄36 yd = 1⁄12 ft
 * @description <b>Inch (International)</b> is  <i>length</i> unit, symbol: [in]. Definition of 1 inch (International) ≡ 2.54 cm ≡  1⁄36 yd ≡  1⁄12 ft . .
 * @link http://conversion.org/length/inch-international/
 */
export const Inch_International = scale("Inch (International)", "in", mul(unit(1, Foot_International), 0.08333333333333333));

/** 
 * @summary 1 km = 1000 m
 * @description <b>Kilometre</b> is metric <i>length</i> unit, symbol: [km]. Definition of 1 kilometre  ≡1000 m. .
 * @link http://conversion.org/length/kilometre/
 */
export const Kilometre = scale("Kilometre", "km", mul(unit(1, metre), 1000));

/** 
 * @summary 1 lea = 3 Statute miles = 5280 foot (US Survey)
 * @description <b>League (land)</b> is  <i>length</i> unit, symbol: [lea]. Definition of 1 league (land) ≡ 3 Statute miles ≡ 5280 foot (US Survey). ≡ 1 hour walk, Currently defined in US as 3 Statute miles, but historically varied from 2 to 9 km .
 * @link http://conversion.org/length/league-land/
 */
export const LeagueLand = scale("League (land)", "lea", mul(unit(1, Foot_US_Survey), 5280));

/** 
 * @summary 1 light-second = 1 c₀ × s = Distance light travels in one second in vacuum
 * @description <b>Light-second</b> is  <i>length</i> unit. Definition of 1 light-second ≡ 1 c₀ × s ≡ Distance light travels in one second in vacuum . .
 * @link http://conversion.org/length/light-second/
 */
export const LightSecond = scale("Light-second", "light-second", mul(unit(1, SpeedOfLight), unit(1, second), 1));

/** 
 * @summary 1 ln = 1⁄12 in
 * @description <b>Line</b> is  <i>length</i> unit, symbol: [ln]. Definition of 1 line ≡  1⁄12 in. .
 * @link http://conversion.org/length/line/
 */
export const Line = scale("Line", "ln", mul(unit(1, Inch_International), 0.08333333333333333));

/** 
 * @summary 1 lnk = 1⁄100 ch = 0.66 ft (US) = 7.92 in
 * @description <b>Link (Gunter's; Surveyor's)</b> is  <i>length</i> unit, symbol: [lnk]. Definition of 1 link (Gunter's; Surveyor's) ≡  1⁄100 ch ≡ 0.66 ft (US) ≡ 7.92 in . .
 * @link http://conversion.org/length/link-gunters-surveyors/
 */
export const Link_GunterS_SurveyorS = scale("Link (Gunter's; Surveyor's)", "lnk", mul(unit(1, Inch_International), 7.92));

/** 
 * @summary 1 lnk (eng) = 1 ft
 * @description <b>Link (Ramsden's; Engineer's)</b> is  <i>length</i> unit, symbol: [lnk]. Definition of 1 link (Ramsden's; Engineer's) ≡ 1 ft. .
 * @link http://conversion.org/length/link-ramsdens-engineers/
 */
export const Link_RamsdenS_EngineerS = scale("Link (Ramsden's; Engineer's)", "lnk (eng)", mul(unit(1, Foot_International), 1));

/** 
 * @summary 1 mickey = 1⁄200 in
 * @description <b>Mickey</b> is  <i>length</i> unit. Definition of 1 mickey ≡  1⁄200 in . .
 * @link http://conversion.org/length/mickey/
 */
export const Mickey = scale("Mickey", "mickey", mul(unit(1, Inch_International), 0.005));

/** 
 * @summary 1 µm = 1e-6 m
 * @description <b>Micrometre</b> is metric <i>length</i> unit, symbol: [µm]. Definition of 1 micrometre  ≡1e-6 m. .
 * @link http://conversion.org/length/micrometre/
 */
export const Micrometre = scale("Micrometre", "µm", mul(unit(1, metre), 0.000001));

/** 
 * @summary 1 µ = 1e-6 m
 * @description <b>Micron</b> is  <i>length</i> unit, symbol: [µ]. Definition of 1 micron ≡ 1e-6 m. Old name for micrometre.
 * @link http://conversion.org/length/micron/
 */
export const Micron = scale("Micron", "µ", mul(unit(1, metre), 0.000001));

/** 
 * @summary 1 mil (Sweden and Norway) = 10 km
 * @description <b>Mil (Sweden and Norway)</b> is  <i>length</i> unit, symbol: [mil (Sweden and Norway)]. Definition of 1 mil (Sweden and Norway) ≡ 10 km . .
 * @link http://conversion.org/length/mil-sweden-and-norway/
 */
export const Mil_SwedenAnd_Norway = scale("Mil (Sweden and Norway)", "mil (Sweden and Norway)", mul(unit(1, Kilometre), 10));

/** 
 * @summary 1 mil = 1e-3 in
 * @description <b>Mil; thou</b> is  <i>length</i> unit, symbol: [mil]. Definition of 1 mil; thou ≡ 1e-3 in . .
 * @link http://conversion.org/length/mil-thou/
 */
export const MilThou = scale("Mil; thou", "mil", mul(unit(1, Inch_International), 0.001));

/** 
 * @summary 1 mi = 80 chains = 5280 ft = 1760 yd
 * @description <b>Mile (international)</b> is  <i>length</i> unit, symbol: [mi]. Definition of 1 mile (international) ≡ 80 chains ≡ 5280 ft ≡ 1760 yd . .
 * @link http://conversion.org/length/mile-international/
 */
export const MileInternational = scale("Mile (international)", "mi", mul(unit(1, Foot_International), 5280));

/** 
 * @summary 1 mile (tactical or data) = 6000 ft
 * @description <b>Mile (tactical or data)</b> is  <i>length</i> unit. Definition of 1 mile (tactical or data) ≡ 6000 ft . .
 * @link http://conversion.org/length/mile-tactical-or-data/
 */
export const MileTacticalOrData = scale("Mile (tactical or data)", "mile (tactical or data)", mul(unit(1, Foot_International), 6000));

/** 
 * @summary 1 mi (US) = 5280 US Survey feet
 * @description <b>Mile (US Survey)</b> is  <i>length</i> unit, symbol: [mi (US)]. Definition of 1 mile (US Survey) ≡ 5280 US Survey feet ≡ (5280 ×  1200⁄3937) m . .
 * @link http://conversion.org/length/mile-us-survey/
 */
export const Mile_US_Survey = scale("Mile (US Survey)", "mi (US)", mul(unit(1, Foot_US_Survey), 5280));

/** 
 * @summary 1 mm = 1e-3 m
 * @description <b>Millimetre</b> is metric <i>length</i> unit, symbol: [mm]. Definition of 1 millimetre  ≡1e-3 m. .
 * @link http://conversion.org/length/millimetre/
 */
export const Millimetre = scale("Millimetre", "mm", mul(unit(1, metre), 0.001));

/** 
 * @summary 1 nail (cloth) = 2 1⁄4 in
 * @description <b>Nail (cloth)</b> is  <i>length</i> unit. Definition of 1 nail (cloth) ≡  2 1⁄4 in. .
 * @link http://conversion.org/length/nail-cloth/
 */
export const NailCloth = scale("Nail (cloth)", "nail (cloth)", mul(unit(1, Inch_International), 2.25));

/** 
 * @summary 1 nm = 1e-9 m
 * @description <b>Nanometre</b> is metric <i>length</i> unit, symbol: [nm]. Definition of 1 nanometre  ≡1e-9 m. .
 * @link http://conversion.org/length/nanometre/
 */
export const Nanometre = scale("Nanometre", "nm", mul(unit(1, metre), 1e-9));

/** 
 * @summary 1 NM (Adm) = 6080 ft
 * @description <b>Nautical mile (Admiralty)</b> is  <i>length</i> unit, symbol: [NM (Adm); nmi (Adm)]. Definition of 1 nautical mile (Admiralty) ≡ 6080 ft . .
 * @link http://conversion.org/length/nautical-mile-admiralty/
 */
export const NauticalMile_Admiralty = scale("Nautical mile (Admiralty)", "NM (Adm)", mul(unit(1, Foot_International), 6080));
export const NauticalMile_Admiralty__nmi_Adm = scale("Nautical mile (Admiralty)", "nmi (Adm)", mul(unit(1, Foot_International), 6080));

/** 
 * @summary 1 NM = 1852 m
 * @description <b>Nautical mile (international)</b> is  <i>length</i> unit, symbol: [NM; nmi]. Definition of 1 nautical mile (international) ≡ 1852 m. .
 * @link http://conversion.org/length/nautical-mile-international/
 */
export const NauticalMileInternational = scale("Nautical mile (international)", "NM", mul(unit(1, metre), 1852));
export const NauticalMileInternational__nmi = scale("Nautical mile (international)", "nmi", mul(unit(1, metre), 1852));

/** 
 * @summary 1 nmi (US pre 1954) = 1853.248 m
 * @description <b>Nautical mile (US pre 1954)</b> is  <i>length</i> unit. Definition of 1 nautical mile (US pre 1954) ≡ 1853.248 m . .
 * @link http://conversion.org/length/nautical-mile-us-pre-1954/
 */
export const NauticalMile_USPre_1954 = scale("Nautical mile (US pre 1954)", "nmi (US pre 1954)", mul(unit(1, metre), 1853.248));

/** 
 * @summary 1 pace = 2.5 ft
 * @description <b>Pace</b> is  <i>length</i> unit. Definition of 1 pace ≡ 2.5 ft. .
 * @link http://conversion.org/length/pace/
 */
export const Pace = scale("Pace", "pace", mul(unit(1, Foot_International), 2.5));

/** 
 * @summary 1 palm = 3 in
 * @description <b>Palm</b> is  <i>length</i> unit. Definition of 1 palm ≡ 3 in. .
 * @link http://conversion.org/length/palm/
 */
export const Palm = scale("Palm", "palm", mul(unit(1, Inch_International), 3));

/** 
 * @summary 1 pc = 3.085677581e16 m
 * @description <b>Parsec</b> is  <i>length</i> unit, symbol: [pc]. Definition of 1 parsec ≡ 3.085677581e16 m. Distance of star with parallax shift of one arc second from a base of one astronomical unit .
 * @link http://conversion.org/length/parsec/
 */
export const Parsec = scale("Parsec", "pc", mul(unit(1, metre), 30856775810000000));

/** 
 * @summary 1 pm (old) = 1e-12 m
 * @description <b>Picometre (old: bicron, stigma)</b> is  <i>length</i> unit, symbol: [pm (old)]. Definition of 1 picometre (old: bicron, stigma) ≡ 1e-12 m. .
 * @link http://conversion.org/length/picometre-old-bicron-stigma/
 */
export const PicometreOldBicronStigma = scale("Picometre (old: bicron, stigma)", "pm (old)", mul(unit(1, metre), 1e-12));

/** 
 * @summary 1 pm = 1e-12 m
 * @description <b>Pikometre</b> is metric <i>length</i> unit, symbol: [pm]. Definition of 1 pikometre  ≡1e-12 m. .
 * @link http://conversion.org/length/pikometre/
 */
export const Pikometre = scale("Pikometre", "pm", mul(unit(1, metre), 1e-12));

/** 
 * @summary 1 pt (US) = 1⁄72.272 in
 * @description <b>Point (American, English)</b> is  <i>length</i> unit, symbol: [pt (US)]. Definition of 1 point (American, English) ≡  1⁄72.272 in . .
 * @link http://conversion.org/length/point-american-english/
 */
export const Point_American_English = scale("Point (American, English)", "pt (US)", mul(unit(1, Inch_International), 0.013836617223821119));

/** 
 * @summary 1 pt (Didot) = 5⁄133 cm
 * @description <b>Point (Didot; European)</b> is  <i>length</i> unit, symbol: [pt (Didot)]. Definition of 1 point (Didot; European) ≡  5⁄133 cm . Defined after 1878 as 5/133 cm ≡ 0.00037593985 m.
 * @link http://conversion.org/length/point-didot-european/
 */
export const Point_Didot_European = scale("Point (Didot; European)", "pt (Didot)", mul(unit(1, Centimetre), 0.03759398496240601));

/** 
 * @summary 1 pt = 1⁄72 in
 * @description <b>Point (PostScript)</b> is  <i>length</i> unit, symbol: [pt]. Definition of 1 point (PostScript) ≡  1⁄72 in . .
 * @link http://conversion.org/length/point-postscript/
 */
export const Point_PostScript = scale("Point (PostScript)", "pt", mul(unit(1, Inch_International), 0.013888888888888888));

/** 
 * @summary 1 pt (TeX) = 1⁄72.27 in
 * @description <b>Point (TeX)</b> is  <i>length</i> unit, symbol: [pt (TeX)]. Definition of 1 point (TeX) ≡  1⁄72.27 in . .
 * @link http://conversion.org/length/point-tex/
 */
export const Point_TeX = scale("Point (TeX)", "pt (TeX)", mul(unit(1, Inch_International), 0.013837000138370002));

/** 
 * @summary 1 shaku (Japan) = 10/33 m
 * @description <b>Shaku (Japan)</b> is  <i>length</i> unit. Definition of 1 shaku (Japan) ≡ 10/33 m . .
 * @link http://conversion.org/length/shaku-japan/
 */
export const Shaku_Japan = scale("Shaku (Japan)", "shaku (Japan)", mul(unit(1, metre), 0.30303030303030304));

/** 
 * @summary 1 spat = 1e12 m
 * @description <b>Spat</b> is  <i>length</i> unit. Definition of 1 spat ≡ 1e12 m. .
 * @link http://conversion.org/length/spat/
 */
export const Spat = scale("Spat", "spat", mul(unit(1, metre), 1000000000000));

/** 
 * @summary 1 twp = 1⁄1440 in
 * @description <b>Twip</b> is  <i>length</i> unit, symbol: [twp]. Definition of 1 twip ≡  1⁄1440 in . .
 * @link http://conversion.org/length/twip/
 */
export const Twip = scale("Twip", "twp", mul(unit(1, Inch_International), 0.0006944444444444445));

/** 
 * @summary 1 xu = 1.0021e-13 m
 * @description <b>X unit; siegbahn</b> is  <i>length</i> unit, symbol: [xu]. Definition of 1 × unit; siegbahn ≡ 1.0021e-13 m. .
 * @link http://conversion.org/length/x-unit-siegbahn/
 */
export const XUnitSiegbahn = scale("X unit; siegbahn", "xu", mul(unit(1, metre), 1.0021e-13));

/** 
 * @summary 1 yd = 0.9144 m = 3 ft = 36 in
 * @description <b>Yard (International)</b> is  <i>length</i> unit, symbol: [yd]. Definition of 1 yard (International) ≡ 0.9144 m ≡ 3 ft ≡ 36 in . .
 * @link http://conversion.org/length/yard-international/
 */
export const Yard_International = scale("Yard (International)", "yd", mul(unit(1, Inch_International), 36));

/** 
 * @summary 1 zoll = 1 inch = 25.4 mm
 * @description <b>Zoll</b> is  <i>length</i> unit, symbol: [ '']. Definition of 1 zoll ≡ 1 inch ≡ 25.4 mm. Zoll is length unit used in German-speaking countries, equivalent to inch ≡ 0.0254 m (since 1956). .
 * @link http://conversion.org/length/zoll/
 */
export const Zoll = scale("Zoll", "zoll", mul(unit(1, Millimetre), 25.4));

/** 
 * @summary 1 cable (imp) = 608 ft
 * @description <b>Cable length (imperial)</b> is  <i>length</i> unit. Definition of 1 cable length (imperial) ≡ 608 ft . .
 * @link http://conversion.org/length/cable-length-imperial/
 */
export const CableLengthImperial = scale("Cable length (imperial)", "cable (imp)", mul(unit(1, Foot_International), 608));

/** 
 * @summary 1 cable = 1⁄10 nmi
 * @description <b>Cable length (International)</b> is  <i>length</i> unit. Definition of 1 cable length (International) ≡  1⁄10 nmi . .
 * @link http://conversion.org/length/cable-length-international/
 */
export const CableLength_International = scale("Cable length (International)", "cable", mul(unit(1, NauticalMileInternational__nmi), 0.1));

/** 
 * @summary 1 cable (US) = 720 ft
 * @description <b>Cable length (US)</b> is  <i>length</i> unit. Definition of 1 cable length (US) ≡ 720 ft . .
 * @link http://conversion.org/length/cable-length-us/
 */
export const CableLength_US = scale("Cable length (US)", "cable (US)", mul(unit(1, Foot_International), 720));

/** 
 * @summary 1 ch = 66 ft (US) = 4 rods
 * @description <b>Chain</b> is  <i>length</i> unit, symbol: [ch]. Definition of 1 chain ≡ 66 ft (US) ≡ 4 rods. (Chain - Gunter's; Surveyor's).
 * @link http://conversion.org/length/chain/
 */
export const Chain = scale("Chain", "ch", mul(unit(1, Foot_US_Survey), 66));

/** 
 * @summary 1 ftm = 6 ft
 * @description <b>Fathom</b> is  <i>length</i> unit, symbol: [ftm]. Definition of 1 fathom ≡ 6 ft. .
 * @link http://conversion.org/length/fathom/
 */
export const Fathom = scale("Fathom", "ftm", mul(unit(1, Foot_International), 6));

/** 
 * @summary 1 finger = 7⁄8 in
 * @description <b>Finger</b> is  <i>length</i> unit. Definition of 1 finger ≡  7⁄8 in . .
 * @link http://conversion.org/length/finger/
 */
export const Finger = scale("Finger", "finger", mul(unit(1, Inch_International), 0.875));

/** 
 * @summary 1 finger (cloth) = 4 1⁄2 in
 * @description <b>Finger (cloth)</b> is  <i>length</i> unit. Definition of 1 finger (cloth) ≡  4 1⁄2 in . .
 * @link http://conversion.org/length/finger-cloth/
 */
export const FingerCloth = scale("Finger (cloth)", "finger (cloth)", mul(unit(1, Inch_International), 4.5));

/** 
 * @summary 1 hand = 4 in
 * @description <b>Hand</b> is  <i>length</i> unit. Definition of 1 hand ≡ 4 in. .
 * @link http://conversion.org/length/hand/
 */
export const Hand = scale("Hand", "hand", mul(unit(1, Inch_International), 4));

/** 
 * @summary 1 light-minute = 60 light-seconds
 * @description <b>Light-minute</b> is  <i>length</i> unit. Definition of 1 light-minute ≡ 60 light-seconds . .
 * @link http://conversion.org/length/light-minute/
 */
export const LightMinute = scale("Light-minute", "light-minute", mul(unit(1, LightSecond), 60));

/** 
 * @summary 1 NL = 3 nmi
 * @description <b>Nautical league</b> is  <i>length</i> unit, symbol: [NL; nl]. Definition of 1 nautical league ≡ 3 nmi. .
 * @link http://conversion.org/length/nautical-league/
 */
export const NauticalLeague = scale("Nautical league", "NL", mul(unit(1, NauticalMileInternational__nmi), 3));
export const NauticalLeague__nl = scale("Nautical league", "nl", mul(unit(1, NauticalMileInternational__nmi), 3));

/** 
 * @summary 1 pica (PostScript) = 12 points
 * @description <b>Pica (PostScript)</b> is  <i>length</i> unit. Definition of 1 pica (PostScript) ≡ 12 points . .
 * @link http://conversion.org/length/pica-postscript/
 */
export const Pica_PostScript = scale("Pica (PostScript)", "pica (PostScript)", mul(unit(1, Point_PostScript), 12));

/** 
 * @summary 1 quarter = 1⁄4 yd
 * @description <b>Quarter</b> is  <i>length</i> unit. Definition of 1 quarter ≡  1⁄4 yd . .
 * @link http://conversion.org/length/quarter/
 */
export const Quarter = scale("Quarter", "quarter", mul(unit(1, Yard_International), 0.25));

/** 
 * @summary 1 light-hour = 60 light-minutes
 * @description <b>Light-hour</b> is  <i>length</i> unit. Definition of 1 light-hour ≡ 60 light-minutes . .
 * @link http://conversion.org/length/light-hour/
 */
export const LightHour = scale("Light-hour", "light-hour", mul(unit(1, LightMinute), 60));

/** 
 * @summary 1 light-day = 24 light-hours
 * @description <b>Light-day</b> is  <i>length</i> unit. Definition of 1 light-day ≡ 24 light-hours . .
 * @link http://conversion.org/length/light-day/
 */
export const LightDay = scale("Light-day", "light-day", mul(unit(1, LightHour), 24));

/** 
 * @summary 1 ly = 365.25 light-days
 * @description <b>Light-year</b> is  <i>length</i> unit, symbol: [ly]. Definition of 1 light-year ≡ 365.25 light-days ≡ Distance light travels in vacuum in 365.25 days. .
 * @link http://conversion.org/length/light-year/
 */
export const LightYear = scale("Light-year", "ly", mul(unit(1, LightDay), 365.25));


export const LENGTH_UNITS: ScaleSystem = {
  angstrom,
  AstronomicalUnit,
  BohrAtomicUnitOfLength,
  Centimetre,
  Decimetre,
  Dekametre,
  Fermi,
  Foot_International,
  FootMetric,
  FootMetricLong,
  FootMetricShort,
  Foot_US_Survey,
  Furlong,
  Hectometre,
  Inch_International,
  Kilometre,
  LeagueLand,
  LightSecond,
  Line,
  Link_GunterS_SurveyorS,
  Link_RamsdenS_EngineerS,
  Mickey,
  Micrometre,
  Micron,
  Mil_SwedenAnd_Norway,
  MilThou,
  MileInternational,
  MileTacticalOrData,
  Mile_US_Survey,
  Millimetre,
  NailCloth,
  Nanometre,
  NauticalMile_Admiralty,
  NauticalMile_Admiralty__nmi_Adm,
  NauticalMileInternational,
  NauticalMileInternational__nmi,
  NauticalMile_USPre_1954,
  Pace,
  Palm,
  Parsec,
  PicometreOldBicronStigma,
  Pikometre,
  Point_American_English,
  Point_Didot_European,
  Point_PostScript,
  Point_TeX,
  Shaku_Japan,
  Spat,
  Twip,
  XUnitSiegbahn,
  Yard_International,
  Zoll,
  CableLengthImperial,
  CableLength_International,
  CableLength_US,
  Chain,
  Fathom,
  Finger,
  FingerCloth,
  Hand,
  LightMinute,
  NauticalLeague,
  NauticalLeague__nl,
  Pica_PostScript,
  Quarter,
  LightHour,
  LightDay,
  LightYear,

  [scaleSystemNameSymbol]: "length units",
}
    
export default LENGTH_UNITS;