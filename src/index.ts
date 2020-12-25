export {Scale, ScaleId, ScaleSystem, Scalar, Power} from './interfaces';

export {scale} from './scale';
export {unit} from './unit';

export * from './operators';

import SI from "./SI";
import IMPERIAL from "./IP";
import {compile} from './calculator';

const calculate = compile(
  SI,
  IMPERIAL,
);

export {SI, IMPERIAL, IMPERIAL as IP, compile, calculate};
