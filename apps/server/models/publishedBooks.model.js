import mongoose from 'mongoose';

const realSchema = mongoose.Schema;

const publishedBooksSchema = new realSchema({
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
    coverImage: {
        type: String,
    },
    backCoverImage: {
        type: String,
    },
    uploadContentPdf: {
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
    likes:{
        type: Number
    },
    unlike:{
        type: Number
    }

}, { timestamps: true }); // Add timestamps to track creation and update times

const PublishedBooksSchema = mongoose.model('PublishedBooksSchema', publishedBooksSchema);
export default PublishedBooksSchema;

