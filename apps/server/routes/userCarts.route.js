import express from 'express'
import { addToCart, getItemsCart, removeFromCart } from '../controllers/shoppingCarts.controller.js';
export const cartRouter = express.Router();

cartRouter.post('/add-to-cart', addToCart);

cartRouter.get('/:userId/my-items-cart', getItemsCart);

cartRouter.delete('/:userId/remove-from-cart/:itemId', removeFromCart);

