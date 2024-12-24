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
        backCoverImage: req.body.backCoverImage,
        ownerId: req.params.userId,
        price: req.body.price,
        publishedYear: req.body.publishedYear,
        uploadContentPdf: req.body.uploadContentPdf
    });

    try {
        if (!req.files || Object.keys(req.files) === 0) {
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
}

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

export const showBooks = async (req, res) => {
    try {
        const reqBooks = await BookSchema.find({ availabilityStatus: { $ne: 'not-available' } }).sort({ createdAt: -1 })
        res.status(200).json({ reqBooks })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Ups! Some problems here, please refresh the page.' })
    }
}

export const removeBook = async (req, res) => {
    try {
        const deleteBook = await BookSchema.deleteOne({ _id: req.params.bookId })
        return res.status(200).json({ message: 'Book deleted' })

    } catch (error) {
        console.log(error)
    }
}

export const singleBook = async (req, res) => {
    try {

        const reqSingleBook = await BookSchema.findOne({ _id: req.params.bookId })
        if (!reqSingleBook) return res.json({ message: 'No file found with your searching criteria.' })
        res.status(200).json({ reqSingleBook })
    } catch (error) {
        console.log('There is an error: ', error)
        return res.status(401).json({ message: 'You got a problem...' })
    }
}

export const editBook = async (req, res) => {
    try {
        const existingBook = {
            author: req.body.author,
            availabilityStatus: req.body.availabilityStatus,
            bookTitle: req.body.bookTitle,
            description: req.body.description,
            gender: req.body.gender,
            coverImage: req.body.coverImage,
            backCoverImage: req.body.backCoverImage,
            price: req.body.price,
            publishedYear: req.body.publishedYear,
            uploadContentPdf: req.body.uploadContentPdf
        };

        if (!req.files || Object.keys(req.files).length === 0) {
            console.log({ message: 'No files were uploaded for update.' });
        } else {
            if (req.files.coverImage) {
                const result1 = await uploadedFilefunction(req.files.coverImage.tempFilePath);
                existingBook.coverImage = result1?.secure_url;
            }

            if (req.files.backCoverImage) {
                const result2 = await uploadedFilefunction(req.files.backCoverImage.tempFilePath);
                existingBook.backCoverImage = result2?.secure_url;
            }

            if (req.files.uploadContentPdf) {
                const result3 = await uploadedFilefunction(req.files.uploadContentPdf.tempFilePath);
                existingBook.uploadContentPdf = result3?.secure_url;
            }
        }

        await BookSchema.findOneAndUpdate(
            { _id: req.params.bookId },
            {
                author: existingBook.author,
                bookTitle: existingBook.bookTitle,
                description: existingBook.description,
                availabilityStatus: existingBook.availabilityStatus,
                gender: existingBook.gender,
                coverImage: existingBook.coverImage,
                backCoverImage: existingBook.backCoverImage,
                uploadContentPdf: existingBook.uploadContentPdf,
                price: existingBook.price
            },
            { new: true }
        );

        return res.status(200).json({ message: 'Book updated!' });
    } catch (error) {
        console.log('There error is: ', error);
        return res.status(500).json({ message: 'There is an error', error });
    }
};
