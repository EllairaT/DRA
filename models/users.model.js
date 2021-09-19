const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      min: 6
    },
    email: {
      type: String,
      required: true,
      min: 6
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { collection: 'users' }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
