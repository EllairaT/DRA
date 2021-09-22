import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Input from '../components/Input'
import logoimg from '../1.png'
import login from '../styles/login.module.css'
import { signIn, getSession, useSession, getProviders, getCsrfToken } from 'next-auth/react'

function Login({ csrfToken }) {
  const [providers, setproviders] = useState()
  const [details, setDetails] = useState({
    userEmail: '',
    userPassword: ''
  })

  console.log('providers', providers)
  useEffect(() => {
    const setProviders = async () => {
      const setUpProviders = await getProviders()
      setproviders(setUpProviders)
    }
    setProviders()
  }, [])

  const submitHandler = (e) => {
    e.preventDefault(details.userEmail, details.userPassword)
    signIn('credentials', {
      id: 'creds',
      callbackUrl: 'http://localhost:3000/',
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

  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (session) {
    return (
      <>
        Currently Signed in as {session?.user.email}
        <Button className="btn-primary btn" onClick={() => signOut()} />
      </>
    )
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
              <Form method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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
                  <Button as="input" onClick={submitHandler} />
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
  //get session from the request, so that user does not keep logging in
  if (session && res) {
    console.log('sdafjasdh')
    return {
      redirect: {
        destination: 'http://localhost:3000/', // some destination '/dashboard' Ex,
        permanent: false
      }
    }
  }
  return {
    props: {
      session,
      csrfToken: await getCsrfToken(context),
      providers: await getProviders(context)
    }
  }
}
