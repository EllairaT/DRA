import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../models/users.model'
import connectToDatabase from '../../../lib/dbConnect'
const bcrypt = require('bcryptjs')

const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      },
      async authorize(credentials) {
        //connect to MongoDB
        connectToDatabase()
        const res = await fetch('/login.js', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })

        const user = await res.json()

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  }
}

export default (req, res) => NextAuth(req, res, options)
