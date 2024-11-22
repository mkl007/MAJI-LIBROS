import mongoose from 'mongoose';

const realSchema = mongoose.Schema;

const bookSchema = new realSchema({
    isbn: {
        type: Number
    },
    bookTitle: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    publishedYear: {
        type: Number
    },
    gender: {
        type: String,
    },
    image: {
        type: String,
    },
    availabilityStatus: {
        type: String,
    },
    price: {
        type: Number,
    },
    ownerId: {
        type: String,
    },

}, { timestamps: true }); // Add timestamps to track creation and update times

const BookSchema = mongoose.model('BookSchema', bookSchema);
export default BookSchema;

