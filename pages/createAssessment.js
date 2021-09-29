import Container from 'react-bootstrap/Container'
import Form from '../components/newAssessmentForm'
import Navi from '../components/Navi'

import 'bootstrap/dist/css/bootstrap.min.css'

function NewAssessment() {
  return (
    <>

      <Navi />
      <Container>
        <Form />
      </Container>
    </>
  )
}
export default NewAssessment
