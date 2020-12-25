"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const {add, sub, mul, div, pow} = require('./operators');

const SupportedOperations = {
  add(x) { return add(this, x) },
  sub(x) { return sub(this, x) },
  mul(x) { return mul(this, x) },
  div(x) { return div(this, x) },
  pow(x) { return pow(this, x) },
}

function Operandable(operator, operands) {
  this.operator = operator;
  this.operands = operands;
}
Operandable.prototype = SupportedOperations;

function UnitWrapper(scalar, scale) {
  this.scalar = scalar;
  this.scale = scale;
}
UnitWrapper.prototype = SupportedOperations;


exports.SupportedOperations = SupportedOperations;
exports.UnitWrapper = UnitWrapper;
exports.Operandable = Operandable;
