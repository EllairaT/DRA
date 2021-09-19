//access a session from an API route

import { getSession } from 'next-auth/react'

export default async function Session(req, res) {
  const session = await getSession({ req })

  res.send(JSON.stringify(session, null, 2))
}
