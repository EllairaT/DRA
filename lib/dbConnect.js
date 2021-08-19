import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB
const connection = {}

async function connectToDatabase() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

  connection.isConnected = db.connections[0].readyState
  console.log(connection.isConnected)
}

export default connectToDatabase
