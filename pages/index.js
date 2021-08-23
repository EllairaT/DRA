import { Container, Row, Col } from 'react-bootstrap'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'
import { signIn, signOut, useSession } from 'next-auth/client'
/**
 * Entry point of the app.
 * @Category Pages
 */
function Home() {
  //access session
  const [session, loading] = useSession()

  var content = (
    <Container>
      <Row>
        {/* sidebar */}
        <Col xs={2}>
          <Navi />
          <button onClick={signOut}>Sign Out</button>
        </Col>
        {/* rest of content */}
        <Col></Col>
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
