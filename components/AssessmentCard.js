import { Container, Row, Form, Col, Button, Alert, FloatingLabel, Card } from 'react-bootstrap'
import Input from './Input'

/**
 * @component
 * @author Victor
 */
function AssessmentCard({ assessment }) {
    return (
        <>
            <Container>
                <Card>
                    <Card.Header>{assessment.JobSite}</Card.Header>
                    <Card.Body>

                        <h5>
                            Time
                        </h5>
                        <p>
                            {assessment.time}
                        </p>
                        <h5>
                            Notes
                        </h5>
                        <p>
                            {assessment.Notes}
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default AssessmentCard
