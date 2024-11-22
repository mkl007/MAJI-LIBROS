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
    const newBookData = new BookSchema({
        isbn,
        author: req.body.author,
        availabilityStatus: req.body.availabilityStatus,
        bookTitle: req.body.bookTitle,
        description: req.body.description,
        gender: req.body.gender,
        image: req.body.image,
        ownerId: req.params.userId,
        price: req.body.price,
        publishedYear: req.body.publishedYear,
    });

    try {
        await BookSchema.create(newBookData).then(() => {
            console.log(isbn)
            return res.status(201).json({ message: 'New book saved!' });

        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error creating book' });
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
        if(!reqSingleBook) return res.json({message: 'No file found with your searching criteria.'})
        res.json({ reqSingleBook })

    } catch (error) {
        console.log('There is an error: ', error)
        return res.status(401).json({ message: 'You got a problem...' })
    }
}