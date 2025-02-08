"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authFunction = void 0;
var _passport = _interopRequireDefault(require("passport"));
var _passportGoogleOauth = require("passport-google-oauth20");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config(); // This will load the variables from .env into process.env

var authFunction = exports.authFunction = function authFunction() {
  _passport["default"].use(new _passportGoogleOauth.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/v1/auth/google/callback"
    // passReqToCallback: true
  }, function (request, accessToken, refreshToken, profile, done) {
    done(null, profile);
    // done(null, accessToken);
  }));
  _passport["default"].serializeUser(function (user, done) {
    done(null, user);
  });
  _passport["default"].deserializeUser(function (user, done) {
    done(null, user);
  });
};