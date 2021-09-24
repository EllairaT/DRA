import { getToken } from 'next-auth/jwt'

const secret = process.env.JWT_SECRET

export default async function JWTHelper(req, res) {
  const token = await getToken({ req, secret })
  console.log('JSON Web Token', token)
  res.end()
}
