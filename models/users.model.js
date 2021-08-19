import { Mongoose } from 'mongoose'

const mongoose = Mongoose
const { Schema, Model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
})

const User = new Model('User', userSchema)

export default User
