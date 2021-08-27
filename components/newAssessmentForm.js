import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Input from './Input'
import { server } from '../config'

function NewDRAForm(props) {
  const [job, setJob] = useState({
    assessment: [],
    siteTags: [],
    createdAt: `${Date()}`,
    date: '',
    site: '',
    siteAddress: '',
    siteType: '',
    phone: '',
    inspector: '',
    notes: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    createJob()
  }

  // Stores to database
  const createJob = async () => {
    try {
        const res = await fetch(`${server}/api/jobs`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(job)
        })
        alert('Success')
    } catch (error) {
        alert('Failed')
        console.log(error);
    }
}

  const inputsHandler = (e) => {
    // update the attributes in object
    const { name } = e.target
    const { value } = e.target
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
          <Form.Group className="mb-3" controlId="formSiteDetails">
            <Input type="text" label="Job Site:" placeholder="Name of Location" name="site" onChange={inputsHandler} />
            <Input type="text" label="Job Address:" placeholder="Address of Location" name="siteAddress" onChange={inputsHandler} />
            <Input type="text" label="Description:" placeholder="Description of Location" name="siteType" onChange={inputsHandler} />

            <Row>
              <Col>
                <Input type="tel" label="phone Number:" placeholder="phone Number of Location" name="phone" onChange={inputsHandler} />
              </Col>
              <Col>
                <Input label="Date:" type="date" name="date" onChange={inputsHandler} />
              </Col>
              {/* <Col>
                <Input label="Time:" type="time" name="Time" onChange={inputsHandler} />
              </Col> */}
            </Row>
            <Input type="text" label="Notes:" placeholder="Notes about Location" name="notes" onChange={inputsHandler} />
            <Button as="input" onClick={onSubmit} value="submit" />
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}
export default NewDRAForm