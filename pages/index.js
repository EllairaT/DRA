import { Container, Row, Col, Button } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/client'
import JobCard from '../components/JobCard'
// import { server } from '../config'
import Navi from '../components/Navi'
import Login from './login'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import { Container, Form, FormControl, InputGroup, CardGroup, Card, Row, Col } from 'react-bootstrap'
import createAssessment from '../pages/createAssessment'
import { Search } from 'react-bootstrap-icons'
import Input from '../components/Input'
import { getSession } from 'next-auth'
/**
 * Entry point of the app.
 * @Category Pages
 */

function Home({ jobs }) {
  // access session
  const [session, loading] = useSession()

  // print out jobCard
  const printJobs = (
    <>
      {jobs.map((job) => (
        <>
          <JobCard job={job} />
        </>
      ))}
    </>
  )

  const content = (
    <Container>
      <Row>
        {/* sidebar */}
        <Col xs={2}>
          <Navi />
          <Button onClick={signOut}>Sign Out</Button>
        </Col>
        <h1>Dynamic Risk Jobs </h1>
        {printJobs}

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

export async function getStaticProps() {
  // const res = await fetch(`${server}/api/jobs`)
  const res = await fetch('http://localhost:3000/api/jobs')
  // get jobs from api
  const { data } = await res.json()
  // jobs put into jobs
  // console.log(data)
  const session = await getSession(context)

  return {
    props: { jobs: data, session  }
  }
}

export default Home
