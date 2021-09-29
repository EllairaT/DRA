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
                                    name="JobAddress"
                                    onChange={inputsHandler} />

                                <Input
                                    type="text"
                                    label="Description:"
                                    placeholder="Description of Location"
                                    name="JobSiteDescription"
                                    onChange={inputsHandler} />


                                <Input
                                    type="notes"
                                    label="Notes"
                                    placeholder="What have you noticed..."
                                    name="Notes"
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
                                        onChange={inputsHandler} />
                                </Col>
                                </Row>
                            </Col>

                        </Row>

                        <Button
                            as="input"
                            type="submit"
                            value="Submit"
                            className={AssessmentCSS.button}
                            onClick={onSubmit} />
                        {/* <Prompt /> */}
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
export default NewDRAForm
