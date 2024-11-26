import BookSchema from "../models/books.model.js"
import { uploadedFilefunction } from "../utils/cloudinary.js";
import { generateISBN } from '../utils/generateISBN.js'



export const newBook = async (req, res) => {

    const isbn = await generateISBN();
    const newBookData = new BookSchema({
        isbn,
        author: req.body.author,
        availabilityStatus: req.body.availabilityStatus,
        bookTitle: req.body.bookTitle,
        description: req.body.description,
        gender: req.body.gender,
        coverImage: req.body.coverImage,
        ownerId: req.params.userId,
        price: req.body.price,
        publishedYear: req.body.publishedYear,
    });

    try {
        if (!req.files || Object.keys(req.files) === 0) {
            console.log(req.files)
            return res.status(400).json({ message: 'No files were uploaded.' });
        }
        const uploadedFile = req.files.coverImage;
        const result = await uploadedFilefunction(uploadedFile.tempFilePath)
        newBookData.coverImage = result.secure_url;
        await BookSchema.create(newBookData)
        return res.status(201).json({ message: 'New book saved!' });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error creating book' });
    }
};

export const myBooks = async (req, res) => {
    try {
        const reqBooks = await BookSchema.find({ ownerId: req.params.userId })
        if (!reqBooks) {
            console.log(req.params.userId)
            return res.status(400).json({ message: 'seems that you dont have books yet.. ' })
        }
        res.json({ reqBooks })

    } catch (error) {
        console.log('There is an error: ', error)
        return res.status(401).json({ message: 'You got a problem...' })
    }
}

export const singleBook = async (req, res) => {
    try {
        const reqBook = await BookSchema.find({ ownerId: req.params.userI })
        if (!reqBook) {
            console.log(req.params.userId)
            return res.status(400).json({ message: 'seems that you dont have books yet.. ' })
        }
        const reqSingleBook = await BookSchema.findOne({ _id: req.params.singlebook })
        if (!reqSingleBook) return res.json({ message: 'No file found with your searching criteria.' })
        res.json({ reqSingleBook })

    } catch (error) {
        console.log('There is an error: ', error)
        return res.status(401).json({ message: 'You got a problem...' })
    }
}