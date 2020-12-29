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

  it ('0.9144 m', () => {
    const {scalar, definition} = parse('0.9144 m');
    expect(scalar.toFixed(6)).toBe((0.9144).toFixed(6));
    expect(definition).toStrictEqual({'m': 1});
  })

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
    const {scalar, definition} = parse('-9.8 s⁻¹ ');
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

  it('5280 foot (US Survey)', () => {
    const {scalar, definition} = parse('5280 foot (US Survey)');
    expect(scalar).toBe(5280);
    expect(definition).toStrictEqual({'foot (US Survey)': 1});
  })
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
    const G = parse(`6.6743e-11 m³ × kg⁻¹ × s⁻²`);
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
  it('unexpected number', () => {
    try {
      parse('6.6743e-11 m ^ 3 / 1 kg');
      fail('expected to throw');
    } catch (e) {
      expect(e.message).toBe('ParseError @19: unexpected scalar')
    }
  })
  it('unexpected sign', () => {
    try {
      parse('1/-3 kg');
      fail('expected to throw');
    } catch (e) {
      expect(e.message).toBe('ParseError @2: unexpected -');
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

  it('1 [with.dot]', () => {
    const {scalar, definition} = parse(`1 [with.dot]`);
    expect(scalar).toBe(1);
    expect(definition).toStrictEqual({'with.dot': 1});
  })
})

describe('scalar fractions', () => {
  it('16 1⁄2 ft', () => {
    const {scalar, definition} = parse(`16 1⁄2 ft`);
    expect(scalar.toFixed(3)).toBe(16.5.toFixed(3));
    expect(definition).toStrictEqual({'ft': 1});
  })
  it('16 1/2 ft', () => {
    const {scalar, definition} = parse(`16 1/2 ft`);
    expect(scalar.toFixed(3)).toBe(16.5.toFixed(3));
    expect(definition).toStrictEqual({'ft': 1});
  })

  it('1⁄14 in', () => {
    const {scalar, definition} = parse(`1⁄14 in`);
    expect(scalar.toFixed(3)).toBe((1 / 14).toFixed(3));
    expect(definition).toStrictEqual({'in': 1});
  })

  it('1/14 ft', () => {
    const {scalar, definition} = parse(`1/14 ft`);
    expect(scalar.toFixed(3)).toBe((1 / 14).toFixed(3));
    expect(definition).toStrictEqual({'ft': 1});
  })

  it('1/72.12 in', () => {
    const {scalar, definition} = parse(`1/72.12 in`);
    expect(scalar.toFixed(8)).toBe((1 / 72.12).toFixed(8));
    expect(definition).toStrictEqual({'in': 1});
  })

  it('π/4 sq in', () => {
    const {scalar, definition} = parse(`π/4 sq in`);
    expect(scalar.toFixed(8)).toBe((Math.PI / 4).toFixed(8));
    expect(definition).toStrictEqual({'sq in': 1});
  })

  it('PI/4 sq in', () => {
    const {scalar, definition} = parse(`PI/4 sq in`);
    expect(scalar.toFixed(8)).toBe((Math.PI / 4).toFixed(8));
    expect(definition).toStrictEqual({'sq in': 1});
  })
})

describe('square root scalar', () => {
  it('√ 1⁄10 m', () => {
    const {scalar, definition} = parse(`√ 1⁄10 m`);
    expect(scalar.toFixed(8)).toBe(Math.sqrt(.1).toFixed(8));
    expect(definition).toStrictEqual({'m': 1});
  })
})
