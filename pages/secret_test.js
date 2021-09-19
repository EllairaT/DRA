import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

export default function Secret() {
  const [session, loading] = useSession()

  const [content, setContent] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/secret')
      const json = await res.json()

      if (json.content) {
        setContent(json.content)
        console.log(json.content)
      }
    }
    fetchData()
  }, [session])

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <>
        <h1>Not signed in, please sign in first.</h1>
      </>
    )
  }

  return (
    <div>
      <h1>This is a protected page</h1>
      <p>{content}</p>
    </div>
  )
}
