import connectToDatabase from '../../../lib/dbConnect'
import Job from '../../../models/job.model'

connectToDatabase()

export default async function jobReqs (req, res) {
    const {
        query: { id },
        method
    } = req

    // testing url http://localhost:3000/api/jobs/(id)

    // All run to give the false output

    switch (method) {
        case 'GET':
            // Search by ID
            // can be change later depending on what we want to search
            try {
                const job = await Job.findById(id)

                // Check if job exist
                if (!job) 
                {
                    res.status(400).json({ success: false })
                } 

                res.status(200).json({ success: true, data: job })
                

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            // Update Job by ID
            try {
                const job = await Job.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if (!job) {
                    res.status(400).json({ success: false })
                } 

                res.status(200).json({ success: true, data: job })
                

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}