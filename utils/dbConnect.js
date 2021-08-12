import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true })
    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(`Something went wrong with connecting to MongoDB: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
