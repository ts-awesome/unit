Units of temperature
===

degree Celsius
---

##### Units:

- ```[°C]```

##### Code:

```ts
const degreeCelsius = scale('degree Celsius', '°C', { /* definition */ });
```


degree Fahrenheit
---

##### Units:

- ```[°F]```

##### Code:

```ts
const degreeFahrenheit = scale('degree Fahrenheit', '°F', { /* definition */ });
```


delta degree Celsius
---

##### Units:

- ```[Δ°C]```

- ```[d°C]```

##### Code:

```ts
const deltaDegreeCelsius = scale('delta degree Celsius', 'Δ°C','d°C', 1, kelvin);
```


delta degree Fahrenheit
---

##### Units:

- ```[Δ°F]```

- ```[d°F]```

##### Code:

```ts
const deltaDegreeFahrenheit = scale('delta degree Fahrenheit', 'Δ°F', 'd°F', 5/9, kelvin);
```
