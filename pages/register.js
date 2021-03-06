// register user will only be available to an existing manager user(for now)
import { signIn, getSession, getProviders } from 'next-auth/react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Input from '../components/Input'
import { server } from '../config/index'

/**
 *
 * @param {} param0
 * @returns {void}
 * @author Ellaira
 */

function Register() {
  const [details, setDetails] = useState({
    userName: '',
    userEmail: '',
    userPassword: ''
  })

  // submit input to register API
  const submitHandler = async (e) => {
    e.preventDefault()

    const res = await fetch(`${server}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: details.userEmail,
        name: details.userName,
        password: details.userPassword
      })
    })
    // await for response
    const data = await res.json()
  }

  // assign input values to details
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
          <Card>
            <div className="my-auto mx-md-5 px-md-5 right">
              <Form>
                <div className="h5">Login to your account</div>
                <Form.Group controlId="loginDetails">
                  <Input
                    label="Email"
                    type="email"
                    name="userEmail"
                    placeholder="example@outlook.com"
                    onChange={inputHandler}
                  />
                  <Input
                    label="Username"
                    type="text"
                    name="userName"
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

export default Register

export async function getServerSideProps(context) {
  const { req, res } = context
  const session = await getSession({ req })
  if (res && session) {
    // check if session.user is an admin
    // if yes, provide access
    // otherwise, redirect to index
  }

  return {
    props: { session }
  }
}
