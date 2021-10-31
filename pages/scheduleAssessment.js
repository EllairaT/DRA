import React, { Component, useState } from 'react'
import { useSession, getSession } from 'next-auth/react'
import Container from 'react-bootstrap/Container'
import Form from '../components/JobForm'
import { server } from '../config'

/**
 * @category pages
 * @returns {void}
 */
function ScheduleAssessment() {
  const { data: session, status } = useSession()
  const [id, setId] = useState('')

  async function getUserId() {
    try {
      const userRes = await fetch(`${server}/api/jobs/${session.user.email}`, {
        method: 'COPY'
      })
      const { data } = await userRes.json()
      setId(data._id)
    } catch (error) {
      return false
    }
    return true
  }
  getUserId()

  return (
    <>
      <Container>
        {/* render form when userId is set */}
        {id ? <Form userId={id} /> : 'sss'}
      </Container>
    </>
  )
}
export default ScheduleAssessment

export async function getServerSideProps(context) {
  return { props: { session: await getSession(context) } }
}
