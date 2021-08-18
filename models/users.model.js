import { Mongoose } from 'mongoose'

const mongoose = Mongoose
const { Schema, Model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true //index set to true to optimise queries that use username and password fields
  },
  email: {
    type: String,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  },
  hash: String,
  salt: String
})

const User = new Model('User', userSchema)

export default User
