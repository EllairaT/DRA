import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { getSession } from 'next-auth/client'

export default function () {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/')
      } else {
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  return true
}
