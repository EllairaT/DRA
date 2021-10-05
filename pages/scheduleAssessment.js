import Container from 'react-bootstrap/Container'
import Form from '../components/JobForm'

import { useSession, getSession } from 'next-auth/react'

function scheduleAssessment() {
  const { data: session, status } = useSession()
  return (
    <>
      <Container>
        <Form />
      </Container>
    </>
  )
}
export default scheduleAssessment

export async function getServerSideProps(context) {
  return { props: { session: await getSession(context) } }
}
