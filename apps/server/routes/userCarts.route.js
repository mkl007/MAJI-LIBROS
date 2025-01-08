import express from 'express'
import { addToCart } from '../controllers/shoppingCarts.controller.js';
export const cartRouter = express.Router();

// Endpoint to add item to user's cart
cartRouter.post('/add-to-cart', addToCart);
