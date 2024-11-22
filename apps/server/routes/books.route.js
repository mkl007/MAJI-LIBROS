import express from 'express'
import { myBooks, newBook, singleBook } from '../controllers/books.controller.js';
export const routerBook = express.Router();
import fileupload from 'express-fileupload'
import { uploadedFilefunction } from '../utils/cloudinary.js';
//
// routerBook.use(fileupload())
routerBook.use(fileupload({
    useTempFiles: true,
    tempFileDir: './uploadTemp'
}));
//

routerBook.post('/newbook/:userId', newBook)

routerBook.get('/:userId/books', myBooks);

routerBook.get('/book/:userId/:singlebook', singleBook)
//
routerBook.post('/upload', async (req, res) => {
    if (!req.files || Object.keys(req.files) === 0) return res.status(400).json({ message: 'No files were uploaded.' });

    try {
        const uploadedFile = req.files.foo;
        const result = await uploadedFilefunction(uploadedFile.tempFilePath)
        console.log(result)
        return res.status(200).json({ uploadedFile })
    } catch (error) {
        console.log(error)
    }
})
//