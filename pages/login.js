import Image from 'next/image'
import { Row, Col, Card, Form } from 'react-bootstrap'
import Input from '../components/Input'
import logoimg from '../1.png'

function Login() {
    return (
        <>
            <Card className="loginCard">
                <Row>
                    <Col xs={6}>
                        <Image src={logoimg} alt="Img" />
                    </Col>
                    <Col>
                        <Form>
                            <Card.Body className="">This is some text within a card body.</Card.Body>
                            <Input label="Username" type="email" placeholder="example@outlook.com" />
                            <Input label="Password" type="password" placeholder="Enter password" />
                            <Form.Text>Never tell anyone your password. </Form.Text>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Login