import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import AssessmentCard from './AssessmentCard'

/**
 * @component
 * @author Victor
 */
function FullJobCard({ props }) {
    const [job, setJob] = useState(props)
    const [assessment, setAssessment] = useState(job.assessments)

    console.log(assessment)
    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <h1>{job.site}</h1>
                        <p>{job.siteType}</p>
                        <h3>
                            Address
                        </h3>
                        <p>
                            {job.siteAddress}
                        </p>
                        <Row>
                            <Col>
                                <h3>
                                    Date
                                </h3>
                                <p>
                                    {job.date}
                                </p>
                            </Col>
                            <Col>
                                <h3>
                                    Phone
                                </h3>
                                <p>
                                    {job.phone}
                                </p>
                            </Col><Col>
                                <h3>
                                    Created At
                                </h3>
                                <p>
                                    {job.createdAt}
                                </p>
                            </Col>
                        </Row>
                        <h3>
                            Notes
                        </h3>
                        <p>
                            {job.notes}
                        </p>
                        <Row>
                            <Col>
                        <h1>Assessments</h1>
                        </Col>
                        <Col>
                        <Button>New Assessment</Button>
                        </Col>
                        </Row>
                        {/* Show if assessment is not null */}
                        {assessment && (
                            <>
                                {assessment.map((assessment, i) => (
                                    <AssessmentCard assessment={assessment} key={i} />
                                ))}
                            </>
                        )}
                        {assessment.length === 0 && (
                            <>
                                <Card><h1>No Assessments</h1></Card>
                            </>
                        )}

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}


export default FullJobCard