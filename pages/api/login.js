import connectToDatabase from '../../lib/dbConnect'
import User from '../../models/users.model'
const bcrypt = require('bcryptjs')

async function handler(req, res) {
  connectToDatabase()

  const result = await User.findOne({ email: req.body.email })
  if (!result) {
    return res.status(400).send('Email or password is incorrect')
  }
  const isPassValid = await bcrypt.compare(req.body.password, result.password)

  if (!isPassValid) {
    return res.status(400).send('Email or password is incorrect')
  }

  const user = { email: result.email, name: result.name }

  res.send(user)
}

export default handler
