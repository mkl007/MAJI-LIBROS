import express from 'express'
import { myBooks, newBook, showBooks, singleBook, removeBook, editBook } from '../controllers/books.controller.js';
export const routerBook = express.Router();
import fileupload from 'express-fileupload'
import { verifyToken } from '../middlewares/isLogged.middleware.js';

routerBook.use(fileupload({
    useTempFiles: true,
    tempFileDir: './uploadTemp'
}));

routerBook.post('/newbook/:userId', verifyToken, newBook)

routerBook.get('/:userId/books', verifyToken, myBooks);

routerBook.get('/showbooks', showBooks)

routerBook.delete('/removebook/:bookId', removeBook)

routerBook.get('/book/:bookId', verifyToken, singleBook)

routerBook.put('/edit/:bookId', editBook)