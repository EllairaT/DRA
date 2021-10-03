import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import Image from 'next/image'
import Input from './Input'
import logoimg from '../saveImage.jpg'
import Prompt from './Prompt'
import AssessmentCSS from '../styles/Assessment.module.css'

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

  /**
   * Function to store to database
   * @async
   * @function createJob
   * @memberof NewDRAForm
   * @returns {Promise} data from api
   */
  const createJob = async () => {
    try {
      const res = await fetch(`${server}/api/jobs`, {
        // calling method type
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      })
      //TODO: remove alert
      alert('Success')
    } catch (error) {
      alert('Failed')
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
    createJob()
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
