import Form from '../components/newAssessmentForm'
import Navi from '../components/Navi'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

export default function New_job() {
  return (
    <>

      <h1>Create New Job</h1>
      <Navi />
      <Container>
        <Form />
      </Container>

    </>
  )
}
