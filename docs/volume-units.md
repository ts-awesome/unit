Units of volume
===

Acre-foot
---

> **Acre-foot** is  _volume_ unit, symbol: [ac ft]. Definition of 1 acre-foot ≡ 1 ac ×  ft ≡ 43560 cu ft. The acre-foot is a unit of volume commonly used in US in reference to large-scale water resources ≡ 1 acre (international) ×  ft cuboid ≡ 1233.48183754752 m³.

[Source](http://conversion.org/volume/acre-foot/)

##### Units:

- ```[ac ft]```

##### Summary:

```LaTeX
1 ac ft = 1 ac ×  ft = 43560 cu ft
```

##### Code:

```ts
const AcreFoot = scale("Acre-foot", "ac ft", mul(unit(1, Acre), unit(1, Foot_International), 1));
```


Acre-inch
---

> **Acre-inch** is  _volume_ unit, symbol: [ac in]. Definition of 1 acre-inch ≡ 1 ac ×  in. Acre-inch is unit of volume commonly used as smaller unit of acre-foot, reference to large-scale water resources ≡ 102.79015312896 m³.

[Source](http://conversion.org/volume/acre-inch/)

##### Units:

- ```[ac in]```

##### Summary:

```LaTeX
1 ac in = 1 ac ×  in
```

##### Code:

```ts
const AcreInch = scale("Acre-inch", "ac in", mul(unit(1, Acre), unit(1, Inch_International), 1));
```


Barrel (imperial)
---

> **Barrel (imperial)** is  _volume_ unit, symbol: [bl (imp)]. Definition of 1 barrel (imperial) ≡ 36 gal (imp).  ≡ 36×0.00454609 m³ ≡ 0.16365924 m³.

[Source](http://conversion.org/volume/barrel-imperial/)

##### Units:

- ```[bl (imp)]```

##### Summary:

```LaTeX
1 bl (imp) = 36 gal (imp)
```

##### Code:

```ts
const BarrelImperial = scale("Barrel (imperial)", "bl (imp)", mul(unit(1, GallonImperial), 36));
```


Barrel (petroleum); archaic blue-barrel
---

> **Barrel (petroleum); archaic blue-barrel** is  _volume_ unit, symbol: [bl; bbl]. Definition of 1 barrel (petroleum); archaic blue-barrel ≡ 42 gal (US).  ≡ 42×0.003785411784 ≡ 0.158987294928 m³.

[Source](http://conversion.org/volume/barrel-petroleum-archaic-blue-barrel/)

##### Units:

- ```bl```
- ```bbl```

##### Summary:

```LaTeX
1 bl = 42 gal (US)
```

##### Code:

```ts
const BarrelPetroleumArchaicBlueBarrel = scale("Barrel (petroleum); archaic blue-barrel", "bl", mul(unit(1, Gallon_USFluid_Wine), 42));
```


Barrel (US dry)
---

> **Barrel (US dry)** is  _volume_ unit, symbol: [bl (US)]. Definition of 1 barrel (US dry) ≡ 105 qt (US) ≡ 105/32 bu (US lvl).  ≡ 105 / 32 × (2150.42 × 0.0254 × 0.0254 × 0.0254) ≡ 0.115628198985075 m³.

[Source](http://conversion.org/volume/barrel-us-dry/)

##### Units:

- ```[bl (US)]```

##### Summary:

```LaTeX
1 bl (US) = 105 qt (US) = 105/32 bu (US lvl)
```

##### Code:

```ts
const Barrel_USDry = scale("Barrel (US dry)", "bl (US)", mul(unit(1, Quart_USFluid), 105));
```


Barrel (US fluid)
---

> **Barrel (US fluid)** is  _volume_ unit, symbol: [fl bl (US)]. Definition of 1 barrel (US fluid) ≡  31 1⁄2 gal (US).  ≡ 31.5×0.003785411784 ≡ 0.119240471196 m³.

[Source](http://conversion.org/volume/barrel-us-fluid/)

##### Units:

- ```[fl bl (US)]```

##### Summary:

```LaTeX
1 fl bl (US) = 31 1⁄2 gal (US)
```

##### Code:

```ts
const Barrel_USFluid = scale("Barrel (US fluid)", "fl bl (US)", mul(unit(1, Gallon_USFluid_Wine), 31.5));
```


Board-foot
---

> **Board-foot** is  _volume_ unit, symbol: [fbm]. Definition of 1 board-foot ≡ 144 cu in. The board-foot is volume unit of lumber in the United States and Canada..

[Source](http://conversion.org/volume/board-foot/)

##### Units:

- ```fbm```

##### Summary:

```LaTeX
1 fbm = 144 cu in
```

##### Code:

```ts
const BoardFoot = scale("Board-foot", "fbm", mul(unit(1, CubicInch), 144));
```


Bucket (imperial)
---

> **Bucket (imperial)** is  _volume_ unit, symbol: [bkt]. Definition of 1 bucket (imperial) ≡ 4 gal (imp).  ≡ 4×0.00454609 ≡ 0.01818436 m³.

[Source](http://conversion.org/volume/bucket-imperial/)

##### Units:

- ```bkt```

##### Summary:

```LaTeX
1 bkt = 4 gal (imp)
```

##### Code:

```ts
const BucketImperial = scale("Bucket (imperial)", "bkt", mul(unit(1, GallonImperial), 4));
```


Bushel (imperial)
---

> **Bushel (imperial)** is  _volume_ unit, symbol: [bu (imp)]. Definition of 1 bushel (imperial) ≡ 8 gal (imp). An imperial bushel was unit of weight or mass based upon an earlier measure of dry capacity. ≡ 0.03636872 m³.

[Source](http://conversion.org/volume/bushel-imperial/)

##### Units:

- ```[bu (imp)]```

##### Summary:

```LaTeX
1 bu (imp) = 8 gal (imp)
```

##### Code:

```ts
const BushelImperial = scale("Bushel (imperial)", "bu (imp)", mul(unit(1, GallonImperial), 8));
```


Bushel (US dry heaped)
---

> **Bushel (US dry heaped)** is  _volume_ unit, symbol: [bu (US)]. Definition of 1 bushel (US dry heaped) ≡  1 1⁄4 bu (US lvl). ≡ 1.25 × (2150.42×0.0254³) ≡ 0.0440488377086 m³.

[Source](http://conversion.org/volume/bushel-us-dry-heaped/)

##### Units:

- ```[bu (US)]```

##### Summary:

```LaTeX
1 bu (US) = 1 1⁄4 bu (US lvl)
```

##### Code:

```ts
const Bushel_USDryHeaped = scale("Bushel (US dry heaped)", "bu (US)", mul(unit(1, Bushel_USDryLevel), 1.25));
```


Bushel (US dry level)
---

> **Bushel (US dry level)** is  _volume_ unit, symbol: [bu (US lvl)]. Definition of 1 bushel (US dry level) ≡ 2150.42 cu in. ≡ 2150.42 × 0.0254³ ≡ 0.03523907016688 m³.

[Source](http://conversion.org/volume/bushel-us-dry-level/)

##### Units:

- ```[bu (US lvl)]```

##### Summary:

```LaTeX
1 bu (US lvl) = 2150.42 cu in
```

##### Code:

```ts
const Bushel_USDryLevel = scale("Bushel (US dry level)", "bu (US lvl)", mul(unit(1, CubicInch), 2150.42));
```


Butt, pipe
---

> **Butt, pipe** is  _volume_ unit. Definition of 1 butt, pipe ≡ 126 gal (wine). The US butt (or pipe) was a measure of liquid volume equalling two hogsheads or 126 US gallons ≡ 0.476961884784 m³.

[Source](http://conversion.org/volume/butt-pipe/)

##### Units:

- ```[butt, pipe]```

##### Summary:

```LaTeX
1 butt, pipe = 126 gal (wine)
```

##### Code:

```ts
const ButtPipe = scale("Butt, pipe", "butt, pipe", mul(unit(1, Gallon_USFluid_Wine), 126));
```


Centilitre
---

> **Centilitre** is metric _volume_ unit, symbol: [cL, cl]. Definition of 1 centilitre  ≡ 0.01 L. One centilitre is volume equivalent to hundreds of Litre (L/100).

[Source](http://conversion.org/volume/centilitre/)

##### Units:

- ```[cL, cl]```

##### Summary:

```LaTeX
1 cL, cl = 0.01 L
```

##### Code:

```ts
const Centilitre = scale("Centilitre", "cL, cl", mul(unit(1, Litre), 0.01));
```


Coomb
---

> **Coomb** is  _volume_ unit. Definition of 1 coomb ≡ 4 bu (imp). A coomb is a measure of volume. In 13th century it was defined as 4 imperial bushels ≡ 0.14547488 m³.

[Source](http://conversion.org/volume/coomb/)

##### Units:

- ```coomb```

##### Summary:

```LaTeX
1 coomb = 4 bu (imp)
```

##### Code:

```ts
const Coomb = scale("Coomb", "coomb", mul(unit(1, BushelImperial), 4));
```


Cord (firewood)
---

> **Cord (firewood)** is  _volume_ unit. Definition of 1 cord (firewood) ≡ 8 ft × 4 ft × 4 ft ≡ 96 cu ft ≡ 8 × 4 × 4 × 0.3048³ ≡ 3.624556363776 m³.

[Source](http://conversion.org/volume/cord-firewood/)

##### Units:

- ```[cord (firewood)]```

##### Summary:

```LaTeX
1 cord (firewood) = 96 cu ft = 3.624556363776 m³
```

##### Code:

```ts
const CordFirewood = scale("Cord (firewood)", "cord (firewood)", mul(pow(unit(1, metre), 3), 3.624556363776));
```


Cord-foot
---

> **Cord-foot** is  _volume_ unit. Definition of 1 cord-foot ≡ 16 cu ft.  ≡ 16 × 0.3048³≡ 0.453069545472 m³.

[Source](http://conversion.org/volume/cord-foot/)

##### Units:

- ```cord-foot```

##### Summary:

```LaTeX
1 cord-foot = 16 cu ft
```

##### Code:

```ts
const CordFoot = scale("Cord-foot", "cord-foot", mul(unit(1, CubicFoot), 16));
```


Cubic centimetre
---

> **Cubic centimetre** is metric _volume_ unit, symbol: [cm³]. Definition of 1 cubic centimetre  ≡ 1 cm ×  cm ×  cm. One cubic centimetre is volume equivalent to cube with base of 1 cm. In 1 litre there are 1000 cubic centimetres..

[Source](http://conversion.org/volume/cubic-centimetre/)

##### Units:

- ```[cm³]```

##### Summary:

```LaTeX
1 cm³ = 1 cm ×  cm ×  cm
```

##### Code:

```ts
const CubicCentimetre = scale("Cubic centimetre", "cm³", mul(pow(unit(1, Centimetre), 3), 1));
```


Cubic decimetre
---

> **Cubic decimetre** is metric _volume_ unit, symbol: [dm³]. Definition of 1 cubic decimetre  ≡ 1 dm ×  dm ×  dm. One cubic decimetre is volume equivalent to one litre. .

[Source](http://conversion.org/volume/cubic-decimetre/)

##### Units:

- ```[dm³]```

##### Summary:

```LaTeX
1 dm³ = 1 dm ×  dm ×  dm
```

##### Code:

```ts
const CubicDecimetre = scale("Cubic decimetre", "dm³", mul(pow(unit(1, Decimetre), 3), 1));
```


Cubic dekametre
---

> **Cubic dekametre** is metric _volume_ unit, symbol: [dam³]. Definition of 1 cubic dekametre  ≡ 1 dam ×  dam ×  dam. Equivalent to volume of 10 m × 0 m × 0 m cube ≡ thousands of cubic metre..

[Source](http://conversion.org/volume/cubic-dekametre/)

##### Units:

- ```[dam³]```

##### Summary:

```LaTeX
1 dam³ = 1 dam ×  dam ×  dam
```

##### Code:

```ts
const CubicDekametre = scale("Cubic dekametre", "dam³", mul(pow(unit(1, Dekametre), 3), 1));
```


Cubic fathom
---

> **Cubic fathom** is  _volume_ unit, symbol: [cu fm]. Definition of 1 cubic fathom ≡ 1 fm ×  fm ×  fm. ≡ 1.8288³ ≡ 6.116438863872 m³.

[Source](http://conversion.org/volume/cubic-fathom/)

##### Units:

- ```[cu fm]```

##### Summary:

```LaTeX
1 cu fm = 1 fm ×  fm ×  fm
```

##### Code:

```ts
const CubicFathom = scale("Cubic fathom", "cu fm", mul(pow(unit(1, Fermi), 3), 1));
```


Cubic foot
---

> **Cubic foot** is  _volume_ unit, symbol: [cu ft]. Definition of 1 cubic foot ≡ 1 ft ×  ft ×  ft. ≡ 0.3048³ ≡ 0.028316846592 m³.

[Source](http://conversion.org/volume/cubic-foot/)

##### Units:

- ```[cu ft]```

##### Summary:

```LaTeX
1 cu ft = 1 ft ×  ft ×  ft
```

##### Code:

```ts
const CubicFoot = scale("Cubic foot", "cu ft", mul(pow(unit(1, Foot_International), 3), 1));
```


Cubic hectometre
---

> **Cubic hectometre** is metric _volume_ unit, symbol: [hm³]. Definition of 1 cubic hectometre  ≡ 1 hm ×  hm ×  hm. One million of cubic metres. For example lake Balaton (in Hungary) has volume of 1900 hm³.

[Source](http://conversion.org/volume/cubic-hectometre/)

##### Units:

- ```[hm³]```

##### Summary:

```LaTeX
1 hm³ = 1 hm ×  hm ×  hm
```

##### Code:

```ts
const CubicHectometre = scale("Cubic hectometre", "hm³", mul(pow(unit(1, Hectometre), 3), 1));
```


Cubic inch
---

> **Cubic inch** is  _volume_ unit, symbol: [cu in]. Definition of 1 cubic inch ≡ 1 in ×  in ×  in. ≡ 0.0254³ ≡ 16.387064e-6 m³.

[Source](http://conversion.org/volume/cubic-inch/)

##### Units:

- ```[cu in]```

##### Summary:

```LaTeX
1 cu in = 1 in ×  in ×  in
```

##### Code:

```ts
const CubicInch = scale("Cubic inch", "cu in", mul(pow(unit(1, Inch_International), 3), 1));
```


Cubic kilometre
---

> **Cubic kilometre** is metric _volume_ unit, symbol: [km³]. Definition of 1 cubic kilometre  ≡ 1 km ×  km ×  km. One cubic kilometre is very large volume. For example Caspian Sea has water volume of 78,200 km³.

[Source](http://conversion.org/volume/cubic-kilometre/)

##### Units:

- ```[km³]```

##### Summary:

```LaTeX
1 km³ = 1 km ×  km ×  km
```

##### Code:

```ts
const CubicKilometre = scale("Cubic kilometre", "km³", mul(pow(unit(1, Kilometre), 3), 1));
```


Cubic metre
---

> **Cubic metre** is  _volume_ unit, symbol: [m³]. Definition of 1 cubic metre ≡ 1 m ×  m ×  m. ≡ SI unit for volume is 1 m³ ≡ 1m × m ×1m size cube..

[Source](http://conversion.org/volume/cubic-metre/)

##### Units:

- ```[m³]```

##### Summary:

```LaTeX
1 m³ = 1 m ×  m ×  m
```

##### Code:

```ts
const CubicMetre = scale("Cubic metre", "m³", mul(pow(unit(1, metre), 3), 1));
```


Cubic micrometre
---

> **Cubic micrometre** is metric _volume_ unit, symbol: [µm³]. Definition of 1 cubic micrometre  ≡ 1 µm ×  µm ×  µm. It is a very small volume unit. One millionth of microlitre..

[Source](http://conversion.org/volume/cubic-micrometre/)

##### Units:

- ```[µm³]```

##### Summary:

```LaTeX
1 µm³ = 1 µm ×  µm ×  µm
```

##### Code:

```ts
const CubicMicrometre = scale("Cubic micrometre", "µm³", mul(pow(unit(1, Micrometre), 3), 1));
```


Cubic mile
---

> **Cubic mile** is  _volume_ unit, symbol: [cu mi]. Definition of 1 cubic mile ≡ 1 mi ×  mi ×  mi. ≡ 1609.344³ ≡ 4168181825.440579584 m³.

[Source](http://conversion.org/volume/cubic-mile/)

##### Units:

- ```[cu mi]```

##### Summary:

```LaTeX
1 cu mi = 1 mi ×  mi ×  mi
```

##### Code:

```ts
const CubicMile = scale("Cubic mile", "cu mi", mul(pow(unit(1, MileInternational), 3), 1));
```


Cubic millimetre
---

> **Cubic millimetre** is metric _volume_ unit, symbol: [mm³]. Definition of 1 cubic millimetre  ≡ 1 mm ×  mm ×  mm. Cube with size 1 mm ×  mm ×  mm has volume of 1 mm³.

[Source](http://conversion.org/volume/cubic-millimetre/)

##### Units:

- ```[mm³]```

##### Summary:

```LaTeX
1 mm³ = 1 mm ×  mm ×  mm
```

##### Code:

```ts
const CubicMillimetre = scale("Cubic millimetre", "mm³", mul(pow(unit(1, Millimetre), 3), 1));
```


Cubic nanometre
---

> **Cubic nanometre** is metric _volume_ unit, symbol: [nm³]. Definition of 1 cubic nanometre  ≡ 1 nm ×  nm ×  nm. Very small volume equivalent to one nanometre-based cubic volume..

[Source](http://conversion.org/volume/cubic-nanometre/)

##### Units:

- ```[nm³]```

##### Summary:

```LaTeX
1 nm³ = 1 nm ×  nm ×  nm
```

##### Code:

```ts
const CubicNanometre = scale("Cubic nanometre", "nm³", mul(pow(unit(1, Nanometre), 3), 1));
```


Cubic yard
---

> **Cubic yard** is  _volume_ unit, symbol: [cu yd]. Definition of 1 cubic yard ≡ 27 cu ft. ≡ 0.9144³ ≡ 0.764554857984 m³ (1 yard ≡ 0.9144 m).

[Source](http://conversion.org/volume/cubic-yard/)

##### Units:

- ```[cu yd]```

##### Summary:

```LaTeX
1 cu yd = 27 cu ft
```

##### Code:

```ts
const CubicYard = scale("Cubic yard", "cu yd", mul(unit(1, CubicFoot), 27));
```


Cup (breakfast)
---

> **Cup (breakfast)** is  _volume_ unit. Definition of 1 cup (breakfast) ≡ 10 fl oz (imp). A unit of liquid volume, used in food recipes in Britain ≡ 284.130625e-6 m³.

[Source](http://conversion.org/volume/cup-breakfast/)

##### Units:

- ```[cup (breakfast)]```

##### Summary:

```LaTeX
1 cup (breakfast) = 10 fl oz (imp)
```

##### Code:

```ts
const CupBreakfast = scale("Cup (breakfast)", "cup (breakfast)", mul(unit(1, OunceFluidImperial), 10));
```


Cup (Canadian)
---

> **Cup (Canadian)** is  _volume_ unit, symbol: [c (CA)]. Definition of 1 cup (Canadian) ≡ 8 fl oz (imp). ≡ 8 × 0.0000284130625 ≡ 227.3045e-6 m³.

[Source](http://conversion.org/volume/cup-canadian/)

##### Units:

- ```[c (CA)]```

##### Summary:

```LaTeX
1 c (CA) = 8 fl oz (imp)
```

##### Code:

```ts
const Cup_Canadian = scale("Cup (Canadian)", "c (CA)", mul(unit(1, OunceFluidImperial), 8));
```


Cup (metric)
---

> **Cup (metric)** is  _volume_ unit, symbol: [c]. Definition of 1 cup (metric) ≡ 250.0e-6 m³. Metric cup ≡ 250 mL ≡ 250.0e-6 m³.

[Source](http://conversion.org/volume/cup-metric/)

##### Units:

- ```c```

##### Summary:

```LaTeX
1 c = 250.0e-6 m³
```

##### Code:

```ts
const CupMetric = scale("Cup (metric)", "c", mul(pow(unit(1, metre), 3), 0.00025));
```


Cup (US customary)
---

> **Cup (US customary)** is  _volume_ unit, symbol: [c (US)]. Definition of 1 cup (US customary) ≡ 8 US fl oz ≡  1⁄16 gal (US). United States customary cup is defined as half a U.S. pint or 1/16 of US gallon ≡ 236.5882365e-6 m³.

[Source](http://conversion.org/volume/cup-us-customary/)

##### Units:

- ```[c (US)]```

##### Summary:

```LaTeX
1 c (US) = 8 US fl oz = 1⁄16 gal (US)
```

##### Code:

```ts
const Cup_USCustomary = scale("Cup (US customary)", "c (US)", mul(unit(1, Gallon_USFluid_Wine), 0.0625));
```


Cup (US food nutrition labeling)
---

> **Cup (US food nutrition labeling)** is  _volume_ unit, symbol: [c (US food)]. Definition of 1 cup (US food nutrition labeling) ≡ 240 mL. The cup currently used in the United States for nutrition labelling is defined in United States law as 240 ml ≡ 2.4e-4 m³.

[Source](http://conversion.org/volume/cup-us-food-nutrition-labeling/)

##### Units:

- ```[c (US food)]```

##### Summary:

```LaTeX
1 c (US food) = 240 mL
```

##### Code:

```ts
const Cup_USFoodNutritionLabeling = scale("Cup (US food nutrition labeling)", "c (US food)", mul(unit(1, Millilitre), 240));
```


Dash (imperial)
---

> **Dash (imperial)** is  _volume_ unit. Definition of 1 dash (imperial) ≡  1⁄384 gi (imp) ≡  1⁄2 pinch (imp).  ≡ 5 × 0.0000284130625 / 384 ≡ 369.96175130208(3)e-9 m³.

[Source](http://conversion.org/volume/dash-imperial/)

##### Units:

- ```[dash (imp)]```

##### Summary:

```LaTeX
1 dash (imp) = 1⁄384 gi (imp) = 1⁄2 pinch (imp)
```

##### Code:

```ts
const DashImperial = scale("Dash (imperial)", "dash (imp)", mul(unit(1, GillImperial_Noggin), 0.0026041666666666665));
```


Dash (US)
---

> **Dash (US)** is  _volume_ unit. Definition of 1 dash (US) ≡  1⁄96 US fl oz ≡  1⁄2 US pinch.  ≡ 0.0000295735295625 / 96 ≡ 308.057599609375e-9 m³.

[Source](http://conversion.org/volume/dash-us/)

##### Units:

- ```[dash (US)]```

##### Summary:

```LaTeX
1 dash (US) = 1⁄96 US fl oz = 1⁄2 US pinch
```

##### Code:

```ts
const Dash_US = scale("Dash (US)", "dash (US)", mul(unit(1, OunceFluid_USCustomary), 0.010416666666666666));
```


Decilitre
---

> **Decilitre** is metric _volume_ unit, symbol: [dL; dl]. Definition of 1 decilitre  ≡ 0.1 L. Decilitre is volume equivalent to one tenth of a liter (L/10).

[Source](http://conversion.org/volume/decilitre/)

##### Units:

- ```dL```
- ```dl```

##### Summary:

```LaTeX
1 dL = 0.1 L
```

##### Code:

```ts
const Decilitre = scale("Decilitre", "dL", mul(unit(1, Litre), 0.1));
```


Dekalitre
---

> **Dekalitre** is metric _volume_ unit, symbol: [daL; dal]. Definition of 1 dekalitre  ≡ 10 L. Dekalitre is equivalent to volume of ten litres.

[Source](http://conversion.org/volume/dekalitre/)

##### Units:

- ```daL```
- ```dal```

##### Summary:

```LaTeX
1 daL = 10 L
```

##### Code:

```ts
const Dekalitre = scale("Dekalitre", "daL", mul(unit(1, Litre), 10));
```


Dessertspoon (imperial)
---

> **Dessertspoon (imperial)** is  _volume_ unit. Definition of 1 dessertspoon (imperial) ≡  1⁄12 gi (imp). A dessertspoon unit of volume based on a spoon designed specifically for eating dessert. ≡ 11.8387760416e-6 m³.

[Source](http://conversion.org/volume/dessertspoon-imperial/)

##### Units:

- ```[dessertspoon (imp)]```

##### Summary:

```LaTeX
1 dessertspoon (imp) = 1⁄12 gi (imp)
```

##### Code:

```ts
const DessertspoonImperial = scale("Dessertspoon (imperial)", "dessertspoon (imp)", mul(unit(1, GillImperial_Noggin), 0.08333333333333333));
```


Drop (imperial)
---

> **Drop (imperial)** is  _volume_ unit, symbol: [gtt (imp)]. Definition of 1 drop (imperial) ≡  1⁄288 fl oz (imp). Most common definition for imperial drop is fl oz (imp)/288 ≡ 98.6564670138e-9 m³.

[Source](http://conversion.org/volume/drop-imperial/)

##### Units:

- ```[gtt (imp)]```

##### Summary:

```LaTeX
1 gtt (imp) = 1⁄288 fl oz (imp)
```

##### Code:

```ts
const DropImperial = scale("Drop (imperial)", "gtt (imp)", mul(unit(1, OunceFluidImperial), 0.003472222222222222));
```


Drop (medical)
---

> **Drop (medical)** is  _volume_ unit, symbol: [gtt (med.)]. Definition of 1 drop (medical) ≡  1⁄12 ml. Medical drop is defined ad 1 mL / 12 ≡ 83.33(3)e-9 m³.

[Source](http://conversion.org/volume/drop-medical/)

##### Units:

- ```[gtt (med.)]```

##### Summary:

```LaTeX
1 gtt (med.) = 1⁄12 ml
```

##### Code:

```ts
const DropMedical = scale("Drop (medical)", "gtt (med.)", mul(unit(1, Millilitre), 0.08333333333333333));
```


Drop (metric)
---

> **Drop (metric)** is  _volume_ unit, symbol: [gtt (metric)]. Definition of 1 drop (metric) ≡  1⁄20 mL. Metric drop: 1 mL/20 ≡ 50.0e-9 m³.

[Source](http://conversion.org/volume/drop-metric/)

##### Units:

- ```[gtt (metric)]```

##### Summary:

```LaTeX
1 gtt (metric) = 1⁄20 mL
```

##### Code:

```ts
const DropMetric = scale("Drop (metric)", "gtt (metric)", mul(unit(1, Millilitre), 0.05));
```


Drop (US)
---

> **Drop (US)** is  _volume_ unit, symbol: [gtt (US)]. Definition of 1 drop (US) ≡  1⁄360 US fl oz. Most common definition for US drop is US fl oz/30 ≡ 82.14869322916e-9 m³.

[Source](http://conversion.org/volume/drop-us/)

##### Units:

- ```[gtt (US)]```

##### Summary:

```LaTeX
1 gtt (US) = 1⁄360 US fl oz
```

##### Code:

```ts
const Drop_US = scale("Drop (US)", "gtt (US)", mul(unit(1, OunceFluid_USCustomary), 0.002777777777777778));
```


Fifth
---

> **Fifth** is  _volume_ unit. Definition of 1 fifth ≡  1⁄5 US gal. Fifth part of US gallon ≡ 0.003785411784 / 5 ≡ 757.0823568e-6 m³.

[Source](http://conversion.org/volume/fifth/)

##### Units:

- ```fifth```

##### Summary:

```LaTeX
1 fifth = 1⁄5 US gal
```

##### Code:

```ts
const Fifth = scale("Fifth", "fifth", mul(unit(1, Gallon_USFluid_Wine), 0.2));
```


Firkin
---

> **Firkin** is  _volume_ unit. Definition of 1 firkin ≡ 9 gal (imp). Firkin is equal to nine imperial gallon ≡ 9×0.00454609 ≡ 0.04091481 m³.

[Source](http://conversion.org/volume/firkin/)

##### Units:

- ```firkin```

##### Summary:

```LaTeX
1 firkin = 9 gal (imp)
```

##### Code:

```ts
const Firkin = scale("Firkin", "firkin", mul(unit(1, GallonImperial), 9));
```


Fluid drachm (imperial)
---

> **Fluid drachm (imperial)** is  _volume_ unit, symbol: [fl dr (imp)]. Definition of 1 fluid drachm (imperial) ≡  1⁄8 fl oz (imp). Drachm is British spelling for dram: fl oz (imperial) / 8 ≡ 3.5516328125e-6 m³.

[Source](http://conversion.org/volume/fluid-drachm-imperial/)

##### Units:

- ```[fl dr (imp)]```

##### Summary:

```LaTeX
1 fl dr (imp) = 1⁄8 fl oz (imp)
```

##### Code:

```ts
const FluidDrachmImperial = scale("Fluid drachm (imperial)", "fl dr (imp)", mul(unit(1, OunceFluidImperial), 0.125));
```


Fluid dram (US)
---

> **Fluid dram (US)** is  _volume_ unit, symbol: [fl dr (US)]. Definition of 1 fluid dram (US) ≡  1⁄8 US fl oz. Fluid dram (or Drachm in UK spelling) ≡ US fl oz / 8 ≡ 3.6966911953125e-6 m³.

[Source](http://conversion.org/volume/fluid-dram-us/)

##### Units:

- ```[fl dr (US)]```

##### Summary:

```LaTeX
1 fl dr (US) = 1⁄8 US fl oz
```

##### Code:

```ts
const FluidDram_US = scale("Fluid dram (US)", "fl dr (US)", mul(unit(1, OunceFluid_USCustomary), 0.125));
```


Fluid scruple (imperial)
---

> **Fluid scruple (imperial)** is  _volume_ unit, symbol: [fl s]. Definition of 1 fluid scruple (imperial) ≡  1⁄24 fl oz (imp). The scruple is a small unit in the apothecaries system, derived from the old Roman scrupulum unit, equal to: fl oz (imp) / 24 ≡ 1.18387760416e-6 m³.

[Source](http://conversion.org/volume/fluid-scruple-imperial/)

##### Units:

- ```[fl s]```

##### Summary:

```LaTeX
1 fl s = 1⁄24 fl oz (imp)
```

##### Code:

```ts
const FluidScrupleImperial = scale("Fluid scruple (imperial)", "fl s", mul(unit(1, OunceFluidImperial), 0.041666666666666664));
```


Gallon (beer)
---

> **Gallon (beer)** is  _volume_ unit, symbol: [beer gal]. Definition of 1 gallon (beer) ≡ 282 cu in. The gallon originated as the base of systems for measuring wine, and beer in England ≡ 282 cubic inch ≡ 4.621152048e-3 m³.

[Source](http://conversion.org/volume/gallon-beer/)

##### Units:

- ```[beer gal]```

##### Summary:

```LaTeX
1 beer gal = 282 cu in
```

##### Code:

```ts
const GallonBeer = scale("Gallon (beer)", "beer gal", mul(unit(1, CubicInch), 282));
```


Gallon (imperial)
---

> **Gallon (imperial)** is  _volume_ unit, symbol: [gal (imp)]. Definition of 1 gallon (imperial) ≡ 4.54609 L. Since 1985 one imperial gallon is exactly defnied as ≡ 4.54609e-3 m³.

[Source](http://conversion.org/volume/gallon-imperial/)

##### Units:

- ```[gal (imp)]```

##### Summary:

```LaTeX
1 gal (imp) = 4.54609 L
```

##### Code:

```ts
const GallonImperial = scale("Gallon (imperial)", "gal (imp)", mul(unit(1, Litre), 4.54609));
```


Gallon (US dry)
---

> **Gallon (US dry)** is  _volume_ unit, symbol: [gal (US dry)]. Definition of 1 gallon (US dry) ≡  1⁄8 bu (US lvl). Dry US gallon is a rarely used and unofficial unit of measure ≡ 4.40488377086e-3 m³.

[Source](http://conversion.org/volume/gallon-us-dry/)

##### Units:

- ```[gal (US dry)]```

##### Summary:

```LaTeX
1 gal (US dry) = 1⁄8 bu (US lvl)
```

##### Code:

```ts
const Gallon_USDry = scale("Gallon (US dry)", "gal (US dry)", mul(unit(1, Bushel_USDryLevel), 0.125));
```


Gallon (US fluid; Wine)
---

> **Gallon (US fluid; Wine)** is  _volume_ unit, symbol: [gal (US)]. Definition of 1 gallon (US fluid; Wine) ≡ 231 cu in. A traditional unit of liquid volume, in the United States, the liquid gallon is legally defined as exactly 231 cubic inches; this is equal to the old English wine gallon ≡ 3.785411784e-3 m³.

[Source](http://conversion.org/volume/gallon-us-fluid-wine/)

##### Units:

- ```[gal (US)]```

##### Summary:

```LaTeX
1 gal (US) = 231 cu in
```

##### Code:

```ts
const Gallon_USFluid_Wine = scale("Gallon (US fluid; Wine)", "gal (US)", mul(unit(1, CubicInch), 231));
```


Gill (imperial); Noggin
---

> **Gill (imperial); Noggin** is  _volume_ unit, symbol: [gi (imp); nog]. Definition of 1 gill (imperial); Noggin ≡ 5 fl oz (imp). The imperial gill or teacup is a unit of measurement for volume equal to a quarter of a imperial pint ≡ 142.0653125e-6 m³.

[Source](http://conversion.org/volume/gill-imperial-noggin/)

##### Units:

- ```[gi (imp)]```
- ```nog```

##### Summary:

```LaTeX
1 gi (imp) = 5 fl oz (imp)
```

##### Code:

```ts
const GillImperial_Noggin = scale("Gill (imperial); Noggin", "gi (imp)", mul(unit(1, OunceFluidImperial), 5));
```


Gill (US)
---

> **Gill (US)** is  _volume_ unit, symbol: [gi (US)]. Definition of 1 gill (US) ≡ 4 US fl oz. The US gill is a unit of measurement for volume equal to a quarter of a US pint ≡ 118.29411825e-6 m³.

[Source](http://conversion.org/volume/gill-us/)

##### Units:

- ```[gi (US)]```

##### Summary:

```LaTeX
1 gi (US) = 4 US fl oz
```

##### Code:

```ts
const Gill_US = scale("Gill (US)", "gi (US)", mul(unit(1, OunceFluid_USCustomary), 4));
```


Hectolitre
---

> **Hectolitre** is metric _volume_ unit, symbol: [hL; hl]. Definition of 1 hectolitre  ≡ 100 L. Hectolitre is equivalent to volume of hundred litres.

[Source](http://conversion.org/volume/hectolitre/)

##### Units:

- ```hL```
- ```hl```

##### Summary:

```LaTeX
1 hL = 100 L
```

##### Code:

```ts
const Hectolitre = scale("Hectolitre", "hL", mul(unit(1, Litre), 100));
```


Hogshead (imperial)
---

> **Hogshead (imperial)** is  _volume_ unit, symbol: [hhd (imp)]. Definition of 1 hogshead (imperial) ≡ 2 bl (imp). Hogshead is a large cask of liquid. Imperial hogshead is equal to 0.32731848 m³.

[Source](http://conversion.org/volume/hogshead-imperial/)

##### Units:

- ```[hhd (imp)]```

##### Summary:

```LaTeX
1 hhd (imp) = 2 bl (imp)
```

##### Code:

```ts
const HogsheadImperial = scale("Hogshead (imperial)", "hhd (imp)", mul(unit(1, BarrelImperial), 2));
```


Hogshead (US)
---

> **Hogshead (US)** is  _volume_ unit, symbol: [hhd (US)]. Definition of 1 hogshead (US) ≡ 2 fl bl (US). US hogshead is a large cask of liquid, equal to ≡ 0.238480942392 m³.

[Source](http://conversion.org/volume/hogshead-us/)

##### Units:

- ```[hhd (US)]```

##### Summary:

```LaTeX
1 hhd (US) = 2 fl bl (US)
```

##### Code:

```ts
const Hogshead_US = scale("Hogshead (US)", "hhd (US)", mul(unit(1, Barrel_USFluid), 2));
```


Jigger (bartending)
---

> **Jigger (bartending)** is  _volume_ unit. Definition of 1 jigger (bartending) ≡  1 1⁄2 US fl oz. A jigger or measure is a bartending tool used to measure liquor, which is typically then poured into a cocktail shaker..

[Source](http://conversion.org/volume/jigger-bartending/)

##### Units:

- ```[jigger (bartending)]```

##### Summary:

```LaTeX
1 jigger (bartending) = 1 1⁄2 US fl oz
```

##### Code:

```ts
const JiggerBartending = scale("Jigger (bartending)", "jigger (bartending)", mul(unit(1, OunceFluid_USCustomary), 1.5));
```


Kilderkin
---

> **Kilderkin** is  _volume_ unit. Definition of 1 kilderkin ≡ 18 gal (imp). The kilderkin (from the Dutch for small cask) is equal to half a barrel or two firkins or 18 imperial gallons ≡ 0.08182962 m³.

[Source](http://conversion.org/volume/kilderkin/)

##### Units:

- ```kilderkin```

##### Summary:

```LaTeX
1 kilderkin = 18 gal (imp)
```

##### Code:

```ts
const Kilderkin = scale("Kilderkin", "kilderkin", mul(unit(1, GallonImperial), 18));
```


Lambda
---

> **Lambda** is  _volume_ unit, symbol: [λ]. Definition of 1 lambda ≡ 1 mm³. Lambda is a legit metric unit of volume equal to ≡ 1e-9 m³.

[Source](http://conversion.org/volume/lambda/)

##### Units:

- ```λ```

##### Summary:

```LaTeX
1 λ = 1 mm³
```

##### Code:

```ts
const Lambda = scale("Lambda", "λ", mul(pow(unit(1, Millimetre), 3), 1));
```


Last
---

> **Last** is  _volume_ unit. Definition of 1 last ≡ 80 bu (imp). The last was a large English unit of volume. It referred to standardized amounts of ships lading and varied by commodity and over time ≡ 2.9094976 m³.

[Source](http://conversion.org/volume/last/)

##### Units:

- ```last```

##### Summary:

```LaTeX
1 last = 80 bu (imp)
```

##### Code:

```ts
const Last = scale("Last", "last", mul(unit(1, BushelImperial), 80));
```


Litre
---

> **Litre** is  _volume_ unit, symbol: [L; l]. Definition of 1 litre ≡ 1 dm³. Litre (or Liter spelling in American English) is very popular unit of volume equal to 10 cm × 0 cm × 0 cm cube ≡ 0.001 m³.

[Source](http://conversion.org/volume/litre/)

##### Units:

- ```L```
- ```l```

##### Summary:

```LaTeX
1 L = 1 dm³
```

##### Code:

```ts
const Litre = scale("Litre", "L", mul(pow(unit(1, Decimetre), 3), 1));
```


Load
---

> **Load** is  _volume_ unit. Definition of 1 load ≡ 50 cu ft. Load volume unit is equal to 50 cubic feet ≡ 50 × 0.3048³ ≡ 1.4158423296 m³.

[Source](http://conversion.org/volume/load/)

##### Units:

- ```load```

##### Summary:

```LaTeX
1 load = 50 cu ft
```

##### Code:

```ts
const Load = scale("Load", "load", mul(unit(1, CubicFoot), 50));
```


Microlitre
---

> **Microlitre** is metric _volume_ unit, symbol: [µL; µl]. Definition of 1 microlitre  ≡ 1e-6 L. One microlitre volume is equivalent to one millionth of Litre ≡ 1 cubic millimetre.

[Source](http://conversion.org/volume/microlitre/)

##### Units:

- ```µL```
- ```µl```

##### Summary:

```LaTeX
1 µL = 1e-6 L
```

##### Code:

```ts
const Microlitre = scale("Microlitre", "µL", mul(unit(1, Litre), 0.000001));
```


Millilitre
---

> **Millilitre** is metric _volume_ unit, symbol: [mL; ml]. Definition of 1 millilitre  ≡ 0.001 L. One millilitre is volume equivalent to one cubic centimetre.

[Source](http://conversion.org/volume/millilitre/)

##### Units:

- ```mL```
- ```ml```

##### Summary:

```LaTeX
1 mL = 0.001 L
```

##### Code:

```ts
const Millilitre = scale("Millilitre", "mL", mul(unit(1, Litre), 0.001));
```


Minim (imperial)
---

> **Minim (imperial)** is  _volume_ unit, symbol: [min (imp)]. Definition of 1 minim (imperial) ≡  1⁄480 fl oz (imp) ≡ 1/60 fl dr (imp). Imperial minim is volume unit equal to 1/480 part of imperial ounce ≡ 59.1938802083e-9 m³.

[Source](http://conversion.org/volume/minim-imperial/)

##### Units:

- ```[min (imp)]```

##### Summary:

```LaTeX
1 min (imp) = 1⁄480 fl oz (imp) = 1/60 fl dr (imp)
```

##### Code:

```ts
const MinimImperial = scale("Minim (imperial)", "min (imp)", mul(unit(1, FluidDrachmImperial), 0.016666666666666666));
```


Minim (US)
---

> **Minim (US)** is  _volume_ unit, symbol: [min (US)]. Definition of 1 minim (US) ≡  1⁄480 US fl oz ≡  1⁄60 US fl dr. US minim is volume unit equal to 1/480 part of US fluid ounce≡ 61.611519921875e-9 m³.

[Source](http://conversion.org/volume/minim-us/)

##### Units:

- ```[min (US)]```

##### Summary:

```LaTeX
1 min (US) = 1⁄480 US fl oz = 1⁄60 US fl dr
```

##### Code:

```ts
const Minim_US = scale("Minim (US)", "min (US)", mul(unit(1, OunceFluid_USCustomary), 0.0020833333333333333));
```


Ounce (fluid imperial)
---

> **Ounce (fluid imperial)** is  _volume_ unit, symbol: [fl oz (imp)]. Definition of 1 ounce (fluid imperial) ≡  1⁄160 gal (imp). Imperial fluid ounce is unit of volume (or capacity) equal to 1/160 of imperial gallon ≡ 28.4130625e-6 m³.

[Source](http://conversion.org/volume/ounce-fluid-imperial/)

##### Units:

- ```[fl oz (imp)]```

##### Summary:

```LaTeX
1 fl oz (imp) = 1⁄160 gal (imp)
```

##### Code:

```ts
const OunceFluidImperial = scale("Ounce (fluid imperial)", "fl oz (imp)", mul(unit(1, GallonImperial), 0.00625));
```


Ounce (fluid US customary)
---

> **Ounce (fluid US customary)** is  _volume_ unit, symbol: [US fl oz; fl oz (US)]. Definition of 1 ounce (fluid US customary) ≡  1⁄128 gal (US). US fluid ounce is unit of volume (or capacity) equal to 1/128 of US fluid gallon ≡ 29.5735295625e-6 m³.

[Source](http://conversion.org/volume/ounce-fluid-us-customary/)

##### Units:

- ```[US fl oz]```
- ```[fl oz (US)]```

##### Summary:

```LaTeX
1 US fl oz = 1⁄128 gal (US)
```

##### Code:

```ts
const OunceFluid_USCustomary = scale("Ounce (fluid US customary)", "US fl oz", mul(unit(1, Gallon_USFluid_Wine), 0.0078125));
```


Ounce (fluid US food nutrition labeling)
---

> **Ounce (fluid US food nutrition labeling)** is  _volume_ unit, symbol: [US fl oz (food); fl oz (US food)]. Definition of 1 ounce (fluid US food nutrition labeling) ≡ 30 mL. By definition exactly 30 mL ≡ 3e-5 m³.

[Source](http://conversion.org/volume/ounce-fluid-us-food-nutrition-labeling/)

##### Units:

- ```[US fl oz (food)]```
- ```[fl oz (US food)]```

##### Summary:

```LaTeX
1 US fl oz (food) = 30 mL
```

##### Code:

```ts
const OunceFluid_USFoodNutritionLabeling = scale("Ounce (fluid US food nutrition labeling)", "US fl oz (food)", mul(unit(1, Millilitre), 30));
```


Peck (imperial)
---

> **Peck (imperial)** is  _volume_ unit, symbol: [pk (imp)]. Definition of 1 peck (imperial) ≡ 2 gal (imp). A peck is an imperial (and US customary) unit of dry volume equivalent to 2 imperial gallons ≡ 9.09218e-3 m³.

[Source](http://conversion.org/volume/peck-imperial/)

##### Units:

- ```[pk (imp)]```

##### Summary:

```LaTeX
1 pk (imp) = 2 gal (imp)
```

##### Code:

```ts
const PeckImperial = scale("Peck (imperial)", "pk (imp)", mul(unit(1, GallonImperial), 2));
```


Peck (US dry)
---

> **Peck (US dry)** is  _volume_ unit, symbol: [pk (US)]. Definition of 1 peck (US dry) ≡  1⁄4 US lvl bu. US peck is an US customary (and imperial) unit of dry volume equivalent to 2 US dry gallons ≡ 8.80976754172e-3 m³.

[Source](http://conversion.org/volume/peck-us-dry/)

##### Units:

- ```[pk (US)]```

##### Summary:

```LaTeX
1 pk (US) = 1⁄4 US lvl bu
```

##### Code:

```ts
const Peck_USDry = scale("Peck (US dry)", "pk (US)", mul(unit(1, Bushel_USDryLevel), 0.25));
```


Perch
---

> **Perch** is  _volume_ unit, symbol: [per]. Definition of 1 perch ≡  16 1⁄2 ft ×  1 1⁄2 ft ×  ft ≡ 24.75 cu ft ≡ 0.700841953152 m³. Perch is a traditional unit of volume for stone and other masonry 24.75 cu ft ≡ 0.700841953152 m³.

[Source](http://conversion.org/volume/perch/)

##### Units:

- ```per```

##### Summary:

```LaTeX
1 per = 24.75 cu ft = 0.700841953152 m³
```

##### Code:

```ts
const Perch = scale("Perch", "per", mul(pow(unit(1, metre), 3), 0.700841953152));
```


Picolitre
---

> **Picolitre** is metric _volume_ unit, symbol: [pL; pl]. Definition of 1 picolitre  ≡ 1e-9 L. One picolitre is very small unit. 1 mL contains million picolitres..

[Source](http://conversion.org/volume/picolitre/)

##### Units:

- ```pL```
- ```pl```

##### Summary:

```LaTeX
1 pL = 1e-9 L
```

##### Code:

```ts
const Picolitre = scale("Picolitre", "pL", mul(unit(1, Litre), 1e-9));
```


Pinch (imperial)
---

> **Pinch (imperial)** is  _volume_ unit. Definition of 1 pinch (imperial) ≡  1⁄192 gi (imp) ≡ 1/16 tsp (imp). Imperial pinch is a kitchen volume unit used to dose salt, sugar, spice ≡ 739.92350260416e-9 m³.

[Source](http://conversion.org/volume/pinch-imperial/)

##### Units:

- ```[pinch (imperial)]```

##### Summary:

```LaTeX
1 pinch (imperial) = 1⁄192 gi (imp) = 1/16 tsp (imp)
```

##### Code:

```ts
const PinchImperial = scale("Pinch (imperial)", "pinch (imperial)", mul(unit(1, GillImperial_Noggin), 0.005208333333333333));
```


Pinch (US)
---

> **Pinch (US)** is  _volume_ unit. Definition of 1 pinch (US) ≡  1⁄48 US fl oz ≡ 1/16 US tsp. US pinch is kitchen US (dry) Volume Unit ≡ 616.11519921875e-9 m³.

[Source](http://conversion.org/volume/pinch-us/)

##### Units:

- ```[pinch (US)]```

##### Summary:

```LaTeX
1 pinch (US) = 1⁄48 US fl oz = 1/16 US tsp
```

##### Code:

```ts
const Pinch_US = scale("Pinch (US)", "pinch (US)", mul(unit(1, OunceFluid_USCustomary), 0.020833333333333332));
```


Pint (imperial)
---

> **Pint (imperial)** is  _volume_ unit, symbol: [pt (imp)]. Definition of 1 pint (imperial) ≡  1⁄8 gal (imp). Imperial pint is unit of volume equal to one-eighth of an imperial gallon ≡ 568.26125e-6 m³.

[Source](http://conversion.org/volume/pint-imperial/)

##### Units:

- ```[pt (imp)]```

##### Summary:

```LaTeX
1 pt (imp) = 1⁄8 gal (imp)
```

##### Code:

```ts
const PintImperial = scale("Pint (imperial)", "pt (imp)", mul(unit(1, GallonImperial), 0.125));
```


Pint (US dry)
---

> **Pint (US dry)** is  _volume_ unit, symbol: [pt (US dry)]. Definition of 1 pint (US dry) ≡  1⁄64 bu (US lvl) ≡  1⁄8 gal (US dry). US dry pint is unit of volume equal to one-eighth of an US dry gallon ≡ 550.6104713575e-6 m³.

[Source](http://conversion.org/volume/pint-us-dry/)

##### Units:

- ```[pt (US dry)]```

##### Summary:

```LaTeX
1 pt (US dry) = 1⁄64 bu (US lvl) = 1⁄8 gal (US dry)
```

##### Code:

```ts
const Pint_USDry = scale("Pint (US dry)", "pt (US dry)", mul(unit(1, Gallon_USDry), 0.125));
```


Pint (US fluid)
---

> **Pint (US fluid)** is  _volume_ unit, symbol: [pt (US fl)]. Definition of 1 pint (US fluid) ≡  1⁄8 gal (US). US fluid pint is unit of volume equal to one-eighth of an US liquid gallon≡ 473.176473e-6 m³.

[Source](http://conversion.org/volume/pint-us-fluid/)

##### Units:

- ```[pt (US fl)]```

##### Summary:

```LaTeX
1 pt (US fl) = 1⁄8 gal (US)
```

##### Code:

```ts
const Pint_USFluid = scale("Pint (US fluid)", "pt (US fl)", mul(unit(1, Gallon_USFluid_Wine), 0.125));
```


Pony
---

> **Pony** is  _volume_ unit. Definition of 1 pony ≡  3⁄4 US fl oz. According to Encyclopædia Britannica Almanac 2009, a pony is 0.75 fluid ounces of liquor ≡ 22.180147171875e-6 m³.

[Source](http://conversion.org/volume/pony/)

##### Units:

- ```pony```

##### Summary:

```LaTeX
1 pony = 3⁄4 US fl oz
```

##### Code:

```ts
const Pony = scale("Pony", "pony", mul(unit(1, OunceFluid_USCustomary), 0.75));
```


Pottle; quartern
---

> **Pottle; quartern** is  _volume_ unit. Definition of 1 pottle; quartern ≡  1⁄2 gal (imp) ≡ 80 fl oz (imp). A former unit of volume, equivalent to half a gallon (imperial), used for liquids and corn ≡ 2.273045e-3 m³.

[Source](http://conversion.org/volume/pottle-quartern/)

##### Units:

- ```pottle```
- ```quartern```

##### Summary:

```LaTeX
1 pottle = 1⁄2 gal (imp) = 80 fl oz (imp)
```

##### Code:

```ts
const PottleQuartern = scale("Pottle; quartern", "pottle", mul(unit(1, OunceFluidImperial), 80));
```


Quart (imperial)
---

> **Quart (imperial)** is  _volume_ unit, symbol: [qt (imp)]. Definition of 1 quart (imperial) ≡  1⁄4 gal (imp). Quart of an imperial gallon ≡ 1.1365225e-3 m³.

[Source](http://conversion.org/volume/quart-imperial/)

##### Units:

- ```[qt (imp)]```

##### Summary:

```LaTeX
1 qt (imp) = 1⁄4 gal (imp)
```

##### Code:

```ts
const QuartImperial = scale("Quart (imperial)", "qt (imp)", mul(unit(1, GallonImperial), 0.25));
```


Quart (US dry)
---

> **Quart (US dry)** is  _volume_ unit, symbol: [qt (US dry)]. Definition of 1 quart (US dry) ≡  1⁄32 bu (US lvl) ≡  1⁄4 gal (US dry). Quart of an US dry gallon ≡ 1.101220942715e-3 m³.

[Source](http://conversion.org/volume/quart-us-dry/)

##### Units:

- ```[qt (US dry)]```

##### Summary:

```LaTeX
1 qt (US dry) = 1⁄32 bu (US lvl) = 1⁄4 gal (US dry)
```

##### Code:

```ts
const Quart_USDry = scale("Quart (US dry)", "qt (US dry)", mul(unit(1, Gallon_USDry), 0.25));
```


Quart (US fluid)
---

> **Quart (US fluid)** is  _volume_ unit, symbol: [qt (US)]. Definition of 1 quart (US fluid) ≡  1⁄4 gal (US fl). Quart of an US fluid gallon ≡ 946.352946e-6 m³.

[Source](http://conversion.org/volume/quart-us-fluid/)

##### Units:

- ```[qt (US)]```

##### Summary:

```LaTeX
1 qt (US) = 1⁄4 gal (US fl)
```

##### Code:

```ts
const Quart_USFluid = scale("Quart (US fluid)", "qt (US)", mul(unit(1, Gallon_USFluid_Wine), 0.25));
```


Quarter; pail
---

> **Quarter; pail** is  _volume_ unit. Definition of 1 quarter; pail ≡ 8 bu (imp). Equivalent to 8 imperial bushels: 8 × 0.03636872 ≡ 0.29094976 m³.

[Source](http://conversion.org/volume/quarter-pail/)

##### Units:

- ```pail```

##### Summary:

```LaTeX
1 pail = 8 bu (imp)
```

##### Code:

```ts
const QuarterPail = scale("Quarter; pail", "pail", mul(unit(1, BushelImperial), 8));
```


Register ton
---

> **Register ton** is  _volume_ unit. Definition of 1 register ton ≡ 100 cu ft. Gross register tonnage a ship's total internal volume expressed in "register tons", each of which is equal to 100 cubic feet ≡ 2.8316846592 m³.

[Source](http://conversion.org/volume/register-ton/)

##### Units:

- ```[register ton]```

##### Summary:

```LaTeX
1 register ton = 100 cu ft
```

##### Code:

```ts
const RegisterTon = scale("Register ton", "register ton", mul(unit(1, CubicFoot), 100));
```


Sack (imperial); bag
---

> **Sack (imperial); bag** is  _volume_ unit. Definition of 1 sack (imperial); bag ≡ 3 bu (imp). Dry unit, sack (or bag) equivalent to 3 imperial bushels ≡ 0.10910616 m³.

[Source](http://conversion.org/volume/sack-imperial-bag/)

##### Units:

- ```[sack (imperial)]```
- ```bag```

##### Summary:

```LaTeX
1 sack (imperial) = 3 bu (imp)
```

##### Code:

```ts
const SackImperialBag = scale("Sack (imperial); bag", "sack (imperial)", mul(unit(1, BushelImperial), 3));
```


Sack (US)
---

> **Sack (US)** is  _volume_ unit. Definition of 1 sack (US) ≡ 3 bu (US lvl). Sack is dry unit equivalent to 3 US level bushels ≡ 0.10571721050064 m³.

[Source](http://conversion.org/volume/sack-us/)

##### Units:

- ```[sack (US)]```

##### Summary:

```LaTeX
1 sack (US) = 3 bu (US lvl)
```

##### Code:

```ts
const Sack_US = scale("Sack (US)", "sack (US)", mul(unit(1, Bushel_USDryLevel), 3));
```


Seam
---

> **Seam** is  _volume_ unit. Definition of 1 seam ≡ 8 bu (imperial). A Seam is an obsolete unit of volume in the UK ≡ 0.29094976 m³.

[Source](http://conversion.org/volume/seam/)

##### Units:

- ```seam```

##### Summary:

```LaTeX
1 seam = 8 bu (imperial)
```

##### Code:

```ts
const Seam = scale("Seam", "seam", mul(unit(1, BushelImperial), 8));
```


Shot (US)
---

> **Shot (US)** is  _volume_ unit. Definition of 1 shot (US) usually ≡ 1.5 US fl oz. Shot is a traditional unit of liquid volume. In the U.S. a shot is usually the same as a jigger 1.5 US fl oz ≡ 44.4 ml (but some bartenders use shot glasses of other sizes such as 1.25 US fl oz).

[Source](http://conversion.org/volume/shot-us/)

##### Units:

- ```[shot (US)]```

##### Summary:

```LaTeX
1 shot (US) = 1.5 US fl oz
```

##### Code:

```ts
const Shot_US = scale("Shot (US)", "shot (US)", mul(unit(1, OunceFluid_USCustomary), 1.5));
```


Strike (imperial)
---

> **Strike (imperial)** is  _volume_ unit. Definition of 1 strike (imperial) ≡ 2 bu (imp). Imperial strike unit of volume equivalent to two imperial bushels ≡ 0.07273744 m³.

[Source](http://conversion.org/volume/strike-imperial/)

##### Units:

- ```[strike (imp)]```

##### Summary:

```LaTeX
1 strike (imp) = 2 bu (imp)
```

##### Code:

```ts
const StrikeImperial = scale("Strike (imperial)", "strike (imp)", mul(unit(1, BushelImperial), 2));
```


Strike (US)
---

> **Strike (US)** is  _volume_ unit. Definition of 1 strike (US) ≡ 2 bu (US lvl). US strike is unit of volume equivalent to two US level bushels ≡ 0.07047814033376 m³.

[Source](http://conversion.org/volume/strike-us/)

##### Units:

- ```[strike (US)]```

##### Summary:

```LaTeX
1 strike (US) = 2 bu (US lvl)
```

##### Code:

```ts
const Strike_US = scale("Strike (US)", "strike (US)", mul(unit(1, Bushel_USDryLevel), 2));
```


Tablespoon (Australian metric)
---

> **Tablespoon (Australian metric)** is  _volume_ unit. Definition of 1 tablespoon (Australian metric) ≡ 20 ml. Defined as exactly 20 mL ≡ 20.0e-6 m³.

[Source](http://conversion.org/volume/tablespoon-australian-metric/)

##### Units:

- ```[tablespoon (Australian metric)]```

##### Summary:

```LaTeX
1 tablespoon (Australian metric) = 20 ml
```

##### Code:

```ts
const Tablespoon_AustralianMetric = scale("Tablespoon (Australian metric)", "tablespoon (Australian metric)", mul(unit(1, Millilitre), 20));
```


Tablespoon (Canadian)
---

> **Tablespoon (Canadian)** is  _volume_ unit, symbol: [tbsp]. Definition of 1 tablespoon (Canadian) ≡  1⁄2 fl oz (imp). ≡ 28.4130625 mL /2 ≡ 14.20653125e-6 m³.

[Source](http://conversion.org/volume/tablespoon-canadian/)

##### Units:

- ```tbsp```

##### Summary:

```LaTeX
1 tbsp = 1⁄2 fl oz (imp)
```

##### Code:

```ts
const Tablespoon_Canadian = scale("Tablespoon (Canadian)", "tbsp", mul(unit(1, OunceFluidImperial), 0.5));
```


Tablespoon (imperial)
---

> **Tablespoon (imperial)** is  _volume_ unit, symbol: [tbsp (imp)]. Definition of 1 tablespoon (imperial) ≡  5⁄8 fl oz (imp). Imperial tablespoon is a unit of volume, especially widely used in cooking recipes and pharmaceutic prescriptions, equivalent with 5/8 imperial fluid ounce ≡ 17.7581640625e-6 m³.

[Source](http://conversion.org/volume/tablespoon-imperial/)

##### Units:

- ```[tbsp (imp)]```

##### Summary:

```LaTeX
1 tbsp (imp) = 5⁄8 fl oz (imp)
```

##### Code:

```ts
const TablespoonImperial = scale("Tablespoon (imperial)", "tbsp (imp)", mul(unit(1, OunceFluidImperial), 0.625));
```


Tablespoon (metric)
---

> **Tablespoon (metric)** is  _volume_ unit, symbol: [tbsp (metric)]. Definition of 1 tablespoon (metric) ≡ 15 ml. Metric tablespoon is exactly 15 mL ≡ 15.0e-6 m³.

[Source](http://conversion.org/volume/tablespoon-metric/)

##### Units:

- ```[tbsp (metric)]```

##### Summary:

```LaTeX
1 tbsp (metric) = 15 ml
```

##### Code:

```ts
const TablespoonMetric = scale("Tablespoon (metric)", "tbsp (metric)", mul(unit(1, Millilitre), 15));
```


Tablespoon (US customary)
---

> **Tablespoon (US customary)** is  _volume_ unit, symbol: [tbsp (US)]. Definition of 1 tablespoon (US customary) ≡  1⁄2 US fl oz. The traditional US interpretation of the tablespoon as a unit of volume is 3 teaspoons or half US fluid ounce≡ 14.78676478125e-6 m³.

[Source](http://conversion.org/volume/tablespoon-us-customary/)

##### Units:

- ```[tbsp (US)]```

##### Summary:

```LaTeX
1 tbsp (US) = 1⁄2 US fl oz
```

##### Code:

```ts
const Tablespoon_USCustomary = scale("Tablespoon (US customary)", "tbsp (US)", mul(unit(1, OunceFluid_USCustomary), 0.5));
```


Tablespoon (US food nutrition labeling)
---

> **Tablespoon (US food nutrition labeling)** is  _volume_ unit, symbol: [tbsp (US food)]. Definition of 1 tablespoon (US food nutrition labeling) ≡ 15 mL. Tablespoon for US food nutrition labeling is same as metric tablespoon, 15 mL ≡ 1.5e-5 m³.

[Source](http://conversion.org/volume/tablespoon-us-food-nutrition-labeling/)

##### Units:

- ```[tbsp (US food)]```

##### Summary:

```LaTeX
1 tbsp (US food) = 15 mL
```

##### Code:

```ts
const Tablespoon_USFoodNutritionLabeling = scale("Tablespoon (US food nutrition labeling)", "tbsp (US food)", mul(unit(1, Millilitre), 15));
```


Teaspoon (Canadian)
---

> **Teaspoon (Canadian)** is  _volume_ unit, symbol: [tsp]. Definition of 1 teaspoon (Canadian) ≡  1⁄6 fl oz (imp). Canadian teaspoon is volume unit equivalent with one sixth of imperial fluid ounce ≡ 4.73551041(6)e-6 m³.

[Source](http://conversion.org/volume/teaspoon-canadian/)

##### Units:

- ```tsp```

##### Summary:

```LaTeX
1 tsp = 1⁄6 fl oz (imp)
```

##### Code:

```ts
const Teaspoon_Canadian = scale("Teaspoon (Canadian)", "tsp", mul(unit(1, OunceFluidImperial), 0.16666666666666666));
```


Teaspoon (imperial)
---

> **Teaspoon (imperial)** is  _volume_ unit, symbol: [tsp (imp)]. Definition of 1 teaspoon (imperial) ≡  1⁄24 gi (imp). Imperial teaspoon is volume unit (widely used in cooking recipes) equivalent with 1/24 of imperial gill ≡ 5.91938802083e-6 m³.

[Source](http://conversion.org/volume/teaspoon-imperial/)

##### Units:

- ```[tsp (imp)]```

##### Summary:

```LaTeX
1 tsp (imp) = 1⁄24 gi (imp)
```

##### Code:

```ts
const TeaspoonImperial = scale("Teaspoon (imperial)", "tsp (imp)", mul(unit(1, GillImperial_Noggin), 0.041666666666666664));
```


Teaspoon (metric)
---

> **Teaspoon (metric)** is  _volume_ unit, symbol: [tsp (metric)]. Definition of 1 teaspoon (metric) ≡ 5 ml. Metric teaspoon is exactly 5 mL ≡ 5.0e-6 m³.

[Source](http://conversion.org/volume/teaspoon-metric/)

##### Units:

- ```[tsp (metric)]```

##### Summary:

```LaTeX
1 tsp (metric) = 5 ml
```

##### Code:

```ts
const TeaspoonMetric = scale("Teaspoon (metric)", "tsp (metric)", mul(unit(1, Millilitre), 5));
```


Teaspoon (US customary)
---

> **Teaspoon (US customary)** is  _volume_ unit, symbol: [tsp (US)]. Definition of 1 teaspoon (US customary) ≡  1⁄6 US fl oz. US teaspoon is volume unit with capacity of one sixth of US fluid ounce ≡ 4.92892159375e-6 m³.

[Source](http://conversion.org/volume/teaspoon-us-customary/)

##### Units:

- ```[tsp (US)]```

##### Summary:

```LaTeX
1 tsp (US) = 1⁄6 US fl oz
```

##### Code:

```ts
const Teaspoon_USCustomary = scale("Teaspoon (US customary)", "tsp (US)", mul(unit(1, OunceFluid_USCustomary), 0.16666666666666666));
```


Teaspoon (US food nutrition labeling)
---

> **Teaspoon (US food nutrition labeling)** is  _volume_ unit, symbol: [tsp (US food)]. Definition of 1 teaspoon (US food nutrition labeling) ≡ 5 mL. Teaspoon (US food nutrition labeling) have same capacity as metric teaspoon ≡ 5 mL ≡ 5e-6 m³.

[Source](http://conversion.org/volume/teaspoon-us-food-nutrition-labeling/)

##### Units:

- ```[tsp (US food)]```

##### Summary:

```LaTeX
1 tsp (US food) = 5 mL
```

##### Code:

```ts
const Teaspoon_USFoodNutritionLabeling = scale("Teaspoon (US food nutrition labeling)", "tsp (US food)", mul(unit(1, Millilitre), 5));
```


Timber foot
---

> **Timber foot** is  _volume_ unit. Definition of 1 timber foot ≡ 1 cu ft. Timperfoot is other name for cubic foot, cube with size of 1 ft ×  ft ×  ft ≡ 0.028316846592 m³.

[Source](http://conversion.org/volume/timber-foot/)

##### Units:

- ```[timber foot]```

##### Summary:

```LaTeX
1 timber foot = 1 cu ft
```

##### Code:

```ts
const TimberFoot = scale("Timber foot", "timber foot", mul(unit(1, CubicFoot), 1));
```


Ton (displacement)
---

> **Ton (displacement)** is  _volume_ unit, symbol: [DT]. Definition of 1 ton (displacement) ≡ 35 cu ft. The displacement, essentially the weight, of a ship is traditionally expressed in long tons. To simplify measurement it is determined by measuring the volume, rather than weight ≡ 35 × 0.3048³ ≡ 0.99108963072 m³.

[Source](http://conversion.org/volume/ton-displacement/)

##### Units:

- ```DT```

##### Summary:

```LaTeX
1 DT = 35 cu ft
```

##### Code:

```ts
const TonDisplacement = scale("Ton (displacement)", "DT", mul(unit(1, CubicFoot), 35));
```


Ton (freight)
---

> **Ton (freight)** is  _volume_ unit. Definition of 1 ton (freight) ≡ 40 cu ft. The freight ton represents the volume of a truck, train or other freight carrier ≡ 40 × 0.3048³ ≡ 1.13267386368 m³.

[Source](http://conversion.org/volume/ton-freight/)

##### Units:

- ```[ton (freight)]```

##### Summary:

```LaTeX
1 ton (freight) = 40 cu ft
```

##### Code:

```ts
const TonFreight = scale("Ton (freight)", "ton (freight)", mul(unit(1, CubicFoot), 40));
```


Ton (water)
---

> **Ton (water)** is  _volume_ unit. Definition of 1 ton (water) ≡ 28 bu (imp). The water ton is used chiefly in Great Britain, in statistics dealing with petroleum products, and is defined as 224 imperial gallons ≡ 1.01832416 m³.

[Source](http://conversion.org/volume/ton-water/)

##### Units:

- ```[ton (water)]```

##### Summary:

```LaTeX
1 ton (water) = 28 bu (imp)
```

##### Code:

```ts
const TonWater = scale("Ton (water)", "ton (water)", mul(unit(1, BushelImperial), 28));
```


Tun
---

> **Tun** is  _volume_ unit. Definition of 1 tun ≡ 252 gal (wine). One tun is volume equivalent to 252 gallons (wine) ≡ 0.953923769568 m³.

[Source](http://conversion.org/volume/tun/)

##### Units:

- ```tun```

##### Summary:

```LaTeX
1 tun = 252 gal (wine)
```

##### Code:

```ts
const Tun = scale("Tun", "tun", mul(unit(1, Gallon_USFluid_Wine), 252));
```


Wey (US)
---

> **Wey (US)** is  _volume_ unit. Definition of 1 wey (US) ≡ 40 bu (US lvl). As a measure of volume for dry commodities, it denoted roughly 40 US level bushels or 320 gallons ≡ 1.4095628066752 m³.

[Source](http://conversion.org/volume/wey-us/)

##### Units:

- ```[wey (US)]```

##### Summary:

```LaTeX
1 wey (US) = 40 bu (US lvl)
```

##### Code:

```ts
const Wey_US = scale("Wey (US)", "wey (US)", mul(unit(1, Bushel_USDryLevel), 40));
```
