Units of fundamentals
===

second
---

> **Second**  is the base unit of time in the SI, commonly understood and historically defined as 1⁄86400 of a day

[Source](https://en.wikipedia.org/wiki/Second) 

##### Symbols:
- ```[s]```

##### Definition:
```LaTex
1 s = The duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.
```

##### Code:
```TypeScript
export const second = scale('second', 's', true);
```




metre
---

> **Metre** is the base unit of mass in SI. The metre is defined as the length of the path travelled by light in a vacuum in 1 / 299 792 458 of a second.

[Source](https://en.wikipedia.org/wiki/Metre) 

##### Symbols:
- ```[m]```

##### Definition:
```LaTex
1 m = The distance travelled by light in vacuum in 1⁄299792458 second.
```

##### Code:
```TypeScript
export const metre = scale('metre', 'm', true);
```




kilogram
---

> **Kilogram** (also kilogramme) is the base unit of mass in SI. It is a widely used measure in science, engineering and commerce worldwide, and is often simply called a kilo in everyday speech.

[Source](https://en.wikipedia.org/wiki/Kilogram) 

##### Symbols:
- ```[kg]```

##### Definition:
```LaTex
1 kg = The kilogram is defined by setting the Planck constant h exactly to 6.62607015×10−34 kg⋅m²⁄s, given the definitions of the metre and the second.
```

##### Code:
```TypeScript
export const kilogram = scale('kilogram', 'kg', true);
```




ampere
---

> **Ampere** is the base unit of electric current in SI. The ampere is defined by taking the fixed numerical value of the elementary charge e to be 1.602 176 634 × 10−19 when expressed in the unit C, which is equal to A⋅s, where the second is defined in terms of ∆νCs, the unperturbed ground state hyperfine transition frequency of the caesium-133 atom.

[Source](https://en.wikipedia.org/wiki/Ampere) 

##### Symbols:
- ```[A]```

##### Definition:
```LaTex
1 A = The flow of exactly 1 / 1.602176634×10−19 times the elementary charge e per second.
```

##### Code:
```TypeScript
export const ampere = scale('ampere', 'A', true);
```




kelvin
---

> **Kelvin** is the base unit of temperature in SI. The kelvin is now defined by fixing the numerical value of the Boltzmann constant k to 1.380 649×10−23 J⋅K−1. This unit is equal to kg⋅m2⋅s−2⋅K−1, where the kilogram, metre and second are defined in terms of the Planck constant, the speed of light, and the duration of the caesium-133 ground-state hyperfine transition respectively.

[Source](https://en.wikipedia.org/wiki/Kelvin) 

##### Symbols:
- ```[K]```
- ```[K]```

##### Definition:
```LaTex
1 K = The kelvin is defined by setting the fixed numerical value of the Boltzmann constant k to 1.380649×10−23 J⋅K−1, (J = kg⋅m2⋅s−2), given the definition of the kilogram, the metre, and the second.
```

##### Code:
```TypeScript
export const kelvin = scale('kelvin', 'K', 'K', true);
```




mole
---

> **Mole** is the unit of measurement for amount of substance in SI. A mole of a substance or a mole of particles is defined as containing exactly 6.02214076×1023 particles, which may be atoms, molecules, ions, or electrons. In short, 1 mol contains 6.02214076×1023 of the specified particles.

[Source](https://en.wikipedia.org/wiki/Mole_(unit)) 

##### Symbols:
- ```[mol]```

##### Definition:
```LaTex
1 mol = The amount of substance of exactly 6.02214076×10^23 elementary entities. This number is the fixed numerical value of the Avogadro constant, when expressed in the unit 1⁄mol.
```

##### Code:
```TypeScript
export const mole = scale('mole', 'mol', true);
```




candela
---

> **Candela** is the base unit of luminous intensity in SI; that is, luminous power per unit solid angle emitted by a point light source in a particular direction. Luminous intensity is analogous to radiant intensity, but instead of simply adding up the contributions of every wavelength of light in the source's spectrum, the contribution of each wavelength is weighted by the standard luminosity function (a model of the sensitivity of the human eye to different wavelengths). A common wax candle emits light with a luminous intensity of roughly one candela. If emission in some directions is blocked by an opaque barrier, the emission would still be approximately one candela in the directions that are not obscured.

[Source](https://en.wikipedia.org/wiki/Candela) 

##### Symbols:
- ```[cd]```

##### Definition:
```LaTex
1 cd = The luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 5.4×1014 hertz and that has a radiant intensity in that direction of 1 / 683 W⁄sr.
```

##### Code:
```TypeScript
export const candela = scale('candela', 'cd', true);
```




g₀
---

> **Standard gravity**. The standard acceleration due to gravity (or standard acceleration of free fall), sometimes abbreviated as standard gravity, usually denoted by ɡ0 or ɡn, is the nominal gravitational acceleration of an object in a vacuum near the surface of the Earth. It is defined by standard as 9.80665 m/s2 (about 32.17405 ft/s2).

[Source](https://en.wikipedia.org/wiki/Standard_gravity) 

##### Symbols:
- ```[g0]```
- ```[g₀]```

##### Definition:
```LaTex
1 g₀ = 1 Standard gravity = 9.80665 m⁄s²
```

##### Code:
```TypeScript
export const g0 = scale('g₀', 'g0', 'g₀', mul(unit(1, metre), unit(1, second).pow(-2), 9.80665));
```




Speed of light
---

> **Speed of light**. The speed of light in vacuum, commonly denoted c, is a universal physical constant important in many areas of physics. Its exact value is defined as 299792458 metres per second (approximately 300000 km/s, or 186000 mi/s).

[Source](https://en.wikipedia.org/wiki/Speed_of_light) 

##### Symbols:
- ```[с0]```
- ```[с₀]```

##### Definition:
```LaTex
1 с = 1 Speed of light = 299792458 m⁄s
```

##### Code:
```TypeScript
export const SpeedOfLight = scale('Speed of light', 'с0', 'с₀', mul(unit(1, metre), unit(1, second).pow(-1), 299792458));
```


