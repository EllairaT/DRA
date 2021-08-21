import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import { Container, Form, FormControl, InputGroup, CardGroup, Card, Row, Col } from 'react-bootstrap'
import createAssessment from '../pages/createAssessment'
import { Search } from 'react-bootstrap-icons'
import Input from '../components/Input'

/**
 * Entry point of the app.
 * @Category Pages
 */

function Home() {
  return (
    <>
    <Container>
      <Card>
      <InputGroup>
  <InputGroup.Text>Search</InputGroup.Text>
  <Form.Control type="text" />
</InputGroup>     
<h1 >No Scheduled Jobs to Show Today</h1>
<h4>What would you like to do instead?</h4>
<br></br>
        <Col>
          <Row>              
            <Button href="./scheduleAssessment">Schedule Assessment</Button>{'      '}
          </Row>
        </Col>
      <br></br>
      <Col>
        <Row>      
        <Button href="./createAssessment">Create New Assessment</Button>{'      '}
</Row>
</Col>
      </Card>
    </Container>
    </>
  )
}

export default Home



/* <h1>Dynamic Risk Assessment </h1>
      <JobCard /> */

