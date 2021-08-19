import connectToDatabase from '../../lib/dbConnect'
import connectToAzure from '../../lib/azureConnect'
connectToDatabase()
connectToAzure()

export default async (req, res) => {
  res.json({ test: 'test' })
}
