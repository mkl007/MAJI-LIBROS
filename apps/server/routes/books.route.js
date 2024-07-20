import express from 'express'
import {newBook}  from '../controllers/books.controller.js';
export const routerBook = express.Router();

routerBook.post('/newbook/:userId', newBook)

