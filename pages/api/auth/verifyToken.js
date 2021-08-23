import jwt from 'jsonwebtoken'

function auth(req, res, next) {
  //check if header contains 'auth-token'
  const token = req.setHeader('auth-token')

  if (!token) {
    return res.status(401).send('Access Denied')
  }

  try {
    const verified = jwt.verify(process.env.TOKEN_SECRET)
    req.user = verified
  } catch (err) {
    res.status(400).send('Invalid Token')
  }
}
