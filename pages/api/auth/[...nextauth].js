import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'creds',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
        })
        const user = await res.json()
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'cb844962fe6eccec56aaa05b4d77ada2',
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  pages: {
    signIn: '/login',
    error: '/auth/error' // Error code passed in query string as ?error=
  },
  callbacks: {
    async signIn(user) {
      if (user) {
        return {
          redirect: '/'
        }
      }
      return true
    },
    async session({ session, user, token }) {
      console.log(session)
      return session
    }
  },
  theme: 'light',
  debug: true
})
