const {parse} = require('../dist/parser');

describe('parse', () => {
  it('scalar', () => {
    const {scalar, definition} = parse('9.8');
    expect(scalar).toBe(9.8);
    expect(definition).toStrictEqual({});
  });

  it('simple', () => {
    const {scalar, definition} = parse('9.8m');
    expect(scalar).toBe(9.8);
    expect(definition).toStrictEqual({'m': 1});
  });

  it('simple with spaces', () => {
    const {scalar, definition} = parse('9.8 sq ft');
    expect(scalar).toBe(9.8);
    expect(definition).toStrictEqual({'sq ft': 1});
  });

  it('negative', () => {
    const {scalar, definition} = parse('-9.8 m');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'m': 1});
  });

  it('area', () => {
    const {scalar, definition} = parse('-9.8 m²');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'m': 2});
  });

  it('area with spaces', () => {
    const {scalar, definition} = parse('-9.8 m ²');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'m': 2});
  });

  it('volume', () => {
    const {scalar, definition} = parse('-9.8 m³');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'m': 3});
  });

  it('negative one', () => {
    const {scalar, definition} = parse('-9.8 s⁻ⁱ ');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'s': -1});
  });

  it('negative two', () => {
    const {scalar, definition} = parse('-9.8 s ⁻²');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'s': -2});
  });

  it('negative three', () => {
    const {scalar, definition} = parse('-9.8 s⁻³ ');
    expect(scalar).toBe(-9.8);
    expect(definition).toStrictEqual({'s': -3});
  });

  it('exponent scalar', () => {
    const {scalar, definition} = parse('-9.8e-2 m');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'m': 1});
  });

  it('multiply *', () => {
    const {scalar, definition} = parse('-9.8e-2 N * m');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'N': 1, 'm': 1});
  });

  it('multiply .', () => {
    const {scalar, definition} = parse('-9.8e-2 N.m');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'N': 1, 'm': 1});
  });

  it('multiply ×', () => {
    const {scalar, definition} = parse('-9.8e-2 N × m');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'N': 1, 'm': 1});
  });

  it('multiply ·', () => {
    const {scalar, definition} = parse('-9.8e-2 N · m');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'N': 1, 'm': 1});
  });

  it('divide /', () => {
    const {scalar, definition} = parse('-9.8e-2 m / s');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'m': 1, 's': -1});
  });

  it('divide / multi', () => {
    const {scalar, definition} = parse('-9.8e-2 m / s.s');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'m': 1, 's': -2});
  });

  it('exponent', () => {
    const {scalar, definition} = parse('-9.8e-2 m^1 . s^-2');
    expect(scalar).toBe(-0.098);
    expect(definition).toStrictEqual({'m': 1, 's': -2});
  });
});

describe('G constant', () => {
  const scalar = 6.6743e-11;
  const definition = {'m': 3, 'kg': -1, 's': -2};

  it('v1', () => {
    const G = parse(`66.743e-12 m.m.m / kg · s.s`);
    expect(G.scalar).toBe(scalar);
    expect(G.definition).toStrictEqual(definition);
  })
  it('v2', () => {
    const G = parse(`6.6743e-11 m³ × kg⁻ⁱ × s⁻²`);
    expect(G.scalar).toBe(scalar);
    expect(G.definition).toStrictEqual(definition);
  })
  it('v3', () => {
    const G = parse(`.66743e-10 m ^ 3 * kg ^ -1 * s ^ -2 `);
    expect(G.scalar).toBe(scalar);
    expect(G.definition).toStrictEqual(definition);
  })
});

describe('invalid syntax', () => {
  it('unexpected /', () => {
    try {
      parse('6.6743e-11 m ^ 3 / kg / s ^ 2');
      fail('expected to throw');
    } catch (e) {
      expect(e.message).toBe('ParseError @22: expected end of definition definition')
    }
  })
})

describe('non latin scale names', () => {
  it('ohm', () => {
    const {scalar, definition} = parse(`1 Ω`);
    expect(scalar).toBe(1);
    expect(definition).toStrictEqual({'Ω': 1});
  })

  it('delta degree Fahrenheit', () => {
    const {scalar, definition} = parse(`1 Δ°F`);
    expect(scalar).toBe(1);
    expect(definition).toStrictEqual({'Δ°F': 1});
  })
})
