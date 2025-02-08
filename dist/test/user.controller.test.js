"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _supertest = _interopRequireDefault(require("supertest"));
var _index = _interopRequireWildcard(require("../index.js"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _faker = require("@faker-js/faker");
var _userModel = _interopRequireDefault(require("../models/user.model.js"));
var _tokenModel = _interopRequireDefault(require("../models/token.model.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fullname = _faker.faker.person.fullName();
var unregisteredEmail = "mk1ultra1eb@gmail.com";
var existingEmail = "fipef83364@cmheia.com";
var password = _faker.faker.internet.password();
var wrongPassword = 'wrongPassword';
var emailNotVerifiedYet = "kade.okuneva2@ethereal.email";
var invalidEmail = _faker.faker.internet.email();
var newPassword = _faker.faker.internet.password();
var passwordConfimation = _faker.faker.internet.password();
describe('POST / register', function () {
  var response;
  beforeAll( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(process.env.MONGO_URI);
        case 3:
          _context.next = 5;
          return _userModel["default"].deleteMany();
        case 5:
          _context.next = 7;
          return _tokenModel["default"].deleteMany();
        case 7:
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('Error connecting to MongoDB:', _context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  })));
  test('Should return 200 since the new user is now successfully registered, the email was sent. Only waiting for email verification at end of user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _supertest["default"])(_index["default"]).post('/api/v1/register').send({
            fullname: fullname,
            email: existingEmail,
            password: password
          });
        case 2:
          response = _context2.sent;
          expect(response.status).toBe(200);
          expect(response.headers['content-type']).toContain('json');
          expect(response.body.status).toEqual('SUCCESSFULL');
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('Should return 409 conflict, when email is already registered', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _supertest["default"])(_index["default"]).post('/api/v1/register').send({
            fullname: fullname,
            email: existingEmail,
            password: password
          });
        case 2:
          response = _context3.sent;
          expect(response.status).toBe(409);
          expect(response.headers['content-type']).toContain('json');
          expect(response.body.msg).toEqual("Email already exist. Do you mean to login?");
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it('Should return 404 and msg to indicate the email was not sent. The issue might be caused by: invalid email, lost connection or internal issue', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _supertest["default"])(_index["default"]).post('/api/v1/register').send({
            fullname: fullname,
            password: password
          });
        case 2:
          response = _context4.sent;
          expect(response.status).toBe(404);
          expect(response.headers['content-type']).toContain('json');
          expect(response.body.message).toEqual('Error sending confirmation email. Email no found, double check email address');
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  it('Should return 500 and msg indicating the the operation was not done, registration process on went through.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _supertest["default"])(_index["default"]).post('/api/v1/register').send({});
        case 2:
          response = _context5.sent;
          expect(response.status).toBe(500);
          expect(response.headers['content-type']).toContain('json');
          expect(response.body.message).toEqual("Internal Error. Please refresh the page and try again");
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
});
describe('GET / confirm/:token', function () {
  it('should return 200 success if email is verified and token confirmation token deleted', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var userInfo, token, tokenString, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _userModel["default"].findOne({
            email: existingEmail
          });
        case 2:
          userInfo = _context6.sent;
          _context6.next = 5;
          return _tokenModel["default"].findOne({
            userId: userInfo._id
          });
        case 5:
          token = _context6.sent;
          tokenString = token.token;
          _context6.next = 9;
          return (0, _supertest["default"])(_index["default"]).get("/api/v1/confirm/".concat(tokenString));
        case 9:
          response = _context6.sent;
          expect(response.status).toBe(200);
          expect(response.body.message).toBe('email verified');
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  it('should return 502 bad request if token is not found since the email has been verified already', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var userInfo, token, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _userModel["default"].findOne({
            email: existingEmail
          });
        case 2:
          userInfo = _context7.sent;
          _context7.next = 5;
          return _tokenModel["default"].findOne({
            userId: userInfo._id
          });
        case 5:
          token = _context7.sent;
          _context7.next = 8;
          return (0, _supertest["default"])(_index["default"]).get("/api/v1/confirm/".concat(token));
        case 8:
          response = _context7.sent;
          expect(response.status).toBe(502);
          expect(response.body.message).toBe('Error while verifying or email already verified');
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
});
describe('POST /login', function () {
  it('should return 404 if Email was not found.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var response;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/login").send({
            email: unregisteredEmail,
            password: password
          });
        case 2:
          response = _context8.sent;
          expect(response.status).toBe(404);
          expect(response.body.message).toBe('User no found with email provided, please review the email or register your email');
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
  it('should return 200, user logged in.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/login").send({
            email: existingEmail,
            password: password
          });
        case 2:
          response = _context9.sent;
          expect(response.status).toBe(200);
          expect(response.body.message).toBe("Logged in");
        case 5:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  })));
  it('should return 400, Email and password correct but account not verified. Need to be confirmed on email link', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _supertest["default"])(_index["default"]).post('/api/v1/register').send({
            fullname: fullname,
            email: emailNotVerifiedYet,
            password: password
          });
        case 2:
          _context10.next = 4;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/login").send({
            email: emailNotVerifiedYet,
            password: password
          });
        case 4:
          response = _context10.sent;
          expect(response.status).toBe(400);
          expect(response.body.message).toBe("Email not verified. Please check your Mail box to verify your email or register your account");
        case 7:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
});
describe('POST /logout', function () {
  it('should return 200 for logout.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/logout").send({
            email: existingEmail,
            password: password
          });
        case 2:
          response = _context11.sent;
          expect(response.status).toBe(200);
          expect(response.body.message).toBe('Loggin out...');
        case 5:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  })));
});
describe('POST /reset_password', function () {
  it('should return 404 to email no register on the account.', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var response;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/reset_password").send({
            email: unregisteredEmail,
            password: password
          });
        case 2:
          response = _context12.sent;
          expect(response.status).toBe(404);
          expect(response.body.message).toBe('Email not registered. Would you like to register your account?');
        case 5:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  })));
  it('should return 404, failed sending email', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var response;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/reset_password").send({
            email: invalidEmail,
            password: password
          });
        case 2:
          response = _context13.sent;
          expect(response.status).toBe(404);
        case 4:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  })));
  it('should return 200, password reset email sent', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var response;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _supertest["default"])(_index["default"]).post("/api/v1/reset_password").send({
            email: existingEmail,
            password: password
          });
        case 2:
          response = _context14.sent;
          expect(response.status).toBe(200);
          expect(response.body.message).toBe("Password reset requested. Please check your email ");
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  })));
  afterAll(function (done) {
    _index.server.close(done);
    _mongoose["default"].disconnect();
  });
});