Units of time
===

Blink
---

> **Blink** is  _time_ unit. Definition of 1 blink ≈ 0.25 s. Human blink duration ranges from 0.1 to 0.4 seconds. Blink time is calculated as average of this range, and this value is a quarter of a second..

[Source](http://conversion.org/time/blink/)

##### Units:

- ```[blink]```

##### Summary:

```LaTeX
1 blink ≈ 0.25 s.
```

##### Code:

```ts
const blink = scale('Blink', 'blink', 1 / 4, second);
```


Century
---

> **Century** is  <a>time</a> unit, symbol: [c]. Definition of 1 century ≡ 100 years (Gregorian). = 365.2425 × 100 × 86400 seconds.

[Source](http://conversion.org/time/century/)

##### Units:

- ```[century]```

##### Summary:

```LaTeX
1 century ≡ 100 years (Gregorian). = 365.2425 × 100 × 86400 seconds
```

##### Code:

```ts
const century = scale('Century', 'century', 365.2425 * 100 * 86400, second);
```


Day
---

> **Day** is  _time_ unit, symbol: [d]. Definition of 1 day = 24 h = 1440 min. One day (solar day) is period of time from noon to noon = 24 hours. A solar day is the time it takes for the Earth to rotate about its axis so that the Sun appears in the same position in the sky. 24 [h] × 3600 [s] = 86.4 [ks] = 86400 [s].

[Source](http://conversion.org/time/day/)

##### Units:

- ```[day]```

##### Summary:

```LaTeX
1 day = 24 h = 1440 min
```

##### Code:

```ts
const day = scale('Day', 'day', 86400, second);
```


Decade
---

> **Decade** is  <a>time</a> unit, symbol: [dec]. Definition of 1 decade ≡ 10 years (Gregorian). = 365.2425 × 10 × 86400 seconds.

[Source](http://conversion.org/time/decade/)

##### Units:

- ```[decade]```

##### Summary:

```LaTeX
1 decade ≡ 10 years (Gregorian). = 365.2425 × 10 × 86400 seconds.
```

##### Code:

```ts
const decade = scale('Decade', 'decade', 365.2425 * 10 * 86400, second);
```


hour
---

##### Units:

- ```[h]```

##### Code:

```ts
const hour = scale('hour', 'h', 3600, second);
```


millisecond
---

##### Units:

- ```[ms]```

##### Code:

```ts
const millisecond = scale('millisecond', 'ms', 1 / 1000, second);
```


minute
---

##### Units:

- ```[min]```

##### Code:

```ts
const minute = scale('minute', 'min', 60, second);
```
