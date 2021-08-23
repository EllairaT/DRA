import { Container, Row, Col, Button } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/client'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'
/**
 * Entry point of the app.
 * @Category Pages
 */
function Home() {
  // access session
  const [session, loading] = useSession()

  const content = (
    <Container>
      <Row>
        {/* sidebar */}
        <Col xs={2}>
          <Navi />
          <Button onClick={signOut}>Sign Out</Button>
        </Col>
        {/* rest of content */}
        <Col />
      </Row>
    </Container>
  )

  return (
    <>
      {/* show login page if there is no session */}
      {!session && (
        <>
          Not logged in
          <Login />
        </>
      )}
      {/* else, show 'signed in as'  */}
      {session && (
        <>
          Signed in as {session.user.name}
          {content}
        </>
      )}
    </>
  )
}

export default Home
