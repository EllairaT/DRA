
import { Row, Col, Card, Form } from 'react-bootstrap'
import Image from 'next/image'
import Input from '../components/Input'
import logoimg from '../1.png'
import loginImg from './login.module.css'

function Login() {
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Card className="loginCard p-0 m-0">
                <Row>
                    <Col md={6}>
                        <div className="align-left">
                            <div className={loginImg.unsetImg}>
                                <Image src={logoimg} alt="Img" layout="fill" className={loginImg.customImg} />
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <Card.Body className="m-0">Login
                            <Form>
                                <Input label="Username" type="email" placeholder="example@outlook.com" />
                                <Input label="Password" type="password" placeholder="Enter password" />
                                <Form.Text>Never tell anyone your password. </Form.Text>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div >
    )
}

export default Login