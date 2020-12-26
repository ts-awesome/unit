import TROY_MASS from "./troy/mass";

export {Scale, ScaleId, ScaleSystem, Scalar, Power} from './interfaces';

export {scale} from './scale';
export {unit} from './unit';

export * from './operators';

import SI from "./SI";
import IMPERIAL from "./IP";
import {compile} from './calculator';
import US_MASS from "./US/mass";
import US_VOLUME from "./US/volume";

const calculate = compile(
  SI,
  IMPERIAL,
  TROY_MASS,
  US_MASS,
  US_VOLUME,
);

export {SI, IMPERIAL, IMPERIAL as IP, compile, calculate};
