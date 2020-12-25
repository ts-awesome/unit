const {scale} = require('../dist/scale');
const {unit} = require('../dist/unit');
const {compile} = require('../dist/compiler');
const {add, sub, mul, div, pow} = require('../dist/operators');

const ephimeral = 'ephimeral';

describe('compile unit expression', () => {
  const base = scale('base', 1, ephimeral);
  it('unit', async () => {
    const expr = unit(.1, base);
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(0.1);
    expect(test.from(1)).toBe(10);
  });
});

describe('compile add expression', () => {
  const base = scale('base', 1, ephimeral);
  it('add', async () => {
    const expr = add(unit(.1, base), unit(10, base));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(10.1);
    expect(test.from(10.1)).toBe(1);
  });

  it('add 2', async () => {
    const expr = add(unit(.1, base), unit(10, ephimeral));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(10.1);
    expect(test.from(10.1)).toBe(1);
  });

  it('incompatible scales', async () => {
    const expr = add(unit(.1, base), unit(10, 'fake'));
    try {
      compile(expr);
      fail('Expected error');
    } catch (e) {
      expect(e.message).toBe(`Can not add units of 'ephimeral' to 'fake'`);
    }
  });
})

describe('compile sub expression', () => {
  const base = scale('base', 1, ephimeral);
  it('sub', async () => {
    const expr = sub(unit(.1, base), unit(10, base));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(-9.9);
    expect(test.from(-9.9)).toBe(1);
  });

  it('sub 2', async () => {
    const expr = sub(unit(.1, base), unit(10, ephimeral));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(-9.9);
    expect(test.from(-9.9)).toBe(1);
  });

  it('incompatible scales', async () => {
    const expr = sub(unit(.1, base), unit(10, 'fake'));
    try {
      compile(expr);
      fail('Expected error');
    } catch (e) {
      expect(e.message).toBe(`Can not sub units of 'ephimeral' to 'fake'`);
    }
  });
})

describe('compile mul expression', () => {
  const time = 'time';
  const base = scale('base', 1, ephimeral);
  const other = scale('other', 1, time);
  it('mul', async () => {
    const expr = mul(unit(5, base), unit(2, ephimeral));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 2});
    expect(test.to(1)).toBe(10);
    expect(test.from(10)).toBe(1);
  });

  it('mul other', async () => {
    const expr = mul(unit(5, base), unit(2, other));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1, [time]: 1});
    expect(test.to(1)).toBe(10);
    expect(test.from(10)).toBe(1);
  });

  it('mul scalar', async () => {
    const expr = mul(unit(.1, base), 2);
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(0.2);
    expect(test.from(0.2)).toBe(1);
  });
})


describe('compile div expression', () => {
  const time = 'time';
  const base = scale('base', 1, ephimeral);
  const other = scale('other', 1, time);
  it('div', async () => {
    const expr = div(unit(20, base), unit(2, ephimeral));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({});
    expect(test.to(1)).toBe(10);
    expect(test.from(10)).toBe(1);
  });

  it('div other', async () => {
    const expr = div(unit(20, base), unit(2, other));
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1, [time]: -1});
    expect(test.to(1)).toBe(10);
    expect(test.from(10)).toBe(1);
  });

  it('div scalar', async () => {
    const expr = div(unit(20, base), 2);
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 1});
    expect(test.to(1)).toBe(10);
    expect(test.from(10)).toBe(1);
  });
})


describe('compile pow expression', () => {
  const base = scale('base', 1, ephimeral);
  it('pow 2', async () => {
    const expr = pow(unit(2, base), 2);
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 2});
    expect(test.to(1)).toBe(4);
    expect(test.from(4)).toBe(1);
  });
  it('pow 3', async () => {
    const expr = pow(unit(2, base), 3);
    const test = compile(expr);

    expect(test.scale).toStrictEqual({[ephimeral]: 3});
    expect(test.to(1)).toBe(8);
    expect(test.from(8)).toBe(1);
  });
});
