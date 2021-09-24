import * as jwt from 'next-auth/jwt'

const secret = process.env.SECRET

export default async function (req, res) {
  const token = await jwt.getToken({ req, secret })
  res.send(JSON.stringify(token, undefined, 2))
}
