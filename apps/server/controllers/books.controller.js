import BookSchema from "../models/books.model.js"
import { uploadedFilefunction } from "../utils/cloudinary.js";
import { generateISBN } from '../utils/generateISBN.js'

// TODO: Enable the middleware

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
        backCoverImage: req.body.backCoverImage,
        ownerId: req.params.userId,
        price: req.body.price,
        publishedYear: req.body.publishedYear,
        uploadContentPdf: req.body.uploadContentPdf
    });

    try {
        if (!req.files || Object.keys(req.files) === 0) {
            console.log(req.files)
            return res.status(400).json({ message: 'No files were uploaded.' });
        }
        const uploadedFile = req.files.coverImage;
        const uploadFileBackImage = req.files.backCoverImage
        const uploadFileuploadContentPdf = req.files.uploadContentPdf

        const result1 = await uploadedFilefunction(uploadedFile.tempFilePath)
        const result2 = await uploadedFilefunction(uploadFileBackImage.tempFilePath)
        const result3 = await uploadedFilefunction(uploadFileuploadContentPdf.tempFilePath)

        newBookData.coverImage = result1.secure_url;
        newBookData.backCoverImage = result2.secure_url;
        newBookData.uploadContentPdf = result3.secure_url;

        const savedBook = await BookSchema.create(newBookData)
        return res.status(201).json({ message: 'New book saved!', savedBook });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error creating book' });
    }
};

export const myBooks = async (req, res) => {
    try {
        const reqBooks = await BookSchema.find({ ownerId: req.params.userId })
        if (reqBooks <= 0) {

            return res.status(200).json({ message: 'seems that you dont have books yet.. ' })
        }

        res.status(200).json({ reqBooks })

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
export const showBooks = async (req, res) => {
    try {
        const allbooks = await BookSchema.find()
        console.log(allbooks)
        res.status(200).json({ allbooks })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Ups! Some problems here, please refresh the page.' })
    }
}