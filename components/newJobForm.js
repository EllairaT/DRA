import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import Input from './Input'

export default function newDRAForm() {
  return (
    <>
      <Container>
        <Row>
          <h1>Create new Assessment</h1>
        </Row>
        <Form>
          <label>Job Site:</label><Input type="text" placeholder="Name of Location" />
          <label>Job Address:</label><Input type="text" placeholder="Address of Location" />
          <label>Job Site:</label><Input type="text" placeholder="Name of Location" />

          <Row>
            <Col>
              <label>Phone:</label>
              <Input type="tel" placeholder="Phone Number of Location" /></Col>
            <Col>
              <label>Date:</label>
              <Input type="date" />
            </Col>
            <Col>
              <label>Time:</label>
              <Input type="time" />
            </Col>
          </Row>

          <Button as="input" type="submit" value="submit" />

        </Form>

      </Container>
    </>
  )
}
