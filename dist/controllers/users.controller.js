"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTokenRoute = exports.userLogin = exports.registerUser = exports.passwordResetHandler = exports.passwordReset = exports.logout = exports.handleAuthGoogleProvider = exports.handleAuthGithubProvider = exports.emailTokenConfimation = void 0;
var _crypto = require("crypto");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _userModel = _interopRequireDefault(require("../models/user.model.js"));
var _tokenModel = _interopRequireDefault(require("../models/token.model.js"));
var _emailUtils = require("../utils/email.utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var registerUser = exports.registerUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var verifyEmail, newUser, tokenBytes, tok, token, verificationLink, emailResult;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _userModel["default"].findOne({
            email: req.body.email
          });
        case 3:
          verifyEmail = _context.sent;
          if (!verifyEmail) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(409).json({
            message: "Email already exist. Do you mean to login?"
          }));
        case 6:
          _context.t0 = _userModel["default"];
          _context.t1 = req.body.fullname;
          _context.t2 = req.body.email;
          _context.next = 11;
          return _bcryptjs["default"].hash(req.body.password, 10);
        case 11:
          _context.t3 = _context.sent;
          _context.t4 = {
            fullname: _context.t1,
            email: _context.t2,
            password: _context.t3,
            role: 'user'
          };
          newUser = new _context.t0(_context.t4);
          tokenBytes = (0, _crypto.randomFillSync)(Buffer.alloc(16));
          tok = tokenBytes.toString("hex");
          token = new _tokenModel["default"]({
            userId: newUser._id,
            token: tok
          });
          verificationLink = "".concat(process.env.BACKEND_URI, "/confirm/").concat(token.token, "?redirectUrl=").concat(encodeURIComponent("".concat(process.env.FRONTEND_URI, "/signup")));
          _context.next = 20;
          return (0, _emailUtils.sendConfirmationEmail)(newUser, verificationLink);
        case 20:
          emailResult = _context.sent;
          if (!emailResult.success) {
            _context.next = 29;
            break;
          }
          _context.next = 24;
          return newUser.save();
        case 24:
          _context.next = 26;
          return token.save();
        case 26:
          return _context.abrupt("return", res.status(200).json({
            message: "Email successfully registered. Please check your mailbox to validate your account"
          }));
        case 29:
          return _context.abrupt("return", res.status(404).json({
            message: "Error sending confirmation email. Email no found, double check email address"
          }));
        case 30:
          _context.next = 35;
          break;
        case 32:
          _context.prev = 32;
          _context.t5 = _context["catch"](0);
          // console.log(error)
          res.status(500).json({
            message: "Internal Error. Please refresh the page and try again"
          });
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 32]]);
  }));
  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var emailTokenConfimation = exports.emailTokenConfimation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var token;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _tokenModel["default"].findOne({
            token: req.params.token
          });
        case 3:
          token = _context2.sent;
          _context2.next = 6;
          return _userModel["default"].updateOne({
            _id: token.userId
          }, {
            $set: {
              verified: true
            }
          });
        case 6:
          _context2.next = 8;
          return _tokenModel["default"].findByIdAndDelete(token._id);
        case 8:
          res.redirect("".concat(process.env.FRONTEND_URI, "/userverificationsuccess"));
          _context2.next = 14;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          res.status(502).json({
            message: 'Error while verifying or email already verified'
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function emailTokenConfimation(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var userLogin = exports.userLogin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, email, password, user, paswrdDeshash, token;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context3.next = 4;
          return _userModel["default"].findOne({
            email: email
          });
        case 4:
          user = _context3.sent;
          if (user) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'User no found with email provided, please review the email or register your email'
          }));
        case 9:
          if (!(user && user.verified)) {
            _context3.next = 19;
            break;
          }
          paswrdDeshash = _bcryptjs["default"].compareSync(password, user.password);
          if (paswrdDeshash) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", res.status(502).json({
            message: "Wrong password"
          }));
        case 13:
          token = _jsonwebtoken["default"].sign({
            id: user.id
          }, process.env.JWT_PASS, {
            expiresIn: '7d'
          });
          res.cookie('token', token, {
            httpOnly: false,
            sameSite: 'none',
            secure: true
          });
          console.log(user);
          res.json({
            message: 'Logged in',
            token: token
          });
          _context3.next = 20;
          break;
        case 19:
          res.status(400).json({
            message: "Email not verified. Please check your Mail box to verify your email or register your account"
          });
        case 20:
          _context3.next = 26;
          break;
        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(404).json({
            message: 'error',
            error: _context3.t0
          }));
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 22]]);
  }));
  return function userLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var logout = exports.logout = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          res.cookie('token', null, {
            expires: new Date(0)
          });
          return _context4.abrupt("return", res.status(200).json({
            message: 'Loggin out...'
          }));
        case 5:
          _context4.prev = 5;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "Internal Error"
          }));
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 5]]);
  }));
  return function logout(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var passwordReset = exports.passwordReset = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var verifyEmail, tokenBytes, tok, token, link, transporter, mailOptions;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _userModel["default"].findOne({
            email: req.body.email
          });
        case 3:
          verifyEmail = _context6.sent;
          if (verifyEmail) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'Email not registered. Would you like to register your account?'
          }));
        case 6:
          tokenBytes = (0, _crypto.randomFillSync)(Buffer.alloc(16));
          tok = tokenBytes.toString('hex');
          token = new _tokenModel["default"]({
            userId: verifyEmail._id,
            token: tok
          });
          link = "".concat(process.env.BACKEND_URI, "/password_reset/").concat(token.token);
          transporter = _nodemailer["default"].createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          });
          mailOptions = {
            from: process.env.EMAIL_USER,
            to: verifyEmail.email,
            subject: "MAJI BOOKS ",
            html: "<div><p><b>".concat(verifyEmail.fullname, "</b>, a password reset has been requested. \n             Click on the link below to reset your password\n             </p><a href=\"").concat(link, "\">Click to reset the password</a></div>")
          };
          transporter.sendMail(mailOptions, /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(error, info) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!error) {
                      _context5.next = 4;
                      break;
                    }
                    return _context5.abrupt("return", res.status(500).json({
                      status: "FAILED",
                      message: "Email operation failed"
                    }));
                  case 4:
                    _context5.next = 6;
                    return token.save();
                  case 6:
                    return _context5.abrupt("return", res.status(200).json({
                      message: "Password reset requested. Please check your email "
                    }));
                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          }());
          _context6.next = 18;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          // console.log('error while resetting the password! ', error)
          res.status(500).json({
            message: 'error while resetting the password!'
          });
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function passwordReset(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var passwordResetHandler = exports.passwordResetHandler = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, password, passwordConfimation, token, findUser, paswrdDeshash, passwordToSave;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body2 = req.body, password = _req$body2.password, passwordConfimation = _req$body2.passwordConfimation;
          _context7.next = 4;
          return _tokenModel["default"].findOne({
            token: req.params.token
          });
        case 4:
          token = _context7.sent;
          _context7.next = 7;
          return _userModel["default"].findOne({
            _id: token.userId
          });
        case 7:
          findUser = _context7.sent;
          if (findUser) {
            _context7.next = 10;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "user/email no exists"
          }));
        case 10:
          paswrdDeshash = _bcryptjs["default"].compareSync(password, findUser.password);
          if (!paswrdDeshash) {
            _context7.next = 13;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: 'This password has been used before. Try different password.'
          }));
        case 13:
          if (!(password !== passwordConfimation)) {
            _context7.next = 15;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: 'Password no match, please enter the same password'
          }));
        case 15:
          _context7.next = 17;
          return _bcryptjs["default"].hash(password, 10);
        case 17:
          passwordToSave = _context7.sent;
          _context7.next = 20;
          return _userModel["default"].updateOne({
            _id: token.userId
          }, {
            $set: {
              password: passwordToSave
            }
          });
        case 20:
          _context7.next = 22;
          return _tokenModel["default"].findByIdAndDelete(token._id);
        case 22:
          console.log('Password successfully reset');
          res.status(200).json({
            message: "Your password has been changed. Log into your account"
          });
          _context7.next = 30;
          break;
        case 26:
          _context7.prev = 26;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          res.status(500).json({
            message: 'Error while verifying',
            error: _context7.t0
          });
        case 30:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 26]]);
  }));
  return function passwordResetHandler(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var verifyTokenRoute = exports.verifyTokenRoute = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var token, decoded, userId, userInfo;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          token = req.cookies.token;
          decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_PASS);
          userId = decoded.id;
          _context8.next = 6;
          return _userModel["default"].findById(userId).select('-password');
        case 6:
          userInfo = _context8.sent;
          if (!userInfo) {
            _context8.next = 9;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            userInfo: userInfo
          }));
        case 9:
          return _context8.abrupt("return", res.status(404).json({
            message: 'No user found'
          }));
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          if (!(_context8.t0.name === 'TokenExpiredError')) {
            _context8.next = 18;
            break;
          }
          return _context8.abrupt("return", res.json({
            Message: 'Token for the verification expired. Please signup in the app!'
          }));
        case 18:
          if (!(_context8.t0.name === 'JsonWebTokenError')) {
            _context8.next = 20;
            break;
          }
          return _context8.abrupt("return", res.json({
            message: 'There is no token assigned. Please log in'
          }));
        case 20:
          console.log(_context8.t0);
          res.status(500).json({
            error: _context8.t0
          });
        case 22:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 12]]);
  }));
  return function verifyTokenRoute(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var handleAuthGoogleProvider = exports.handleAuthGoogleProvider = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var user, checkEmailUser, newUser, _token, token;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _userModel["default"].deleteOne({
            email: req.profile
          });
        case 3:
          user = req.user._json;
          _context9.next = 6;
          return _userModel["default"].findOne({
            email: user.email
          });
        case 6:
          checkEmailUser = _context9.sent;
          if (checkEmailUser) {
            _context9.next = 14;
            break;
          }
          newUser = new _userModel["default"]({
            accountID: user.sub,
            fullname: user.name,
            displayName: user.given_name,
            provider: 'google',
            userAvatar: user.picture,
            email: user.email,
            verified: true
          });
          _context9.next = 11;
          return newUser.save();
        case 11:
          _token = _jsonwebtoken["default"].sign({
            id: newUser.id
          }, process.env.JWT_PASS, {
            expiresIn: '7d'
          });
          res.cookie('token', _token, {
            httpOnly: false,
            sameSite: 'none',
            secure: true
          });

          // return res.json({ message: 'User successfully Signed in!', newUser })
          res.redirect("".concat(process.env.FRONTEND_URI, "/profile"));
        case 14:
          // if user exists in DB then, login the user 
          token = _jsonwebtoken["default"].sign({
            id: checkEmailUser._id
          }, process.env.JWT_PASS, {
            expiresIn: '7d'
          });
          res.cookie('token', token, {
            httpOnly: false,
            sameSite: 'none',
            secure: true
          });

          // return res.json({ message: 'Logged successfull', token })
          res.redirect("".concat(process.env.FRONTEND_URI, "/signup"));
          _context9.next = 24;
          break;
        case 19:
          _context9.prev = 19;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          if (!(_context9.t0.name == 'MongoServerError')) {
            _context9.next = 24;
            break;
          }
          return _context9.abrupt("return", res.json({
            error: _context9.t0
          }));
        case 24:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 19]]);
  }));
  return function handleAuthGoogleProvider(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var handleAuthGithubProvider = exports.handleAuthGithubProvider = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var profile, checkEmailUser, newUser, _token2, token;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          // await User.deleteOne({ email: req.user })
          profile = req.user;
          _context10.next = 4;
          return _userModel["default"].findOne({
            email: profile._json.email
          });
        case 4:
          checkEmailUser = _context10.sent;
          if (checkEmailUser) {
            _context10.next = 12;
            break;
          }
          newUser = new _userModel["default"]({
            accountID: profile.id,
            fullname: profile.username,
            displayName: profile.displayName,
            provider: profile.provider,
            userAvatar: profile._json.avatar_url,
            email: profile._json.email === null ? "".concat(profile.username, "_").concat(profile.id, "@majibooks.com") : profile._json.email,
            verified: true // Assuming social logins are automatically verified
          });
          _token2 = _jsonwebtoken["default"].sign({
            id: newUser.id
          }, process.env.JWT_PASS, {
            expiresIn: '7d'
          });
          res.cookie('token', _token2, {
            httpOnly: false,
            sameSite: 'none',
            secure: true
          });
          _context10.next = 11;
          return newUser.save();
        case 11:
          res.redirect("".concat(process.env.FRONTEND_URI, "/signup"));
        case 12:
          token = _jsonwebtoken["default"].sign({
            id: checkEmailUser._id
          }, process.env.JWT_PASS, {
            expiresIn: '7d'
          });
          res.cookie('token', token, {
            httpOnly: false,
            sameSite: 'none',
            secure: true
          });
          res.redirect("".concat(process.env.FRONTEND_URI, "/signup"));
          _context10.next = 23;
          break;
        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          if (!(_context10.t0.name == 'MongoServerError')) {
            _context10.next = 22;
            break;
          }
          return _context10.abrupt("return", res.json({
            message: 'this is the error',
            error: _context10.t0
          }));
        case 22:
          res.json({
            error: _context10.t0
          });
        case 23:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 17]]);
  }));
  return function handleAuthGithubProvider(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();