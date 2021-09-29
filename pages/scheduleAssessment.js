import Container from 'react-bootstrap/Container'
import Form from '../components/JobForm'
import Navi from '../components/Navi'

import 'bootstrap/dist/css/bootstrap.min.css'

function scheduleAssessment() {
  return (
    <>
      {/* <h1>Create New Job</h1> */}

      <h1>Create New Job</h1>
      <Navi />
      <Container>
        <Form />
      </Container>
    </>
  )
}
export default scheduleAssessment
