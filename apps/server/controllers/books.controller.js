
/*
    To create the new book you need to:

    enter the BookModel information
*/

import BookSchema from "../models/books.model.js"

const generateISBN = () => {
    let isbn = '978'; // Prefijo EAN para libros
    for (let i = 0; i < 9; i++) {
        isbn += Math.floor(Math.random() * 10);
    }

    let checksum = 0;
    for (let i = 0; i < 12; i++) {
        checksum += (isbn[i] * ((i % 2 === 0) ? 1 : 3));
    }
    checksum = (10 - (checksum % 10)) % 10;
    isbn += checksum;

    return isbn;
};



export const newBook = async (req, res) => {
    const isbn = await generateISBN();
    const newBookData = {
        isbn,
        authors: req.body.authors,
        availabilityStatus: req.body.availabilityStatus,
        bookTitle: req.body.bookTitle,
        description: req.body.description,
        gender: req.body.gender,
        image: req.body.image,
        ownerId: req.params.userId,
        price: req.body.price,
        lastOwner: req.body.lastOwner,
        publishedYear: req.body.publishedYear,
    };

    try {
        // const book = await BookSchema.create(newBookData);
        // console.log(req.headers.cookie)
        // return res.status(201).json(book);
        console.log('hi from the books.controller')
        return res.status(200).json({newBookData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error creating book' });
    }
};