const {scale} = require('../src/scale');
const {unit} = require('../src/unit');
const {compile} = require('../src/calculator');
const {add, sub, mul, div, pow} = require('../src/operators');

const length = scale('length', true);
const time = scale('time', true);

describe('compile unit expression', () => {
  const base = scale('base', 'b', 1, length);
  const kilobase = scale('kilobase', 'kb', 1000, base);
  const tick = scale('tick', 't', 1, time);
  const hypertick = scale('hypertick', 'ht', 100, tick);
  const kbpht = scale('kilobase per hypertick', 'kbpht', div(unit(1, kilobase), unit(1, hypertick)));
  it('unit fn', async () => {
    const calc = compile(
      base,
      kilobase,
      tick,
      hypertick,
      kbpht
    );

    const test = calc(div(unit(2000, base), unit(40, kbpht)), hypertick, 2);

    expect(test).toBe(.05);
  })

  it('unit tpl', async () => {
    const calc = compile(
      base,
      kilobase,
      tick,
      hypertick,
      kbpht
    );

    const test = calc(div(unit`2000 b`, unit`.4 kb / t`), `ht`, 2);

    expect(test).toBe(.05);
  })

  it('scalar result', () => {
    const calc = compile(
      base,
      kilobase,
      tick,
      hypertick,
      kbpht
    );

    const test = calc(div(unit`2000 b`, unit`.4 kb`), '', 2);
    expect(test).toBe(5);
  })

  it('scale errors', () => {
    const calc = compile(
        base,
        kilobase,
        tick,
        hypertick,
        kbpht
    );
    const test = () => {
      calc(add(unit`2000 b`, unit`200 t`), '', 1);
      throw new TypeError("Can not add units of 'length' to 'time'")
    }
    expect(test).toThrow("Can not add units of 'length' to 'time'")
  })
  it('undefined scales', () => {
    const calc = compile(
        base,
        kilobase,
        tick,
        hypertick,
        kbpht
    );
    const test = () =>  {
      calc(add(unit`2000 b`, unit`22 CM`), '', 1)
      throw new TypeError('Undefined scale "CM"')
    }
    expect(test).toThrow('Undefined scale "CM"')

  })
  it('scales not match', () => {
    const calc = compile(
        base,
        kilobase,
        tick,
        hypertick,
        kbpht
    );
    const test = () => {
      calc(div(unit`2000 b`, unit`.4 kb / t`), `b`, 2);
      throw new TypeError("Calculation expected 'length' and resulting 'time' scales not match")
    }
    expect(test).toThrow("Calculation expected 'length' and resulting 'time' scales not match")

  })
});
