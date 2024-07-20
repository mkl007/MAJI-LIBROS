import mongoose from 'mongoose';

const realSchema = mongoose.Schema;

const bookSchema = new realSchema({
    bookTitle: {
        type: String,
    },
    authors: {
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
    lastOwner: {
        type: String
    }
}, { timestamps: true }); // Add timestamps to track creation and update times

const BookSchema = mongoose.model('BookSchema', bookSchema);
export default BookSchema;

