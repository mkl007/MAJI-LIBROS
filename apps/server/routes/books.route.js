import express from 'express'
import {myBooks, newBook, singleBook}  from '../controllers/books.controller.js';
export const routerBook = express.Router();

routerBook.post('/newbook/:userId', newBook)

routerBook.get('/:userId/books', myBooks);

routerBook.get('/book/:userId/:singlebook', singleBook)
