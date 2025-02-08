"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerBook = void 0;
var _express = _interopRequireDefault(require("express"));
var _booksController = require("../controllers/books.controller.js");
var _expressFileupload = _interopRequireDefault(require("express-fileupload"));
var _isLoggedMiddleware = require("../middlewares/isLogged.middleware.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routerBook = exports.routerBook = _express["default"].Router();
routerBook.use((0, _expressFileupload["default"])({
  useTempFiles: true,
  tempFileDir: './uploadTemp'
}));
routerBook.post('/newbook/:userId', _isLoggedMiddleware.verifyToken, _booksController.newBook);
routerBook.get('/:userId/books', _isLoggedMiddleware.verifyToken, _booksController.myBooks);
routerBook.get('/showbooks', _booksController.showBooks);
routerBook["delete"]('/removebook/:bookId', _booksController.removeBook);
routerBook.get('/book/:bookId', _isLoggedMiddleware.verifyToken, _booksController.singleBook);
routerBook.put('/edit/:bookId', _booksController.editBook);