/**
 * @module Users
 * @category Models
 */

const mongoose = require('mongoose')

const { Schema } = mongoose

/**
 * Model for users.
 * Note that Date is generated for you, no need to do anything.
 * @typedef {Object} userSchema
 * @property {String} name - name of user
 * @property {String} password - password of user (STRONGLY recommended to hash first)
 * @property {String} email - email address of the user
 * @property {Date} date - date that user was created.
 */
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

/**
 * Model object for the user schema.
 * It is HIGHLY recommended that the string for the password paramater is already hashed.
 * This app hashes password on the client side. 
 * See {@link userSchema}
 * 
 * @example
 *  const user = new User({
      name: steve,
      email: steve@ex.com,
      password: passw123 
    })
 */
const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
