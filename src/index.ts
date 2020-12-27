export {Scale, ScaleId, ScaleSystem, Scalar, Power} from './interfaces';

export {scale} from './scale';
export {unit} from './unit';

export * from './operators';

import {compile} from './calculator';
import ALL from "./scales";

const calculate = compile(ALL);

export {compile, calculate};
