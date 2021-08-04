import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true })
    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(`Something went wrong with connecting to MongoDB: ${err.message}`)
    process.exit(1)
  }
}

mongoose.set('useFindAndModify', false)
export default connectDB
