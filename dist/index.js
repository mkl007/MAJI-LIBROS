"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = exports.port = exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _usersRoute = require("./routes/users.route.js");
var _dbConfig = require("./configs/db.config.js");
var _passport = _interopRequireDefault(require("passport"));
require("./configs/passport.config.js");
var _booksRoute = require("./routes/books.route.js");
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _userCartsRoute = require("./routes/userCarts.route.js");
var _authGoogle = require("./configs/authGoogle.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importar configuración de Passport

var port = exports.port = process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT || 3000;
_dotenv["default"].config();
(0, _dbConfig.db)();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])({
  origin: 'http://localhost:5173',
  credentials: true
}));
(0, _authGoogle.authFunction)();
app.use(_passport["default"].initialize());
app.use('/api/v1', _usersRoute.routerUser);
app.use('/api/v1/books', _booksRoute.routerBook);
app.use('/api/v1/books/carts', _userCartsRoute.cartRouter);
app.get('/success', function (req, res) {
  res.json({
    message: 'Froom here all good'
  });
});
app.get('/failure', function (req, res) {
  res.json({
    message: 'Froom here all failure'
  });
});
var server = exports.server = app.listen(port, function () {
  // console.log(`Server start at port ${port}`)
});
app.close = function (callback) {
  server.close(callback);
};
var _default = exports["default"] = app;