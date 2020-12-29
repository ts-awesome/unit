Units of SI
===

radian
---

##### Units:

- ```rad```

##### Code:

```ts
const radian = scale('radian', 'rad', mul(unit(1, metre), unit(1, metre).pow(-1))); // m / m
```


steradian
---

##### Units:

- ```sr```

##### Code:

```ts
const steradian = scale('steradian', 'sr', mul(unit(1, metre).pow(1), unit(1, metre).pow(-2))); // m² / m²
```


hertz
---

##### Units:

- ```Hz```

##### Code:

```ts
const hertz = scale('hertz', 'Hz', unit(1, second).pow(-2)); // 1 / s²
```


newton
---

##### Units:

- ```N```

##### Code:

```ts
const newton = scale('newton', 'N', mul(unit(1, metre), unit(1, kilogram), unit(1, second).pow(-2))); // m × kg / s²
```


pascal
---

##### Units:

- ```Pa```

##### Code:

```ts
const pascal = scale('pascal', 'Pa', mul(unit(1, newton), unit(1, metre).pow(-2))); // N / m²
```


joule
---

##### Units:

- ```J```

##### Code:

```ts
const joule = scale('joule', 'J', mul(unit(1, newton), unit(1, metre))); // N × m
```


watt
---

##### Units:

- ```W```

##### Code:

```ts
const watt = scale('watt', 'W', mul(unit(1, joule), unit(1, second).pow(-1))); // J / s²
```


coulomb
---

##### Units:

- ```C```

##### Code:

```ts
const coulomb = scale('coulomb', 'C', mul(unit(1, ampere), unit(1, second))); // A × s
```


volt
---

##### Units:

- ```V```

##### Code:

```ts
const volt = scale('volt', 'V', mul(unit(1, watt), unit(1, ampere).pow(-1))); // W × A
```


farad
---

##### Units:

- ```F```

##### Code:

```ts
const farad = scale('farad', 'F', mul(unit(1, coulomb), unit(1, volt).pow(-1))); // C / V
```


ohm
---

##### Units:

- ```Ω```
- ```ohm```

##### Code:

```ts
const ohm = scale('ohm', 'Ω', 'ohm', mul(unit(1, volt), unit(1, ampere).pow(-1))); // V / A
```


siemens
---

##### Units:

- ```S```

##### Code:

```ts
const siemens = scale('siemens', 'S', mul(unit(1, ampere), unit(1, volt).pow(-1))); // A / V
```


weber
---

##### Units:

- ```Wb```

##### Code:

```ts
const weber = scale('weber', 'Wb', mul(unit(1, volt), unit(1, second))); // V × s
```


tesla
---

##### Units:

- ```T```

##### Code:

```ts
const tesla = scale('tesla', 'T', mul(unit(1, weber), unit(1, metre).pow(-2))); // Wb / m²
```


henry
---

##### Units:

- ```H```

##### Code:

```ts
const henry = scale('henry', 'H', mul(unit(1, weber), unit(1, ampere).pow(-1))); // Wb / A
```


lumen
---

##### Units:

- ```lm```

##### Code:

```ts
const lumen = scale('lumen', 'lm', mul(unit(1, candela), unit(1, steradian))); // C × sr
```


lux
---

##### Units:

- ```lx```

##### Code:

```ts
const lux = scale('lux', 'lx', mul(unit(1, lumen), unit(1, metre).pow(-2))); // lm / m²
```


becquerel
---

##### Units:

- ```Bq```

##### Code:

```ts
const becquerel = scale('becquerel', 'Bq', unit(1, second).pow(-1)); // 1 / s
```


gray
---

##### Units:

- ```Gy```

##### Code:

```ts
const gray = scale('gray', 'Gy', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
```


sievert
---

##### Units:

- ```Sv```

##### Code:

```ts
const sievert = scale('sievert', 'Sv', mul(unit(1, joule), unit(1, kilogram).pow(-1))); // J / kg
```


katal
---

##### Units:

- ```kat```

##### Code:

```ts
const katal = scale('katal', 'kat', mul(unit(1, second).pow(-1), unit(1, mole))); // mol / s²
```


degree
---

##### Units:

- ```deg```
- ```°```

##### Code:

```ts
const degree = scale('degree', 'deg', '°', Math.PI / 180, radian);
```
