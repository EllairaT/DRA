import dbConnect from '../../utils/dbConnect'
import Job from '../../models/job.model'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Job.find({});
                res.status(200).json({ success: true, data: jobs });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const job = await Job.create(req.body);
                res.status(200).json({ success: true, data: job });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}