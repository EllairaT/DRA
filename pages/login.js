import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Input from '../components/Input'
import logoimg from '../1.png'
import login from '../styles/login.module.css'
import { signIn, signOut, getSession, useSession, getProviders, getCsrfToken } from 'next-auth/react'

function Login({ csrfToken }) {
  //csrf token is for email signin. For now we have emails
  //saved in MongoDB. Might need to change that in the future
  //to validate email addressess

  const [details, setDetails] = useState({
    userEmail: '',
    userPassword: ''
  })

  const submitHandler = (e) => {
    e.preventDefault(details.userEmail, details.userPassword)
    signIn('creds', {
      callbackUrl: 'http://localhost:3000',
      id: 'creds',
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
                {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
                <div className="h5">Login to your account</div>
                <Form.Group controlId="loginDetails">
                  <Input
                    label="Email"
                    type="text"
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
                  {''}
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

export async function getServerSideProps(context) {
  const { req, res } = context
  const session = await getSession({ req })
  if (res && session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
