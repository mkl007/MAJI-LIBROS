import express from 'express'
import { addToCart, getIemsCart } from '../controllers/shoppingCarts.controller.js';
export const cartRouter = express.Router();

cartRouter.post('/add-to-cart', addToCart);

cartRouter.get('/:userId/my-items-cart', getIemsCart);

