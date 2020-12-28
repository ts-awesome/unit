Units of area
===

Are
---

> **Are** is  _area_ unit, symbol: [a]. Definition of 1 are ≡ 100 m². The are area unit is equal to 100 square metres, used for measuring land area. It was defined by older forms of the metric system..

[Source](http://conversion.org/area/are/) 

##### Symbols:
- ```[a]```

##### Definition:
```LaTex
1 a = 100 m²
```

##### Code:
```TypeScript
export const Are = scale("Are", "a", mul(pow(unit(1, metre), 2), 100));
```




Barn
---

> **Barn** is  _area_ unit, symbol: [b]. Definition of 1 barn ≡ 1e-28 m². Originally used in nuclear physics for expressing the cross sectional area of nuclei and nuclear reactions. .

[Source](http://conversion.org/area/barn/) 

##### Symbols:
- ```[b]```

##### Definition:
```LaTex
1 b = 1e-28 m²
```

##### Code:
```TypeScript
export const Barn = scale("Barn", "b", mul(pow(unit(1, metre), 2), 1e-28));
```




Board
---

> **Board** is  _area_ unit, symbol: [bd]. Definition of 1 board ≡ 1 in ×  ft. ≡ 0.3048 × 0.0254 ≡ 7.74192e-3 m².

[Source](http://conversion.org/area/board/) 

##### Symbols:
- ```[bd]```

##### Definition:
```LaTex
1 bd = 1 in ×  ft
```

##### Code:
```TypeScript
export const Board = scale("Board", "bd", mul(unit(1, Inch_International), unit(1, Foot_International), 1));
```




Circular mil; circular thou
---

> **Circular mil; circular thou** is  _area_ unit, symbol: [circ mil]. Definition of 1 circular mil; circular thou ≡  π⁄4 mil². Area of circle with diameter of 1 mil, value exactly π × .6129e-10 ≡ 5.067075e-10 m².

[Source](http://conversion.org/area/circular-mil-circular-thou/) 

##### Symbols:
- ```[circ mil]```

##### Definition:
```LaTex
1 circ mil = π⁄4 mil²
```

##### Code:
```TypeScript
export const CircularMilCircularThou = scale("Circular mil; circular thou", "circ mil", mul(pow(unit(1, MilThou), 2), 0.7853981633974483));
```




Cord
---

> **Cord** is  _area_ unit. Definition of 1 cord ≡ 192 bd. ≡ 1.48644864 m².

[Source](http://conversion.org/area/cord/) 

##### Symbols:
- ```[cord]```

##### Definition:
```LaTex
1 cord = 192 bd
```

##### Code:
```TypeScript
export const Cord = scale("Cord", "cord", mul(unit(1, Board), 192));
```




Dunam
---

> **Dunam** is  _area_ unit. Definition of 1 dunam ≡ 1000 m². The new or metric dunam has been redefined as exactly one decare 1000 m².

[Source](http://conversion.org/area/dunam/) 

##### Symbols:
- ```[dunam]```

##### Definition:
```LaTex
1 dunam = 1000 m²
```

##### Code:
```TypeScript
export const Dunam = scale("Dunam", "dunam", mul(pow(unit(1, metre), 2), 1000));
```




Hectare
---

> **Hectare** is  _area_ unit, symbol: [ha]. Definition of 1 hectare ≡ 10000 m². Hectare is metric unit, primarily used in the measurement of land as a replacement for the imperial acre ≡ 10000 m².

[Source](http://conversion.org/area/hectare/) 

##### Symbols:
- ```[ha]```

##### Definition:
```LaTex
1 ha = 10000 m²
```

##### Code:
```TypeScript
export const Hectare = scale("Hectare", "ha", mul(pow(unit(1, metre), 2), 10000));
```




Section
---

> **Section** is  _area_ unit. Definition of 1 section ≡ 1 mi ×  mi. Area equal with 1 mile by 1 mile square ≡ 1609.344² ≡ 2.589988110336×10<sup>6<sup> m².

[Source](http://conversion.org/area/section/) 

##### Symbols:
- ```[section]```

##### Definition:
```LaTex
1 section = 1 mi ×  mi
```

##### Code:
```TypeScript
export const Section = scale("Section", "section", mul(pow(unit(1, MileInternational), 2), 1));
```




Shed
---

> **Shed** is  _area_ unit. Definition of 1 shed ≡ 1e-52 m². Originally used in nuclear physics ≡ 1e-52 m².

[Source](http://conversion.org/area/shed/) 

##### Symbols:
- ```[shed]```

##### Definition:
```LaTex
1 shed = 1e-52 m²
```

##### Code:
```TypeScript
export const Shed = scale("Shed", "shed", mul(pow(unit(1, metre), 2), 1e-52));
```




Square centimetre
---

> **Square centimetre** is metric _area_ unit, symbol: [cm²]. Definition of 1 square centimetre  ≡ 1 cm ×  cm. Area equal with 1 centimetre by 1 centimetre square..

[Source](http://conversion.org/area/square-centimetre/) 

##### Symbols:
- ```[cm²]```

##### Definition:
```LaTex
1 cm² = 1 cm ×  cm
```

##### Code:
```TypeScript
export const SquareCentimetre = scale("Square centimetre", "cm²", mul(pow(unit(1, Centimetre), 2), 1));
```




Square decimetre
---

> **Square decimetre** is metric _area_ unit, symbol: [dm²]. Definition of 1 square decimetre  ≡ 1 dm ×  dm. Area equal with 1 decimetre by 1 decimetre square..

[Source](http://conversion.org/area/square-decimetre/) 

##### Symbols:
- ```[dm²]```

##### Definition:
```LaTex
1 dm² = 1 dm ×  dm
```

##### Code:
```TypeScript
export const SquareDecimetre = scale("Square decimetre", "dm²", mul(pow(unit(1, Decimetre), 2), 1));
```




Square foot
---

> **Square foot** is  _area_ unit, symbol: [sq ft]. Definition of 1 square foot ≡ 1 ft ×  ft. ≡ 0.3048 × 0.3048 ≡ 9.290304e-2 m².

[Source](http://conversion.org/area/square-foot/) 

##### Symbols:
- ```[sq ft]```

##### Definition:
```LaTex
1 sq ft = 1 ft ×  ft
```

##### Code:
```TypeScript
export const SquareFoot = scale("Square foot", "sq ft", mul(pow(unit(1, Foot_International), 2), 1));
```




Square inch
---

> **Square inch** is  _area_ unit, symbol: [sq in]. Definition of 1 square inch ≡ 1 in ×  in. Area equal with 1 inch by 1 inch square ≡ 0.0254 × 0.0254 ≡ 6.4516e-4 m².

[Source](http://conversion.org/area/square-inch/) 

##### Symbols:
- ```[sq in]```

##### Definition:
```LaTex
1 sq in = 1 in ×  in
```

##### Code:
```TypeScript
export const SquareInch = scale("Square inch", "sq in", mul(pow(unit(1, Inch_International), 2), 1));
```




Square kilometre
---

> **Square kilometre** is metric _area_ unit, symbol: [km²]. Definition of 1 square kilometre  ≡ 1km × km. .

[Source](http://conversion.org/area/square-kilometre/) 

##### Symbols:
- ```[km²]```

##### Definition:
```LaTex
1 km² = 1km × km
```

##### Code:
```TypeScript
export const SquareKilometre = scale("Square kilometre", "km²", mul(pow(unit(1, Kilometre), 2), 1));
```




Square link (Gunters)(International)
---

> **Square link (Gunter's)(International)** is  _area_ unit, symbol: [sq lnk]. Definition of 1 square link (Gunter's)(International) ≡ 1 lnk ×  lnk ≡ 0.66 ft × 0.66 ft. ≡ (0.66 × 0.3048 m)² ≡ 4.0468564224e-2 m².

[Source](http://conversion.org/area/square-link-gunters-international/) 

##### Symbols:
- ```[sq lnk]```

##### Definition:
```LaTex
1 sq lnk = 1 lnk ×  lnk
```

##### Code:
```TypeScript
export const SquareLink_GunterS_International = scale("Square link (Gunter's)(International)", "sq lnk", mul(pow(unit(1, Link_GunterS_SurveyorS), 2), 1));
```




Square link (Ramsdens)
---

> **Square link (Ramsden's)** is  _area_ unit, symbol: [sq lnk (Ramsden)]. Definition of 1 square link (Ramsden's) ≡ 1 lnk ×  lnk ≡ 1 ft ×  ft. ≡ 0.3048*0.3048 ≡ 0.09290304 m².

[Source](http://conversion.org/area/square-link-ramsdens/) 

##### Symbols:
- ```[sq lnk (Ramsden)]```

##### Definition:
```LaTex
1 sq lnk (Ramsden) = 1 lnk ×  lnk = 1 ft ×  ft
```

##### Code:
```TypeScript
export const SquareLink_RamsdenS = scale("Square link (Ramsden's)", "sq lnk (Ramsden)", mul(pow(unit(1, Foot_International), 2), 1));
```




Square metre
---

> **Square metre** is metric _area_ unit, symbol: [m²]. Definition of 1 square metre  ≡ 1m × m. .

[Source](http://conversion.org/area/square-metre/) 

##### Symbols:
- ```[m²]```

##### Definition:
```LaTex
1 m² = 1m × m
```

##### Code:
```TypeScript
export const SquareMetre = scale("Square metre", "m²", mul(pow(unit(1, metre), 2), 1));
```




Square micrometre
---

> **Square micrometre** is metric _area_ unit, symbol: [µm²]. Definition of 1 square micrometre  ≡ 1 µm ×  µm. .

[Source](http://conversion.org/area/square-micrometre/) 

##### Symbols:
- ```[µm²]```

##### Definition:
```LaTex
1 µm² = 1 µm ×  µm
```

##### Code:
```TypeScript
export const SquareMicrometre = scale("Square micrometre", "µm²", mul(pow(unit(1, Micrometre), 2), 1));
```




Square mil; square thou
---

> **Square mil; square thou** is  _area_ unit, symbol: [sq mil]. Definition of 1 square mil; square thou ≡ 1 mil ×  mil. ≡ 0.0000254 × 0.0000254 ≡ 6.4516e-10 m².

[Source](http://conversion.org/area/square-mil-square-thou/) 

##### Symbols:
- ```[sq mil]```

##### Definition:
```LaTex
1 sq mil = 1 mil ×  mil
```

##### Code:
```TypeScript
export const SquareMilSquareThou = scale("Square mil; square thou", "sq mil", mul(pow(unit(1, MilThou), 2), 1));
```




Square mile
---

> **Square mile** is  _area_ unit, symbol: [sq mi]. Definition of 1 square mile ≡ 1 mi ×  mi. Area equal with 1 mile by 1 mile square ≡1609.344 × 609.344 ≡ 2.589988110336e6 m².

[Source](http://conversion.org/area/square-mile/) 

##### Symbols:
- ```[sq mi]```

##### Definition:
```LaTex
1 sq mi = 1 mi ×  mi
```

##### Code:
```TypeScript
export const SquareMile = scale("Square mile", "sq mi", mul(pow(unit(1, MileInternational), 2), 1));
```




Square millimetre
---

> **Square millimetre** is metric _area_ unit, symbol: [mm²]. Definition of 1 square millimetre  ≡ 1 mm ×  mm. .

[Source](http://conversion.org/area/square-millimetre/) 

##### Symbols:
- ```[mm²]```

##### Definition:
```LaTex
1 mm² = 1 mm ×  mm
```

##### Code:
```TypeScript
export const SquareMillimetre = scale("Square millimetre", "mm²", mul(pow(unit(1, Millimetre), 2), 1));
```




Square nanometre
---

> **Square nanometre** is metric _area_ unit, symbol: [nm²]. Definition of 1 square nanometre  ≡ 1nm × nm. .

[Source](http://conversion.org/area/square-nanometre/) 

##### Symbols:
- ```[nm²]```

##### Definition:
```LaTex
1 nm² = 1nm × nm
```

##### Code:
```TypeScript
export const SquareNanometre = scale("Square nanometre", "nm²", mul(pow(unit(1, Nanometre), 2), 1));
```




Square (roofing)
---

> **Square (roofing)** is  _area_ unit. Definition of 1 square (roofing) ≡ 10 ft × 0 ft ≡ 100 sq ft. Area equal to 10 feet by 10 feet square ≡ (3.048 m)² ≡ 9.290304 m².

[Source](http://conversion.org/area/square-roofing/) 

##### Symbols:
- ```[square (roofing)]```

##### Definition:
```LaTex
1 square (roofing) = 100 sq ft
```

##### Code:
```TypeScript
export const SquareRoofing = scale("Square (roofing)", "square (roofing)", mul(unit(1, SquareFoot), 100));
```




Square yard
---

> **Square yard** is  _area_ unit, symbol: [sq yd]. Definition of 1 square yard ≡ 1 yd ×  yd. Square yard (International) area is equal with 1 yard by 1 yard square ≡ 0.9144 × 0.9144 ≡ 0.83612736 m².

[Source](http://conversion.org/area/square-yard/) 

##### Symbols:
- ```[sq yd]```

##### Definition:
```LaTex
1 sq yd = 1 yd ×  yd
```

##### Code:
```TypeScript
export const SquareYard = scale("Square yard", "sq yd", mul(pow(unit(1, Yard_International), 2), 1));
```




Stremma
---

> **Stremma** is  _area_ unit. Definition of 1 stremma ≡ 1000 m². The stremma is a Greek unit of land area, exactly ≡ 1000 m².

[Source](http://conversion.org/area/stremma/) 

##### Symbols:
- ```[stremma]```

##### Definition:
```LaTex
1 stremma = 1000 m²
```

##### Code:
```TypeScript
export const Stremma = scale("Stremma", "stremma", mul(pow(unit(1, metre), 2), 1000));
```




Township
---

> **Township** is  _area_ unit. Definition of 1 township ≡ 36 sq mi (US) ≡ 36 mi (US)². Township area unit was used by the United States Public Land Survey System, refers to a square unit of land, that is nominally six (U.S. Survey) miles ≡36 × (6336000 / 3937)² ≡ 9.323994e7 m².

[Source](http://conversion.org/area/township/) 

##### Symbols:
- ```[township]```

##### Definition:
```LaTex
1 township = 36 sq mi (US) = 36 mi (US)²
```

##### Code:
```TypeScript
export const Township = scale("Township", "township", mul(pow(unit(1, Mile_US_Survey), 2), 36));
```




Acre
---

> **Acre** is  _area_ unit, symbol: [ac]. Definition of 1 acre ≡ 1 ch × 0 ch ≡ 4840 sq yd ≡ 1⁄640 sq mi. International and US survey acre ≡ 4840 × 0.9144 × 0.9144 ≡ 4046.8564224 m².

[Source](http://conversion.org/area/acre/) 

##### Symbols:
- ```[ac]```

##### Definition:
```LaTex
1 ac = 4840 sq yd = 1⁄640 sq mi
```

##### Code:
```TypeScript
export const Acre = scale("Acre", "ac", mul(unit(1, SquareMile), 0.0015625));
```




Barony
---

> **Barony** is  _area_ unit. Definition of 1 barony ≡ 4000 ac. ≡ 4000×4840×0.9144×0.9144 m².

[Source](http://conversion.org/area/barony/) 

##### Symbols:
- ```[barony]```

##### Definition:
```LaTex
1 barony = 4000 ac
```

##### Code:
```TypeScript
export const Barony = scale("Barony", "barony", mul(unit(1, Acre), 4000));
```




Circular inch
---

> **Circular inch** is  _area_ unit, symbol: [circ in]. Definition of 1 circular inch ≡  π⁄4 sq in. Area of circle with diameter of 1 inch, value exactly π × 0.00016129 ≡ 5.067075e-4 m².

[Source](http://conversion.org/area/circular-inch/) 

##### Symbols:
- ```[circ in]```

##### Definition:
```LaTex
1 circ in = π⁄4 sq in
```

##### Code:
```TypeScript
export const CircularInch = scale("Circular inch", "circ in", mul(unit(1, SquareInch), 0.7853981633974483));
```




Cuerda (PR Survey)
---

> **Cuerda (PR Survey)** is  _area_ unit, symbol: [cda]. Definition of 1 cuerda (PR Survey) ≡ 1 cda ×  cda ≡ 0.971 acre. Area unit used in some Spanish-speaking regions, also called Spanish acre ≡ 3930.395625 m².

[Source](http://conversion.org/area/cuerda-pr-survey/) 

##### Symbols:
- ```[cda]```

##### Definition:
```LaTex
1 cda = 1 cda ×  cda = 0.971 acre
```

##### Code:
```TypeScript
export const Cuerda_PR_Survey = scale("Cuerda (PR Survey)", "cda", mul(unit(1, Acre), 0.971));
```




Guntha (India)
---

> **Guntha (India)** is  _area_ unit. Definition of 1 guntha (India) ≡ 121 sq yd. Most common used to measure the size of a piece of land ≡ 121 × 0.9144 × 0.9144 m².

[Source](http://conversion.org/area/guntha-india/) 

##### Symbols:
- ```[guntha (India)]```

##### Definition:
```LaTex
1 guntha (India) = 121 sq yd
```

##### Code:
```TypeScript
export const Guntha_India = scale("Guntha (India)", "guntha (India)", mul(unit(1, SquareYard), 121));
```




Hide
---

> **Hide** is  _area_ unit. Definition of 1 hide ≡ 120 ac (variable). The hide was an English unit of land measurement. Definition variable, ≡ 12 × ac ≡ 120 × 4046.8564224 m².

[Source](http://conversion.org/area/hide/) 

##### Symbols:
- ```[hide]```

##### Definition:
```LaTex
1 hide = 120 ac (variable)
```

##### Code:
```TypeScript
export const Hide = scale("Hide", "hide", mul(unit(1, Acre), 120));
```




Rood
---

> **Rood** is  _area_ unit, symbol: [ro]. Definition of 1 rood ≡  1⁄4 ac. ≡ ac / 4 ≡ 4046.8564224 / 4 ≡ 1011.7141056 m².

[Source](http://conversion.org/area/rood/) 

##### Symbols:
- ```[ro]```

##### Definition:
```LaTex
1 ro = 1⁄4 ac
```

##### Code:
```TypeScript
export const Rood = scale("Rood", "ro", mul(unit(1, Acre), 0.25));
```




Square chain
---

> **Square chain** is  _area_ unit, symbol: [sq ch]. Definition of 1 square chain ≡ 66 ft × 66 ft ≡  1⁄10 ac. ≡ (66 × 0.3048)² ≡ 404.68564224 m².

[Source](http://conversion.org/area/square-chain/) 

##### Symbols:
- ```[sq ch]```

##### Definition:
```LaTex
1 sq ch = 1⁄10 ac
```

##### Code:
```TypeScript
export const SquareChain = scale("Square chain", "sq ch", mul(unit(1, Acre), 0.1));
```




Yardland
---

> **Yardland** is  _area_ unit. Definition of 1 yardland ≡ 30 ac. yardland, yard of land or  virgate was an English unit of land (primarily a measure of tax assessment) ≡ 1.2e5 m².

[Source](http://conversion.org/area/yardland/) 

##### Symbols:
- ```[yardland]```

##### Definition:
```LaTex
1 yardland = 30 ac
```

##### Code:
```TypeScript
export const Yardland = scale("Yardland", "yardland", mul(unit(1, Acre), 30));
```

