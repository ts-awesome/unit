Units of SI
===

radian
---

> 

[Source](null) 

##### Symbols:
- ```[rad]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const radian = scale('radian', 'rad', mul(unit(1, metre), unit(1, metre).pow(-1))); // m / m
```




steradian
---

> 

[Source](null) 

##### Symbols:
- ```[sr]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const steradian = scale('steradian', 'sr', mul(unit(1, metre).pow(1), unit(1, metre).pow(-2))); // m² / m²
```




hertz
---

> 

[Source](null) 

##### Symbols:
- ```[Hz]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const hertz = scale('hertz', 'Hz', unit(1, second).pow(-2)); // 1 / s²
```




newton
---

> 

[Source](null) 

##### Symbols:
- ```[N]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const newton = scale('newton', 'N', mul(unit(1, metre), unit(1, kilogram), unit(1, second).pow(-2))); // m × kg / s²
```




pascal
---

> 

[Source](null) 

##### Symbols:
- ```[Pa]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const pascal = scale('pascal', 'Pa', mul(unit(1, newton), unit(1, metre).pow(-2))); // N / m²
```




joule
---

> 

[Source](null) 

##### Symbols:
- ```[J]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const joule = scale('joule', 'J', mul(unit(1, newton), unit(1, metre))); // N × m
```




watt
---

> 

[Source](null) 

##### Symbols:
- ```[W]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const watt = scale('watt', 'W', mul(unit(1, joule), unit(1, second).pow(-1))); // J / s²
```




coulomb
---

> 

[Source](null) 

##### Symbols:
- ```[C]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const coulomb = scale('coulomb', 'C', mul(unit(1, ampere), unit(1, second))); // A × s
```




volt
---

> 

[Source](null) 

##### Symbols:
- ```[V]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const volt = scale('volt', 'V', mul(unit(1, watt), unit(1, ampere).pow(-1))); // W × A
```




farad
---

> 

[Source](null) 

##### Symbols:
- ```[F]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const farad = scale('farad', 'F', mul(unit(1, coulomb), unit(1, volt).pow(-1))); // C / V
```




ohm
---

> 

[Source](null) 

##### Symbols:
- ```[Ω]```
- ```[ohm]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const ohm = scale('ohm', 'Ω', 'ohm', mul(unit(1, volt), unit(1, ampere).pow(-1))); // V / A
```




siemens
---

> 

[Source](null) 

##### Symbols:
- ```[S]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const siemens = scale('siemens', 'S', mul(unit(1, ampere), unit(1, volt).pow(-1))); // A / V
```




weber
---

> 

[Source](null) 

##### Symbols:
- ```[Wb]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const weber = scale('weber', 'Wb', mul(unit(1, volt), unit(1, second))); // V × s
```




tesla
---

> 

[Source](null) 

##### Symbols:
- ```[T]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const tesla = scale('tesla', 'T', mul(unit(1, weber), unit(1, metre).pow(-2))); // Wb / m²
```




henry
---

> 

[Source](null) 

##### Symbols:
- ```[H]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const henry = scale('henry', 'H', mul(unit(1, weber), unit(1, ampere).pow(-1))); // Wb / A
```




lumen
---

> 

[Source](null) 

##### Symbols:
- ```[lm]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const lumen = scale('lumen', 'lm', mul(unit(1, candela), unit(1, steradian))); // C × sr
```




lux
---

> 

[Source](null) 

##### Symbols:
- ```[lx]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const lux = scale('lux', 'lx', mul(unit(1, lumen), unit(1, metre).pow(-2))); // lm / m²
```




becquerel
---

> 

[Source](null) 

##### Symbols:
- ```[Bq]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const becquerel = scale('becquerel', 'Bq', unit(1, second).pow(-1)); // 1 / s
```




gray
---

> 

[Source](null) 

##### Symbols:
- ```[Gy]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const gray = scale('gray', 'Gy', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
```




sievert
---

> 

[Source](null) 

##### Symbols:
- ```[Sv]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const sievert = scale('sievert', 'Sv', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
```




katal
---

> 

[Source](null) 

##### Symbols:
- ```[kat]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const katal = scale('katal', 'kat', mul(unit(1, second).pow(-1), unit(1, mole))); // mol / s²
```




degree
---

> 

[Source](null) 

##### Symbols:
- ```[deg]```
- ```[°]```

##### Definition:
```LaTex

```

##### Code:
```TypeScript
export const degree = scale('degree', 'deg', '°', Math.PI / 180, radian);
```


