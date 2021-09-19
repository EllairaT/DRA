import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../models/users.model'
import { connectToDatabase } from '../../../lib/dbConnect'
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
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        //connect to MongoDB
        // connectToDatabase()
        const res = await User.findOne({ email: credentials.email })
        const isPassValid = await bcrypt.compare(credentials.password, res.password)

        if (res) {
          console.log('logged in sorta')
          return { email: res.email, name: res.name }
        } else {
          return null
        }
      }
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)
