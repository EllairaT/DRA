import Container from 'react-bootstrap/Container'
import Form from '../../../components/newAssessmentForm'
import Navi from '../../../components/Navi'
import { server } from '../../../config'
import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.min.css'


function NewAssessment({ props }) {

    // gets the id from the url string
    const router = useRouter()
    const { id } = router.query
    
    return (
        <>
            <Navi />
            <Container>
            <Form props={id} />
            </Container>
        </>
    )
}

export default NewAssessment
