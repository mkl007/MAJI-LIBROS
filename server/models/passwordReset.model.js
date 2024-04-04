import momgoose from 'mongoose'

const Schema = momgoose.Schema;
const passwordResetSchema = new Schema({
    userId: {
        type: String,
        ref: "user",
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    tempPassword: {
        type: String,
    }
})

const passwordReset = momgoose.model('passwordReset', passwordResetSchema);
export default passwordReset;
