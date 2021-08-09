import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Input from '../components/Input'

function Login() {
    return (
        <>
            <Card className="loginCard">
                <Form>
                    <Card.Body className="">This is some text within a card body.</Card.Body>
                    <Input label="Username" type="email" placeholder="example@outlook.com" />
                    <Input label="Password" type="password" placeholder="Enter password" />
                    <Form.Text>Never tell anyone your password. </Form.Text>
                </Form>
            </Card>
        </>
    )
}

export default Login