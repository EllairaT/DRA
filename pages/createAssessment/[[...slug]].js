import Container from 'react-bootstrap/Container'
import Form from '../../components/newAssessmentForm'

import { useRouter } from 'next/router'

import { useSession, getSession } from 'next-auth/react'

function Assessment() {
  const { data: session, status } = useSession()
  // gets the id from the url string
  const router = useRouter()
  const { id, slug } = router.query
  const q = router.query
  console.log(q)

  return (
    <>
      {{ slug } ? <h1>Your job id: {`${slug}`}</h1> : ''}

      <Container>
        <Form props={slug} />
      </Container>
    </>
  )
}

export default Assessment

export async function getServerSideProps(context) {
  return { props: { session: await getSession(context) } }
}
