import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Input from './Input'

export default function NewDRAForm(props) {

  const [job, setJob] = useState({
    JobSite: '',
    JobAddress: '',
    JobSiteDescription: '',
    Phone: '',
    Date: '',
    Time: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    // Needed to be added to database to store
    alert(`Submitting ${job.JobSite}, ${job.JobAddress}, ${job.JobSiteDescription}, ${job.Phone}, ${job.Date}, ${job.Time}`)

  }
  const inputsHandler = (e) => {
    // update the attributes in object
    const {name} = e.target
    const {value} = e.target
    job[name] = value
    setJob(job)

  }

  return (
    <>
      <Container>
        <Row>
          <h2>Create new Assessment</h2>
        </Row>
        <Form>
          Job Site:
          <Input type="text" placeholder="Name of Location" name="JobSite" onChange={inputsHandler} />
          

          Job Address:
          <Input type="text" placeholder="Address of Location" name="JobAddress" onChange={inputsHandler} />
          

          Job Site Description:
          <Input type="text" placeholder="Description of Location" name="JobSiteDescription" onChange={inputsHandler} />
          

          <Row>
            <Col>
              Phone:
              <Input type="tel" placeholder="Phone Number of Location" name="Phone" onChange={inputsHandler} />
              
            </Col>
            <Col>
              Date:
              <Input type="date" name="Date" onChange={inputsHandler} />
              
            </Col>
            <Col>
              Time:
              <Input type="time" name="Time" onChange={inputsHandler} />
              
            </Col>
          </Row>
          <Button as="input" onClick={onSubmit} value="submit" />
        </Form>
      </Container>
    </>
  )
}
