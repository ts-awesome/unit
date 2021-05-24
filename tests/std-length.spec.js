const {calculate, unit} = require('../src');

describe('metric', () => {
  it('m <-> dm', () => {
    expect(calculate(unit`1 m`, 'dm', 2)).toBe(10);
    expect(calculate(unit`100 dm`, 'm', 2)).toBe(10);
  })
  it('m <-> cm', () => {
    expect(calculate(unit`1 m`, 'cm', 2)).toBe(100);
    expect(calculate(unit`100 cm`, 'm', 2)).toBe(1);
  })
  it('m <-> mm', () => {
    expect(calculate(unit`1 m`, 'mm', 2)).toBe(1000);
    expect(calculate(unit`100 mm`, 'm', 2)).toBe(.1);
  })
  it('m <-> km', () => {
    expect(calculate(unit`100 m`, 'km', 2)).toBe(.1);
    expect(calculate(unit`.1 km`, 'm', 2)).toBe(100);
  })
  it('error', () => {
    const test = () => {
      calculate(unit`fake 123`, `fake`, 1);
      throw new TypeError("Undefined scale \"fake 123\".")
    }
    const test2 = () => {
      calculate(unit(false), 1, 0);
      throw new TypeError('Unsupported params [false]')
    }
    expect(test).toThrow("Undefined scale \"fake 123\".")
    expect(test2).toThrow('Unsupported params [false]')
  })
})
