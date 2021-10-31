// https://cdn.filestackcontent.com/<FILESTACK_API_KEY>/security=p:<POLICY>,s:<SIGNATURE>/workflow_status=job_id:<WORKFLOW_JOB_ID>

// recieve webhook from filestack 
async function getFSWebhook(req, res) {
  const apikey = process.env.NEXT_PUBLIC_FS_API_KEY
  const policy = process.env.NEXT_PUBLIC_FS_POLICY
  const signature = process.env.NEXT_PUBLIC_FS_SIGNATURE

  const url = `https://cdn.filestackcontent.com/${apikey}/security=p:${policy},s:${signature}/workflow_status=job_id:${req.body.jobid}`

  try {
    // keep retrying until webhook returns "finished" status
    // it takes a little while for files to be uploaded to azure/get a response from azure
    const fetchWebhook = () => {
      fetch(url, { timeout: 10000 }) // give the server 10 second limit to respond
        .then((response) => response.json()) // get json response
        .then((r) => {
          // keep trying until response status is "Finished"
          if (r.status === 'Finished') {
            return res.status(200).json(r)
          }
          fetchWebhook()
          return false
        })
    }
    fetchWebhook()
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong', msg: err })
  }
  return false
}

export default getFSWebhook
