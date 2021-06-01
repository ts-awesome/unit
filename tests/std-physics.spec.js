const {calculate, unit} = require('../dist');

describe('physics', () => {
  it('Ohm', () => {
    expect(calculate(unit`10 ohm`, 'Ω', 2)).toBe(10);
    expect(calculate(unit`104 Ω`, 'ohm', 2)).toBe(104);
    expect(calculate(unit`20 V/A`, 'Ω', 2)).toBe(20);
  })
})
