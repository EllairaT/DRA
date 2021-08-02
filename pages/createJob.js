import Form from '../components/newJobForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navi from '../components/Navi'
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
