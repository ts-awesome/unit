const { degreeCelsius } =require('../src/scales/temperature');

const {calculate, unit, add} = require('../src');

describe('temperature', () => {
  it('°C -> K', () => {
    const result = calculate(unit(32, degreeCelsius), 'K', 2);
    expect(result.toFixed(3)).toBe(305.15.toFixed(3));
  })
  it('°C -> K unresolved', () => {
    const result = calculate(unit(32, `°C`), 'K', 2);
    expect(result.toFixed(3)).toBe((305.15).toFixed(3));
  })
  it('°C -> K parser', () => {
    const result = calculate(unit`32 °C`, 'K', 2);
    expect(result.toFixed(3)).toBe((305.15).toFixed(3));
  })
  it('°C <- K', () => {
    const result = calculate(unit`100 K`, '°C', 2);
    expect(result.toFixed(3)).toBe((-173.15).toFixed(3));
  })

  it('°F -> K', () => {
    const result = calculate(unit`32 °F`, 'K', 2);
    expect(result.toFixed(3)).toBe((273.15).toFixed(3));
  })
  it('°F <- K', () => {
    const result = calculate(unit`316.85 K`, '°F', 2);
    expect(result.toFixed(3)).toBe((110.66).toFixed(3));
  })
  it('°C -> °F', () => {
    const result = calculate(unit`0 °C`, '°F', 2);
    expect(result).toBe(32);
  })
  it('°C <- °F', () => {
    const result = calculate(unit`104 °F`, '°C', 2);
    expect(result).toBe(40);
  })

  it('Δ°F + Δ°C -> K', () => {
    const result = calculate(add(unit`10 Δ°C`, unit`90 Δ°F`), 'K', 2);
    expect(result.toFixed(3)).toBe(60.0.toFixed(3));
  })

  it('°F + Δ°F -> °C', () => {
    const result = calculate(add(unit`90 °F`, unit`14 Δ°F`), '°C', 2);
    expect(result.toFixed(3)).toBe(40.0.toFixed(3));
  })
})
