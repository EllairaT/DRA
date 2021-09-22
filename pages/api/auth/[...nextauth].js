import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options = {
  providers: [
    CredentialsProvider({
      id: 'creds',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })

        const user = await res.json()
        console.log(user)
        if (res.ok && user) {
          return user
        }
        return null
      }
    })
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  session: {
    jwt: true
  },
  pages: {
    signIn: '/login',
    error: '/auth/error' // Error code passed in query string as ?error=
  },
  callbacks: {
    async session(session, token) {
      session.token = token
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token
    }
  },
  theme: 'light'
}

export default (req, res) => NextAuth(req, res, options)
