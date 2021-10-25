import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/router'
import { useSession, getSession } from 'next-auth/react'
import DRAForm from '../../components/newAssessmentForm'

function Assessment(props) {
  const {
    query: { id }
  } = props

  const {
    data: { session },
    status
  } = useSession()

  return (
    <>
      {id ? <h1>Your job id: {id}</h1> : 'no job found'}

      <Container>
        <DRAForm id={id} />
      </Container>
    </>
  )
}

export default Assessment

export async function getServerSideProps(context) {
  const { query } = context
  return { props: { session: await getSession(context), query } }
}
