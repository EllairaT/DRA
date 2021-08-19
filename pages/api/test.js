import connectToDatabase from '../../lib/dbConnect'

connectToDatabase()

export default async (req, res) => {
  res.json({ test: 'test' })
}
