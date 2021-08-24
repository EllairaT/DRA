import connectToDatabase from '../../../lib/dbConnect'
import Job from '../../../models/jobs.model'

connectToDatabase()

export default async(req, res) => {
    const { method } = req

    // testing url http://localhost:3000/api/jobs

    // testing for post
    // {
    //     "date": "2015-11-11",
    //     "site": "NZ",
    //     "siteAddress": "1 city",
    //     "siteType": "construction",
    //     "phone": "111111111",
    //     "inspector": "Geoff",
    //     "notes": "looks like a level 10",
    //     "siteTags": ["machine", "tall stuff"],
    //     "assessments": ["12","13"],
    //     "createdAt": "2019-01-01"
    // }

    switch (method) {
        case 'GET':
            try {
                // get all jobs
                const jobs = await Job.find({})

                res.status(200).json(jobs)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'POST':
            try {
                // create new jobs
                const jobs = await Job.create(req.body)

                res.status(200).json({data: jobs })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
