import { Container, Row, Form, Col, Button, Alert } from 'react-bootstrap'
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
  const [assessment, setAssessment] = useState({
    JobSite: '',
    Notes: '',
    URL: '',
    time: `${Date()}`
  })

  // help with the API body
  const [body, setBody] = useState('')

  // for Alert message
  const [variant, setVariant] = useState('')
  const [text, setText] = useState('')

  // Stores to database
  // Current not working yet
  const createAssessment = async () => {
    try {
      const res = await fetch(`${server}/api/jobs/${props.props}`, {
        // calling method type
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      setVariant('success')
      setText('Success, you may now return home or make another assessment for this job')
    } catch (error) {
      setVariant('danger')
      setText('Failed please try again')
      console.log(error)
    }
  }

  // on submit
  const onSubmit = (e) => {
    
    setBody({
      // push adds element to array
      $push:
      {
        assessments: assessment,
      }
    })
    e.preventDefault()
    createAssessment()
    console.log(body)
    console.log(assessment)
  }
  const inputsHandler = (e) => {
    // update the attributes in object
    const { name } = e.target
    const { value } = e.target
    assessment[name] = value
    setAssessment(assessment)
    
    // set body is here because OnSubmit it won't work unless buttom is pressed twice 
    setBody({
      // push adds element to array
      $push:
      {
        assessments: assessment,
      }
    })
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
                <Row className={AssessmentCSS.textArea}>
                  <Input
                    type="notes"
                    label="Notes"
                    placeholder="What have you noticed..."
                    name="Notes"
                    onChange={inputsHandler}
                  />
                </Row>
              </Col>
              <Col>
                <Image src={logoimg} size={10} />
              </Col>
            </Row>

            <Button
              as="input"
              type="submit"
              value="Submit"
              className={AssessmentCSS.button}
              onClick={onSubmit}
            />
            <Prompt />
          </Form.Group>

          {/* Alert message after submit */}
          {/* True if variant is not empty */}
          {variant && (
            <>
              <Alert variant={variant}> {/* variant is for the look of the alertbox */}
                {text}
                <br />
                <Button href='../' className={AssessmentCSS.button} >
                  Home
                </Button>
                <Button href='../createAssessment' className={AssessmentCSS.button} >
                  Create another Assessment
                </Button>
              </Alert>
            </>
          )}

        </Form>
      </Container>
    </>
  )
}
export default NewDRAForm
