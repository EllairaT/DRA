import { connectToDatabase } from '../../../lib/dbConnect'
import User from '../../../models/users.model'
import { registerValidation } from './validation'
const bcrypt = require('bcryptjs')

async function handler(req, res) {
  //only accept POST method
  if (req.method === 'POST') {
    connectToDatabase()
    //validate data before making user
    const { error } = registerValidation(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    const doesEmailExist = await User.findOne({ email: req.body.email })
    if (doesEmailExist) {
      return res.status(400).send('Email already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)

    //create new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPass
    })

    try {
      const savedUser = await user.save()
      res.send(savedUser)
    } catch (err) {
      res.status(400).send(err)
    }
  } else {
    res.status(500).send('Invalid Route')
  }
}

export default handler
