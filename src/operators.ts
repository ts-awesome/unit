import {Unit} from './interfaces';
import {Operandable} from "./operations";

export function add<T extends Unit>(...additions: T[]): T {
  return new Operandable('+', additions as any) as any;
}

export function sub<T extends Unit>(a: T, ...subtractions: T[]): T {
  return new Operandable('-', [a, ...subtractions] as any) as any;
}

export function mul<T extends Unit>(a: T, ...multipliers: (T|number)[]): T {
  return new Operandable('*', [a, ...multipliers] as any) as any;
}

export function div<T extends Unit>(a: T, ...dividers: (T|number)[]): T {
  return new Operandable('/', [a, ...dividers] as any) as any;
}

export function pow<T extends Unit>(a: T, power: number): T {
  return new Operandable('^', [a, power] as any) as any;
}
