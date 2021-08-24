import JobCard from '../components/JobCard'
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

function Home() {
  const [session] = getSession()

  var noJobContent = (
    <>
      <h1>No Scheduled Jobs to Show Today</h1>
      <h4>What would you like to do instead?</h4>
      <Row>
        <Col md={6}>
          <Button href="./scheduleAssessment">Schedule Assessment</Button>
          {'      '}
        </Col>

        <Col md={6}>
          <Button href="./createAssessment">Create New Assessment</Button>
          {'      '}
        </Col>
      </Row>
    </>
  )

  return (
    <>
      <Container>
        <Card>
          <InputGroup>
            {/* add search icon */}
            <InputGroup.Text>Search</InputGroup.Text>
            <FormControl type="text" />
          </InputGroup>

          {/* check if there is session, if no session then show no job content */}
          {!session && <>{noJobContent}</>}
          {session && (
            <>
              <JobCard />
            </>
          )}
        </Card>
      </Container>
    </>
  )
}

export default Home

/* <h1>Dynamic Risk Assessment </h1>
 */
