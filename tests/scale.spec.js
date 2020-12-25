const {scale} = require('../dist/scale');
const {unit} = require('../dist/unit');

const ephimeral = 'ephimeral';

describe('scale names', () => {
  it('named', async () => {
    const test = scale('test', .1, ephimeral);
    expect(test.name).toBe('test');
    expect(test.aliases).toStrictEqual([]);
  });

  it('short', async () => {
    const test = scale('test', 'sh', .1, ephimeral);
    expect(test.name).toBe('test');
    expect(test.aliases).toStrictEqual(['sh']);
  });

  it('alt', async () => {
    const test = scale('test', 'sh', 'alt', .1, ephimeral);
    expect(test.name).toBe('test');
    expect(test.aliases).toStrictEqual(['sh', 'alt']);
  });

});

describe('scale based on fundamental or scale', () => {
  it('named based on fundamental', async () => {
    const test = scale('test', .1, ephimeral);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(10)).toBe(1);
    expect(test.from(10)).toBe(100);
  });

  it('named based on base scale', async () => {
    const base = scale('test', .1, ephimeral);
    const test = scale('test', .001, base);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(10)).toBe(.001);
    expect(test.from(10)).toBe(100000);
  });

  it('named based on derived scale', async () => {
    const yard = scale('yard', 0.9144, ephimeral);
    const foot = scale('foot', 1/3, yard);
    const test = scale('test', 1/12, foot);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(72)).toBe(0.9144 * 2);
    expect(test.from(0.9144)).toBe(36);
  });
});

describe('scale based on convert', () => {
  const kelvin = scale('kelvin', 1, ephimeral);
  it('shifted based on kelvin', async () => {
    const test = scale('degree Celsius', {
      scale: kelvin,
      to: x => x + 273.15,
      from: x => x - 273.15,
    });

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(-273.15)).toBe(0);
    expect(test.from(1)).toBe(-273.15 + 1);
  });

  it('shifted based on ephimeral', async () => {
    const test = scale('degree Celsius', {
      scale: ephimeral,
      to: x => x + 273.15,
      from: x => x - 273.15,
    });

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(-273.15)).toBe(0);
    expect(test.from(1)).toBe(-273.15 + 1);
  });

  it('twisted based on kelvin', async () => {
    const test = scale('degree Fahrenheit', {
      scale: kelvin,
      to: x => (x + 459.67) * 5 / 9,
      from: x => x * 9 / 5 - 459.67,
    });

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(100).toFixed(3)).toBe(310.928.toFixed(3));
    expect(test.from(500).toFixed(3)).toBe(440.33.toFixed(3));
  });

  it('twisted based on ephimeral', async () => {
    const test = scale('degree Fahrenheit', {
      scale: ephimeral,
      to: x => (x + 459.67) * 5 / 9,
      from: x => x * 9 / 5 - 459.67,
    });

    expect(test.scale).toStrictEqual({[ephimeral]: 1});

    expect(test.to(100).toFixed(3)).toBe(310.928.toFixed(3));
    expect(test.from(500).toFixed(3)).toBe(440.33.toFixed(3));
  });
});

describe('scale based on unit', () => {
  const base = scale('base', 1, ephimeral);

  it('scalar unit', async () => {
    const test = scale('test', unit(.1, base));

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(0.1);
    expect(test.from(1)).toBe(10);
  })
})
