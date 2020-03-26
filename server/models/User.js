import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  token: String,
});

mongoose.model('users', userSchema);
