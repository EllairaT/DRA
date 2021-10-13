import Container from 'react-bootstrap/Container'
import { useSession, getSession } from 'next-auth/react'
import Form from '../components/JobForm'

function ScheduleAssessment() {
  const { data: session, status } = useSession()
  return (
    <>
      <Container>
        <Form />
      </Container>
    </>
  )
}
export default ScheduleAssessment

export async function getServerSideProps(context) {
  return { props: { session: await getSession(context) } }
}
