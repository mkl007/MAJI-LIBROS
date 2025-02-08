"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SchemaT = _mongoose["default"].Schema;
var tokenSchema = new SchemaT({
  userId: {
    type: String,
    ref: "user",
    required: true
  },
  token: {
    type: String,
    required: true
  },
  tempPassword: {
    type: String
  }
});
var Token = _mongoose["default"].model('token', tokenSchema);
var _default = exports["default"] = Token;