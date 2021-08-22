import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Input from './Input'
import logoimg from '../saveImage.jpg'
import Image from 'next/image'
import Prompt from '../components/Prompt'
import AssessmentCSS from './Assessment.module.css'

function NewDRAForm(props) {
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
    alert(
      `Submitting ${job.JobSite}, ${job.JobAddress}, ${job.JobSiteDescription}, ${job.Phone}, ${job.Date}, ${job.Time}`
    )
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
        <Row className={AssessmentCSS.header}>
          <h2>Create new Assessment</h2>
        </Row>
        <Form className={AssessmentCSS.form}>
          <Form.Group className="mb-3" controlId="formSiteDetails">
            <Row>
              <Col>
                <Row className={AssessmentCSS.row}>
                  <Input type="text" label="Job Site:" placeholder="Name of Location" name="JobSite" onChange={inputsHandler} />
                </Row>
                {/* <Input type="text" label="Job Address:" placeholder="Address of Location" name="JobAddress" onChange={inputsHandler} /> */}
                {/* <Input type="text" label="Description:" placeholder="Description of Location" name="JobSiteDescription" onChange={inputsHandler} /> */}

                <Row className={AssessmentCSS.textArea}>
                  <Input type="notes" label="Notes" placeholder="What have you noticed..." name="Notes" onChange={inputsHandler} />
                  {/* <Col> 
                <Input type="tel" label="Phone Number:" placeholder="Phone Number of Location" name="Phone" onChange={inputsHandler} />
              </Col>
              <Col>
                <Input label="Date:" type="date" name="Date" onChange={inputsHandler} />
              </Col>
              <Col>
                <Input label="Time:" type="time" name="Time" onChange={inputsHandler} />
              </Col>*/}
                </Row>
              </Col>
              <Col>
                <Image src={logoimg} size={10} />
              </Col>
            </Row>
            <Button className={AssessmentCSS.button} as="input" onClick={onSubmit} value="submit" />
            <Prompt />
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}
export default NewDRAForm