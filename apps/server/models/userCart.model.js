import momgoose from 'mongoose'
const Schema = momgoose.Schema;

const userCartSchema = new Schema({
    userId: {
        type: String,
        ref: "user",
        required: true,
        unique: true
    },
    bookId: {
        type: String,
        required: true,
    },
    availabilityStatus: {
        type: String,
    },

}, { timestamps: true })

export const CartSchema = momgoose.model('CartSchema', userCartSchema);

