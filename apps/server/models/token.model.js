import momgoose from 'mongoose'

const SchemaT = momgoose.Schema;
const tokenSchema = new SchemaT({
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

const Token = momgoose.model('token', tokenSchema);
export default Token;
