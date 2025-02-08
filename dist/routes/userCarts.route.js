"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _shoppingCartsController = require("../controllers/shoppingCarts.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cartRouter = exports.cartRouter = _express["default"].Router();
cartRouter.post('/add-to-cart', _shoppingCartsController.addToCart);
cartRouter.get('/:userId/my-items-cart', _shoppingCartsController.getIemsCart);
cartRouter["delete"]('/:userId/remove-from-cart/:itemId', _shoppingCartsController.removeFromCart);