import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import Image from 'next/image'
import Input from './Input'
import logoimg from '../saveImage.jpg'
import Prompt from './Prompt'
import AssessmentCSS from '../styles/Assessment.module.css'
import { server } from '../config'
/**
 * @component
 * @param {*} props
 * @returns {Component} Form
 */
function NewDRAForm(props) {
  const [job, setJob] = useState({
    JobSite: '',
    Notes: '',
    URL: '',
    time: `${Date()}`
  })
  
  // Stores to database
  // Current not working yet
  const createJob = async () => {
    try {
      const res = await fetch(`${server}/api/jobs/6154232f1fc4822240747237`, {
        // calling method type
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      })
      alert('Success')
    } catch (error) {
      alert('Failed')
      console.log(error)
    }
  }

  // on submit
  const onSubmit = (e) => {
    e.preventDefault()
    createJob()
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
                  <Input
                    type="text"
                    label="Job Site:"
                    placeholder="Name of Location"
                    name="JobSite"
                    onChange={inputsHandler}
                  />
                </Row>
                {/* <Input type="text" label="Job Address:" placeholder="Address of Location" name="JobAddress" onChange={inputsHandler} /> */}
                {/* <Input type="text" label="Description:" placeholder="Description of Location" name="JobSiteDescription" onChange={inputsHandler} /> */}

                <Row className={AssessmentCSS.textArea}>
                  <Input
                    type="notes"
                    label="Notes"
                    placeholder="What have you noticed..."
                    name="Notes"
                    onChange={inputsHandler}
                  />
                  {/* <Col> 
                <Input type="tel" label="Phone Number:" placeholder="Phone Number of Location" name="Phone" onChange={inputsHandler} />
              </Col>
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
              </Col>
              <Col>
                <Image src={logoimg} size={10} />
              </Col>
            </Row>

            <Button as="input" type="submit" value="Submit" className={AssessmentCSS.button} onClick={onSubmit} />
            <Prompt />
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}
export default NewDRAForm
