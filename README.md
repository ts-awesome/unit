@ts-awesome/unit
===

Library provides simple math for measuring units


### Units

* [fundamentals](./docs/fundamentals-units.md)
* [SI](./docs/SI-units.md)
* [Length](./docs/length-units.md)
* [Area](./docs/area-units.md)
* [Volume](./docs/volume-units.md)
* [Mass](./docs/mass-units.md)
* [Time](./docs/time-units.md)
* [Temperature](./docs/temperature-units.md)

### Example

```TypeScript
import {add, div, calculate, unit} from '@ts-awesome/unit';

console.log(calculate(div(add(unit`10 km`, unit`3 mi`), unit`10 ft / m`), `m / s`, 5)); // calculate speed in metre per second

console.log(calculate(unit`104 °F`, `°C`, 1)); // convert to degree Celcius
```
