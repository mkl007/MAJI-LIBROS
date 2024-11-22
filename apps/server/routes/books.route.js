import express from 'express'
import { myBooks, newBook, singleBook } from '../controllers/books.controller.js';
export const routerBook = express.Router();
import fileupload from 'express-fileupload'
//
routerBook.use(fileupload())
//

routerBook.post('/newbook/:userId', newBook)

routerBook.get('/:userId/books', myBooks);

routerBook.get('/book/:userId/:singlebook', singleBook)
//
routerBook.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files) === 0) return res.status(400).json({ message: 'No files were uploaded.' });

    const uploadedFile = req.files.foo;
    console.log('hay foo', uploadedFile)
    return res.status(200).json({uploadedFile})
})
//