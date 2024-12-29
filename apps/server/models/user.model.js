import mongoose from 'mongoose';

const realSchema = mongoose.Schema;

const userSchema = new realSchema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    sparse: true, // Allows the field to be unique, but also to have multiple null values
  },
  password: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  accountID: {
    type: String,
    unique: true,
    sparse: true,
  },
  username: {
    type: String,
  },
  displayName: {
    type: String,
  },
  provider: {
    type: String,
  },
  userAvatar: {
    type: String,
  },
  role: {
    type: String
  },
}, { timestamps: true }); // Add timestamps to track creation and update times

const User = mongoose.model('User', userSchema);
export default User;
