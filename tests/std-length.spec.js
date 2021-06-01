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
    try {
      calculate(unit`fake 123`, `fake`, 1);
      fail("Undefined scale \"fake 123\".")
    } catch (e) {
      expect(e.message).toBe("Undefined scale \"fake 123\".");
    }
  })
  it('test error scales', () => {
    try {
      calculate(unit(false), 1, 0);
      fail('Unsupported params [false]')
    } catch (e) {
      expect(e.message).toBe('Unsupported params [false]');
    }
  })
})
