const {scale} = require('../dist/scale');
const {unit} = require('../dist/unit');
const {compile} = require('../dist/calculator');
const {add, sub, mul, div, pow} = require('../dist/operators');

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
});
