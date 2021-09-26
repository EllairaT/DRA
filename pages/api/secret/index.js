import { getSession } from 'next-auth/react'

export default async (req, res) => {
  // get session
  const session = await getSession({ req })

  if (session) {
    // send a json object
    res.send({
      content: 'welcome to the secret page'
    })
  } else {
    res.send({
      error: 'You need to be signed in'
    })
  }
}
