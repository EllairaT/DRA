import Container from 'react-bootstrap/Container'

import { useRouter } from 'next/router'

import { useSession, getSession } from 'next-auth/react'
import Form from '../../components/newAssessmentForm'

function Assessment() {
  const { data: session, status } = useSession()
  // gets the id from the url string
  const router = useRouter()
  const { id } = router.query
  const q = router.query

  return (
    <>
      {Object.keys(router.query).length === 0 ? 'no job found' : <h1>Your job id: {`${id}`}</h1>}

      <Container>
        <Form props={id} />
      </Container>
    </>
  )
}

export default Assessment

export async function getServerSideProps(context) {
  return { props: { session: await getSession(context) } }
}
