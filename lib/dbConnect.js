import mongoose from 'mongoose'

const { MONGODB_URI } = process.env
const { MONGODB_DB } = process.env
const connection = {}

export default async function connectToDatabase() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

  connection.isConnected = db.connections[0].readyState
}
