"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleBook = exports.showBooks = exports.removeBook = exports.newBook = exports.myBooks = exports.editBook = void 0;
var _booksModel = _interopRequireDefault(require("../models/books.model.js"));
var _cloudinary = require("../utils/cloudinary.js");
var _generateISBN = require("../utils/generateISBN.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var newBook = exports.newBook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var isbn, newBookData, uploadedFile, uploadFileuploadContentPdf, uploadFileBackImage, result2, result1, result3, savedBook;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _generateISBN.generateISBN)();
        case 2:
          isbn = _context.sent;
          newBookData = new _booksModel["default"]({
            isbn: isbn,
            author: req.body.author,
            availabilityStatus: req.body.availabilityStatus,
            bookTitle: req.body.bookTitle,
            description: req.body.description,
            gender: req.body.gender,
            coverImage: req.body.coverImage,
            backCoverImage: req.body.backCoverImage,
            ownerId: req.params.userId,
            price: req.body.price,
            publishedYear: req.body.publishedYear,
            uploadContentPdf: req.body.uploadContentPdf
          });
          _context.prev = 4;
          if (!(!req.files || Object.keys(req.files) === 0)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'No files were uploaded.'
          }));
        case 7:
          uploadedFile = req.files.coverImage;
          uploadFileuploadContentPdf = req.files.uploadContentPdf; // As backCoverImage is optional we have to make sure this is being tracked.
          if (!req.files.backCoverImage) {
            _context.next = 15;
            break;
          }
          uploadFileBackImage = req.files.backCoverImage;
          _context.next = 13;
          return (0, _cloudinary.uploadedFilefunction)(uploadFileBackImage.tempFilePath);
        case 13:
          result2 = _context.sent;
          newBookData.backCoverImage = result2.secure_url;
        case 15:
          _context.next = 17;
          return (0, _cloudinary.uploadedFilefunction)(uploadedFile.tempFilePath);
        case 17:
          result1 = _context.sent;
          _context.next = 20;
          return (0, _cloudinary.uploadedFilefunction)(uploadFileuploadContentPdf.tempFilePath);
        case 20:
          result3 = _context.sent;
          newBookData.coverImage = result1.secure_url;
          newBookData.uploadContentPdf = result3.secure_url;
          _context.next = 25;
          return _booksModel["default"].create(newBookData);
        case 25:
          savedBook = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'New book saved!',
            savedBook: savedBook
          }));
        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: 'Error creating book'
          }));
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 29]]);
  }));
  return function newBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var myBooks = exports.myBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var reqBooks;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _booksModel["default"].find({
            ownerId: req.params.userId
          });
        case 3:
          reqBooks = _context2.sent;
          if (!(reqBooks <= 0)) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            message: 'seems that you dont have books yet.. '
          }));
        case 6:
          res.status(200).json({
            reqBooks: reqBooks
          });
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log('There is an error: ', _context2.t0);
          return _context2.abrupt("return", res.status(401).json({
            message: 'You got a problem...'
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function myBooks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var showBooks = exports.showBooks = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var reqBooks;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _booksModel["default"].find({
            availabilityStatus: {
              $ne: 'not-available'
            }
          }).sort({
            createdAt: -1
          });
        case 3:
          reqBooks = _context3.sent;
          res.status(200).json({
            reqBooks: reqBooks
          });
          _context3.next = 11;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(400).json({
            message: 'Ups! Some problems here, please refresh the page.'
          }));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function showBooks(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var removeBook = exports.removeBook = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var deleteBook;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _booksModel["default"].findOne({
            _id: req.params.bookId
          });
        case 3:
          deleteBook = _context4.sent;
          _context4.next = 6;
          return (0, _cloudinary.deleteFileFromCloudinary)(deleteBook.coverImage);
        case 6:
          _context4.next = 8;
          return _booksModel["default"].deleteOne({
            _id: req.params.bookId
          });
        case 8:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Book successfully deleted'
          }));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function removeBook(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var singleBook = exports.singleBook = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var reqSingleBook;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _booksModel["default"].findOne({
            _id: req.params.bookId
          });
        case 3:
          reqSingleBook = _context5.sent;
          if (reqSingleBook) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.json({
            message: 'No file found with your searching criteria.'
          }));
        case 6:
          res.status(200).json({
            reqSingleBook: reqSingleBook
          });
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log('There is an error: ', _context5.t0);
          return _context5.abrupt("return", res.status(401).json({
            message: 'You got a problem...'
          }));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function singleBook(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var editBook = exports.editBook = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var existingBook, result1, result2, result3;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          existingBook = {
            author: req.body.author,
            availabilityStatus: req.body.availabilityStatus,
            bookTitle: req.body.bookTitle,
            description: req.body.description,
            gender: req.body.gender,
            coverImage: req.body.coverImage,
            backCoverImage: req.body.backCoverImage,
            price: req.body.price,
            publishedYear: req.body.publishedYear,
            uploadContentPdf: req.body.uploadContentPdf
          };
          if (!(!req.files || Object.keys(req.files).length === 0)) {
            _context6.next = 6;
            break;
          }
          console.log({
            message: 'No files were uploaded for update.'
          });
          _context6.next = 21;
          break;
        case 6:
          if (!req.files.coverImage) {
            _context6.next = 11;
            break;
          }
          _context6.next = 9;
          return (0, _cloudinary.uploadedFilefunction)(req.files.coverImage.tempFilePath);
        case 9:
          result1 = _context6.sent;
          existingBook.coverImage = result1 === null || result1 === void 0 ? void 0 : result1.secure_url;
        case 11:
          if (!req.files.backCoverImage) {
            _context6.next = 16;
            break;
          }
          _context6.next = 14;
          return (0, _cloudinary.uploadedFilefunction)(req.files.backCoverImage.tempFilePath);
        case 14:
          result2 = _context6.sent;
          existingBook.backCoverImage = result2 === null || result2 === void 0 ? void 0 : result2.secure_url;
        case 16:
          if (!req.files.uploadContentPdf) {
            _context6.next = 21;
            break;
          }
          _context6.next = 19;
          return (0, _cloudinary.uploadedFilefunction)(req.files.uploadContentPdf.tempFilePath);
        case 19:
          result3 = _context6.sent;
          existingBook.uploadContentPdf = result3 === null || result3 === void 0 ? void 0 : result3.secure_url;
        case 21:
          _context6.next = 23;
          return _booksModel["default"].findOneAndUpdate({
            _id: req.params.bookId
          }, {
            author: existingBook.author,
            bookTitle: existingBook.bookTitle,
            description: existingBook.description,
            availabilityStatus: existingBook.availabilityStatus,
            gender: existingBook.gender,
            coverImage: existingBook.coverImage,
            backCoverImage: existingBook.backCoverImage,
            uploadContentPdf: existingBook.uploadContentPdf,
            price: existingBook.price
          }, {
            "new": true
          });
        case 23:
          return _context6.abrupt("return", res.status(200).json({
            message: 'Book updated!'
          }));
        case 26:
          _context6.prev = 26;
          _context6.t0 = _context6["catch"](0);
          console.log('There error is: ', _context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            message: 'There is an error',
            error: _context6.t0
          }));
        case 30:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 26]]);
  }));
  return function editBook(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();