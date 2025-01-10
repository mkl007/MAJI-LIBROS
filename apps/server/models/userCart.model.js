import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userCartSchema = new Schema({
    userId: {
        type: String,
    },
    bookId: {
        type: String,
        required: true,
    },
    availabilityStatus: {
        type: String,
    },

}, { timestamps: true })

export const ShoopingCartSchema = mongoose.model('ShoopingCartSchema', userCartSchema);

