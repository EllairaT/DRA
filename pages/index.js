import { Container, Row, Col } from 'react-bootstrap'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'
import { getSession, signOut, useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
/**
 * Entry point of the app.
 * @Category Pages
 */
function Home() {
  //access session
  const [session, loading] = useSession()

  useEffect(() => {
    console.log(session, loading)
  }, [session])

  if (session) {
    return (
      <Container>
        <Row>
          {/* sidebar */}
          <Col xs={2}>
            <Navi />
            Signed in as {session?.user.name}
            <button onClick={signOut}>Sign Out</button>
          </Col>
          {/* rest of content */}
          <Col></Col>
        </Row>
      </Container>
    )
  } else {
    return <Login />
  }
}

export default Home

//index.js should be server side rendered
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return { props: { session } }
}
