import connectToDatabase from '../../../lib/dbConnect'
import User from '../../../models/users.model'
import { registerValidation } from './validation'
const bcrypt = require('bcryptjs')

async function handler(req, res) {
  //only accept POST method
  if (req.method === 'POST') {
    connectToDatabase()

    const res = await User.findOne({ email: req.body.email })
    if (res) {
      const isPassValid = await bcrypt.compare(req.body.password, res.password)

      if (isPassValid) {
        const user = { email: res.email, name: res.name }
        return res.send(user)
      }
    }
    //send error if not POST
  } else {
    res.status(500).send('Invalid Route')
  }
}

export default handler
