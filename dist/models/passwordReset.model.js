"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var passwordResetSchema = new Schema({
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
var passwordReset = _mongoose["default"].model('passwordReset', passwordResetSchema);
var _default = exports["default"] = passwordReset;