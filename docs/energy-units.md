Units of energy
===

Electronvolt
---

> **Electronvolt** is the amount of kinetic energy gained by a single electron accelerating from rest through an electric potential difference of one volt in vacuum. When used as a unit of energy, the numerical value of 1 eV in joules (symbol J) is equivalent to the numerical value of the charge of an electron in coulombs (symbol C). Under the 2019 redefinition of the SI base units, this sets 1 eV equal to the exact value 1.602176634×10−19 J.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```eV```
- ```electron-volt```
- ```[electron volt]```

##### Summary:

```LaTeX
1 eV = 1.602176634×10−19 J
```

##### Code:

```ts
const electronVolt = scale('Electronvolt', 'eV', 'electron-volt', 'electron volt', 1.602176634e-19, joule);
```


Gigaelectronvolt
---

> **Gigaelectronvolt** is 1000 MeV.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```GeV```

##### Summary:

```LaTeX
1 GeV = 1000 MeV
```

##### Code:

```ts
const gigaElectronVolt = scale('Gigaelectronvolt', 'GeV', 1000, megaElectronVolt);
```


Kiloelectronvolt
---

> **Kiloelectronvolt** is 1000 eV.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```keV```

##### Summary:

```LaTeX
1 keV = 1000 eV
```

##### Code:

```ts
const kiloElectronVolt = scale('Kiloelectronvolt', 'keV', 1000, electronVolt);
```


Megaelectronvolt
---

> **Megaelectronvolt** is 1000 keV.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```MeV```

##### Summary:

```LaTeX
1 MeV = 1000 keV
```

##### Code:

```ts
const megaElectronVolt = scale('Megaelectronvolt', 'MeV', 1000, kiloElectronVolt);
```


Millielectronvolt
---

> **Millielectronvolt** is 1/1000 eV.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```meV```

##### Summary:

```LaTeX
1 meV = 0.001 eV
```

##### Code:

```ts
const milliElectronVolt = scale('Millielectronvolt', 'meV', 1/1000, electronVolt);
```


Petaelectronvolt
---

> **Petaelectronvolt** is 1000 TeV.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```PeV```

##### Summary:

```LaTeX
1 PeV = 1000 TeV
```

##### Code:

```ts
const petaElectronVolt = scale('Petaelectronvolt', 'PeV', 1000, teraElectronVolt);
```


Teraelectronvolt
---

> **Teraelectronvolt** is 1000 GeV.

[Source](https://en.wikipedia.org/wiki/Electronvolt)

##### Units:

- ```TeV```

##### Summary:

```LaTeX
1 TeV = 1000 MeV
```

##### Code:

```ts
const teraElectronVolt = scale('Teraelectronvolt', 'TeV', 1000, gigaElectronVolt);
```
