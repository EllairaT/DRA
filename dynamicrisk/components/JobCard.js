import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Input from './Input'

export default function JobCard() {
  {
    return (
      <>
        <Container>
          <Row>
            <h1>Job Title</h1>
          </Row>
          <Input type="email" placeholder="richmond@gmail.com" />
        </Container>
      </>
    )
  }
}
