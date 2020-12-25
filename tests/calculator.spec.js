const {scale} = require('../dist/scale');
const {unit} = require('../dist/unit');
const {compile} = require('../dist/calculator');
const {add, sub, mul, div, pow} = require('../dist/operators');

const length = 'length';
const time = 'time';

describe('compile unit expression', () => {
  const base = scale('base', 'b', 1, length);
  const kilobase = scale('kilobase', 'kb', 1000, base);
  const tick = scale('tick', 't', 1, time);
  const hypertick = scale('hypertick', 'ht', 100, tick);
  const kph = scale('kilobase per hypertick', 'kbpht', div(unit(1, kilobase, unit(1, hypertick))));
  it('unit', async () => {
    const calc = compile(
      base,
      kilobase,
      tick,
      hypertick,
      kph
    );

    const test = calc(div(unit(2000, base), unit(40, kph)), tick, 2);

    expect(test).toBe(.05);
  })
});
