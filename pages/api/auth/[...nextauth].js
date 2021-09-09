import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import User from '../../../models/users.model'
import { connectToDatabase } from '../../../lib/dbConnect'
const bcrypt = require('bcryptjs')

const options = {
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        //connect to MongoDB
        connectToDatabase()

        const result = await User.findOne({ email: credentials.email })
        //check if email or password is wrong
        if (!result) {
          throw new Error('Email or password is incorrect')
        }

        const isPassValid = await bcrypt.compare(credentials.password, result.password)

        if (!isPassValid) {
          throw new Error('Email or password is incorrect')
        }

        return { email: result.email, name: result.name }
      }
    })
  ],
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY
  }
}

export default (req, res) => NextAuth(req, res, options)
