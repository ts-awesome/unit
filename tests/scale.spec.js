const {scale} = require('../src/scale');
const {unit} = require('../src/unit');

describe('definition names', () => {
  it('named', async () => {
    const test = scale('test', true);
    expect(test.name).toBe('test');
    expect(test.aliases).toStrictEqual(['test']);
  });

  it('short', async () => {
    const test = scale('test', 'sh', true);
    expect(test.name).toBe('test');
    expect(test.aliases).toStrictEqual(['sh']);
  });

  it('alt', async () => {
    const test = scale('test', 'sh', 'alt', true);
    expect(test.name).toBe('test');
    expect(test.aliases).toStrictEqual(['sh', 'alt']);
  });

});

describe('definition based on fundamental or definition', () => {
  const ephimeral = scale('ephimeral', true);

  it('named based on fundamental', async () => {
    const test = scale('test', .1, ephimeral);

    expect(test.definition).toStrictEqual({'ephimeral': 1});

    expect(test.to(10)).toBe(1);
    expect(test.from(10)).toBe(100);
  });

  it('named based on base definition', async () => {
    const base = scale('test', .1, ephimeral);
    const test = scale('test', .001, base);

    expect(test.definition).toStrictEqual({'ephimeral': 1});

    expect(test.to(10)).toBe(.001);
    expect(test.from(10)).toBe(100000);
  });

  it('named based on derived definition', async () => {
    const yard = scale('yard', 0.9144, ephimeral);
    const foot = scale('foot', 1/3, yard);
    const test = scale('test', 1/12, foot);

    expect(test.definition).toStrictEqual({'ephimeral': 1});

    expect(test.to(72)).toBe(0.9144 * 2);
    expect(test.from(0.9144)).toBe(36);
  });
});

describe('definition based on convert', () => {
  const kelvin = scale('kelvin', true);
  it('shifted based on kelvin', async () => {
    const test = scale('degree Celsius', {
      scale: kelvin,
      to: x => x + 273.15,
      from: x => x - 273.15,
    });

    expect(test.definition).toStrictEqual({'kelvin': 1});

    expect(test.to(-273.15)).toBe(0);
    expect(test.from(1)).toBe(-273.15 + 1);
  });

  it('twisted based on kelvin', async () => {
    const test = scale('degree Fahrenheit', {
      scale: kelvin,
      to: x => (x - 32) * 5 / 9 + 273.15,
      from: x => (x - 273.15) * 9 / 5 + 32,
    });

    expect(test.definition).toStrictEqual({'kelvin': 1});

    expect(test.to(100).toFixed(3)).toBe(310.928.toFixed(3));
    expect(test.from(500).toFixed(3)).toBe(440.33.toFixed(3));
  });

});

describe('definition based on unit', () => {
  const base = scale('base', true);

  it('scalar unit', async () => {
    const test = scale('test', unit(.1, base));

    expect(test.definition).toStrictEqual({'base': 1});
    expect(test.to(1)).toBe(0.1);
    expect(test.from(1)).toBe(10);
  })
})

describe('errors in scale', () => {
  it('should be non-zero', () => {
    try {
      scale('test', 0, 0, 0);
      fail('Scale scalar should be non-zero')
    } catch (e) {
      expect(e.message).toBe('Scale scalar should be non-zero');
    }
  })
  it('expr should be defined', () => {
    try {
      scale('1', '1', '1', '1');
      fail('Param expr expected, received undefined')
    } catch (e) {
      expect(e.message).toBe('Param expr expected, received undefined');
    }
  })
})
