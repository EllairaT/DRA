import Container from 'react-bootstrap/Container'

import { useRouter } from 'next/router'

import { useSession, getSession } from 'next-auth/react'
import DRAForm from '../../components/newAssessmentForm'

function Assessment(props) {
  const i = props.query.id ? props.query.id[0] : null
  const { data: session, status } = useSession()

  //61650e8c2ad5c02224a436aa
  return (
    <>
      {props.query.id ? <h1>Your job id: {i}</h1> : 'no job found'}

      <Container>
        <DRAForm id={i} />
      </Container>
    </>
  )
}

export default Assessment

export async function getServerSideProps(context) {
  const { query } = context
  return { props: { session: await getSession(context), query } }
}
