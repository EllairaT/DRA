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
function NewDRAForm({ newJob }) {

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

    // for Alert message
    // variant is the type/look of the alertBox 
    const [variant, setVariant] = useState('')
    const [text, setText] = useState('')

    // Store ID of recently made entry
    // Needed for dynamic routing
    const [id, setId] = useState('')

    // Gets the entry just made
    const FindId = async () => {
        try {
            const jobRes = await fetch(`${server}/api/jobs`, {
                // calling method type
                method: 'COPY'
            })
            const { data } = await jobRes.json()
            setId(data._id)
            
        } catch (error) {
            console.log(error)
        }
    }

    // Stores to database
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
            setVariant('success')
            setText('Success, you may now return home or make new assessment for this job')
            FindId()

        } catch (error) {
            setVariant('danger')
            setText('Failed please try again')
            console.log(error)
        }
    }

    // on submit
    const onSubmit = (e) => {
        e.preventDefault()
        setVariant('')
        setText('')
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
                    <h2>Schedule new Job</h2>
                </Row>
                <Form className={AssessmentCSS.form}>
                    <Form.Group className="mb-3" controlId="formSiteDetails">
                        <Row>
                            <Col>
                                <Input
                                    type="text"
                                    label="Job Site:"
                                    placeholder="Name of Location"
                                    name="site"
                                    onChange={inputsHandler}
                                />
                                <Input
                                    type="text"
                                    label="Job Address:"
                                    placeholder="Address of Location"
                                    name="siteAddress"
                                    onChange={inputsHandler}
                                />
                                <Input
                                    type="text"
                                    label="Description:"
                                    placeholder="Description of Location"
                                    name="siteType"
                                    onChange={inputsHandler}
                                />
                                <Input
                                    type="notes"
                                    label="Notes"
                                    placeholder="What have you noticed..."
                                    name="notes"
                                    onChange={inputsHandler}
                                />
                                <Row>
                                    <Col>
                                        <Input
                                            type="tel"
                                            label="phone Number:"
                                            placeholder="phone Number of Location"
                                            name="phone"
                                            onChange={inputsHandler}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            type="date"
                                            label="Date:"
                                            name="date"
                                            onChange={inputsHandler}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            label="Time:"
                                            type="time"
                                            name="Time"
                                            onChange={inputsHandler}
                                        />
                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                        <Button
                            as="input"
                            type="submit"
                            value="Submit"
                            className={AssessmentCSS.button}
                            onClick={onSubmit}
                        />
                    </Form.Group>
                    {/* Alert message after submit */}
                    {/* True if variant is not empty */}
                    {variant && (
                        <>
                            <Alert variant={variant}>
                                {text}
                                <br />
                                <Button href='../' className={AssessmentCSS.button} >
                                    Home
                                </Button>
                                {/* the id allows createAssessment page to get the id for a more easy search */}
                                <Button href={`../createAssessment/${id}`} className={AssessmentCSS.button} >
                                    New Assessment
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
