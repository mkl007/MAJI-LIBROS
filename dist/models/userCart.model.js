"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoopingCartSchema = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var userCartSchema = new Schema({
  userId: {
    type: String
  },
  bookId: {
    type: String,
    required: true
  },
  availabilityStatus: {
    type: String
  }
}, {
  timestamps: true
});
var ShoopingCartSchema = exports.ShoopingCartSchema = _mongoose["default"].model('ShoopingCartSchema', userCartSchema);