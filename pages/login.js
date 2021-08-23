import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Image from 'next/image'
import connectToDatabase from '../lib/dbConnect'
import Input from '../components/Input'
import logoimg from '../1.png'
import login from './login.module.css'
import { signIn } from 'next-auth/client'

function Login() {
  const [details, setDetails] = useState({
    userEmail: '',
    userPassword: ''
  })

  const submitHandler = (e) => {
    e.preventDefault(details.userEmail, details.userPassword)
    console.log()
    signIn('credentials', {
      redirect: false,
      email: details.userEmail,
      password: details.userPassword
    })
  }

  const inputHandler = (e) => {
    const { name } = e.target
    const { value } = e.target
    details[name] = value
    setDetails(details)
  }

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Card className="container p-0 mx-auto">
        <div className="d-flex">
          <Card className={login.left}>
            <Image src={logoimg} alt="Main Image" />
          </Card>
          <Card className={login.right}>
            <div className="my-auto mx-md-5 px-md-5 right">
              <Form>
                <div className="h5">Login to your account</div>
                <Form.Group controlId="loginDetails">
                  <Input
                    label="Email address"
                    type="email"
                    name="userEmail"
                    placeholder="example@outlook.com"
                    onChange={inputHandler}
                  />
                  <Input
                    label="Password"
                    type="password"
                    name="userPassword"
                    placeholder="Enter password"
                    onChange={inputHandler}
                    required
                  />
                  <Form.Text>Never tell anyone your password. </Form.Text>
                  <Button as="input" type="submit" value="Submit" onClick={submitHandler} />
                  
                </Form.Group>
              </Form>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}

export default Login

//check if user is already signed in. if so, redirect user to homepage
Login.getInitialProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req })

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
    return
  }
  return {
    session: undefined,
    providers: await providers(context)
  }
}
