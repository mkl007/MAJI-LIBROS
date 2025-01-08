import momgoose from 'mongoose'

const userCartSchema = new momgoose.Schema({
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
    }
})

const UserCartSchemaTable = momgoose.model('userCart', userCartSchema);
export default UserCartSchemaTable;
