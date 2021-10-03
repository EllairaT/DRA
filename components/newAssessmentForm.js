import { Container, Row, Form, Col, Button, Alert } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import Image from 'next/image'
import Input from './Input'
import logoimg from '../saveImage.jpg'
import Prompt from './Prompt'
import AssessmentCSS from '../styles/Assessment.module.css'
import { server } from '../config'
/**
 * Functional Component that returns a Form to add Job information
 * @component
 * @namespace NewDRAForm
 * @param {Object} props
 * @param {Array<Object>} props.assessment - array of assessment (JSON) objects
 * @param {Array<String>} props.siteTags - array of strings for tags relating to the site
 * @param {Date} props.createdAt - date when Job was created
 * @param {Date} props.date - date of job
 * @param {String} props.site - name of the job site
 * @param {String} props.siteAddress - address of the job site
 * @param {String} props.siteType - type of job e.g. Construction
 * @param {String} [props.phone] - phone number of the site
 * @param {String} props.inspector - inspector assigned to job
 * @param {String} [props.notes] - any additional notes
 * @returns {Component} Form
 *
 * @author Victor
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

  const [id, setId] = useState(props.props)

  
  /**
   * Function to store to database
   * @async
   * @function createAssessment
   * @memberof NewDRAForm
   * @returns {Promise<Object>} data from api
   */
  // Stores to database
  const createAssessment = async () => {
    try {
      const res = await fetch(`${server}/api/jobs/${id}`, {
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

  /**
   * submit handler
   * @function onSubmit
   * @memberof NewDRAForm
   * @param {*} e - event target
   * @returns {void}
   */
  const onSubmit = (e) => {
    e.preventDefault()
    setVariant('')
    setText('')
    createAssessment()
  }

  /**
   * input handler
   * @function inputsHandler
   * @memberof NewDRAForm
   * @param {*} e - event target
   * @returns {void}
   */
  const inputsHandler = (e) => {
    const { name } = e.target
    const { value } = e.target
    assessment[name] = value
    setAssessment(assessment)

    // setBody is here because OnSubmit it won't work unless buttom is pressed twice 
    setBody({
      // push adds element to array
      $push:
      {
        assessments: assessment
      }
    })
  }

  return (
    <>
      <Container>
        <Row className={AssessmentCSS.header}>
          <h2>Create new Assessment</h2>
          <h1>{id}</h1>
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
                <Button href={`../createAssessment/${id}`} className={AssessmentCSS.button} >
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
