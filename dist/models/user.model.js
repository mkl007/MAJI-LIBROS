"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var realSchema = _mongoose["default"].Schema;
var userSchema = new realSchema({
  fullname: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    sparse: true // Allows the field to be unique, but also to have multiple null values
  },
  password: {
    type: String
  },
  verified: {
    type: Boolean,
    "default": false
  },
  accountID: {
    type: String,
    unique: true,
    sparse: true
  },
  username: {
    type: String
  },
  displayName: {
    type: String
  },
  provider: {
    type: String
  },
  userAvatar: {
    type: String
  },
  role: {
    type: String
  }
}, {
  timestamps: true
}); // Add timestamps to track creation and update times

var User = _mongoose["default"].model('User', userSchema);
var _default = exports["default"] = User;