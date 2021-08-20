import { connectToDatabase } from '../../../lib/dbConnect'
import User from '../../../models/users.model'
import { loginValidation } from './validation'

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

connectToDatabase()

export default async function handler(req, res) {
  //validate
  const { error } = loginValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const user = await User.findOne({ email: req.body.email })

  //check if email or password is wrong
  if (!user) {
    return res.status(400).send('Email or password is incorrect')
  }

  const isPassValid = await bcrypt.compare(req.body.password, user.password)

  if (!isPassValid) {
    return res.status(400).send('Email or password is incorrect')
  }

  //create and assign token to user
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.setHeader('auth-token', token).send(token)
}
