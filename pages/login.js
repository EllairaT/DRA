import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn, signOut, getSession, useSession, getProviders, getCsrfToken } from 'next-auth/react'
import { useRouter } from 'next/router'
import Input from '../components/Input'
import logoimg from '../1.png'
import login from '../styles/login.module.css'

/**
 *
 * @param {} param0
 * @returns {void}
 * @author Ellaira
 */
function Login({ csrfToken }) {
  // csrf token is for email signin. For now we have emails
  // saved in MongoDB. Might need to change that in the future
  // to validate email addressess
  const router = useRouter()

  const [details, setDetails] = useState({
    userEmail: '',
    userPassword: ''
  })

  const [error, setError] = useState('')

  const checkInput = () => {
    if (details.userEmail === '' && details.userPassword === '') {
      setError('Please enter your credentials to continue')
      return false
    }
    if (details.userEmail === '') {
      setError('Please enter your email address')
      return false
    }
    if (details.userPassword === '') {
      setError('Please enter your password')
      return false
    }

    return true
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // validate input first
    if (checkInput()) {
      signIn('creds', {
        redirect: false,
        callbackUrl: `${server}`,
        id: 'creds',
        email: details.userEmail,
        password: details.userPassword
      })
        .then((res) => {
          if (res.ok && res.url) {
            // redirect to index if ok
            router.push('/')
          } else if (res.error) {
            setError('Your email or password might be incorrect. Please try again.')
          }
        })
        .catch((err) => setError(err))
    }
  }

  const inputHandler = (e) => {
    const { name } = e.target
    const { value } = e.target
    details[name] = value
    setDetails(details)
  }

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      {/* Right side Image */}
      <Card className="container p-0 mx-auto">
        <div className="d-flex">
          <Card className={login.left}>
            <Image src={logoimg} alt="Main Image" />
          </Card>

          {/* Login form */}
          <Card className={login.right}>
            <div className="my-auto mx-md-5 px-md-5 right">
              <Form onSubmit={submitHandler}>
                {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
                <div className="h5">Login to your account</div>
                <Form.Group controlId="loginDetails">
                  <Input
                    label="Email"
                    type="text"
                    name="userEmail"
                    placeholder="example@outlook.com"
                    onChange={inputHandler}
                    required
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

                  <Button as="input" type="submit" value="Submit" />
                </Form.Group>
                <p className="text-danger mt-5">{error}</p>
              </Form>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}

export default Login

/*
  redirect to index page if there is already a session 
*/
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
