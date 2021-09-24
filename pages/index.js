import {
  Container,
  Form,
  FormControl,
  InputGroup,
  CardGroup,
  Card,
  Row,
  Col,
  Button,
  Carousel,
  Modal
} from 'react-bootstrap'
import { signOut, useSession, getSession, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
// import { server } from '../config'
import Navi from '../components/Navi'
import Login from './login'
import Input from '../components/Input'
import createAssessment from '../pages/createAssessment'
import { Search } from 'react-bootstrap-icons'
import session from './api/session'
import indexCSS from '../styles/index.module.css'
import cx from 'classnames'

/**
 * Entry point of the app.
 * @Category Pages
 */

function Home({ jobs }) {
  // access session
  const { data: session, status } = useSession()
  console.log(session?.user.name)
  if (status === 'loading') {
    return <h1>loading...</h1>
  }

  jobs = {}

  // print out jobCard
  const printJobs = () => (
    <>
      {jobs.map((job, i) => (
        <>
          <JobCard job={job} key={i} />
        </>
      ))}
    </>
  )

  const printButtons = () => (
    <>
      <h1>No jobs found</h1>
      <Container>
        <Row>
          <Col className={indexCSS.col}>
            <Button href="/createAssessment" className={cx(indexCSS.btnBlock, indexCSS.create)}>
              {' '}
              Schedule New Job Column
            </Button>
          </Col>

          <Col className={indexCSS.col}>
            <Button href="/createAssessment" className={cx(indexCSS.btnBlock, indexCSS.schedule)}>
              {' '}
              Create New Assessment
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )

  const content = (
    <Container>
      <Row>
        {/* sidebar */}
        <Col xs={2}>
          <Navi />
          <Button onClick={() => signOut()}>Sign Out</Button>
        </Col>
        <h1>Dynamic Risk Jobs </h1>
        {/* check if jobs are empty */}
        {Object.keys(jobs).length === 0 ? printButtons() : printJobs()}
        <Col />
      </Row>
    </Container>
  )

  return (
    <>
      {/* show login page if there is no session */}
      {!session && (
        <>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Unauthenticated User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Please sign in to view this page.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={() => signIn()}>
                Sign In
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      )}
      {/* else, show 'signed in as'  */}
      {session && (
        <>
          {/* Signed in as {session.user.name} */}
          {content}
        </>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  // const res = await fetch(`${server}/api/jobs`)
  //fetch data
  const jobRes = await fetch('http://localhost:3000/api/jobs')
  //get json response for job
  const { data } = await jobRes.json()
  return {
    props: {
      jobs: data,
      session: await getSession(context)
    }
  }
}

export default Home
