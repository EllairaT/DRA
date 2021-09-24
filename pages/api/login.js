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

  const user = { name: result.name, email: result.email }

  return res.status(200).json(user)
}

export default handler
