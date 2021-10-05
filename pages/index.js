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
import { Search } from 'react-bootstrap-icons'
import cx from 'classnames'
import JobCard from '../components/JobCard'
// import { server } from '../config'
import Navi from '../components/Navi'
import Login from './login'
import Input from '../components/Input'
// import createAssessment from './createAssessment'
import indexCSS from '../styles/index.module.css'

/**
 * @category Pages
 * @name Home
 * @param {*} param0
 * @returns {void}
 * @author Ellaira
 * @author Victor
 * @author StJohn
 */
function Home({ jobs }) {
  // access session
  const { data: session, status } = useSession()

  // sort From newest to oldest booking date 
  jobs.sort((a, b) => new Date(b.date) - new Date(a.date))
  

  if (status === 'loading') {
    return <h1>loading...</h1>
  }

  // jobs = {}

  // print out jobCard
  const printJobs = () => (
    <>
      {jobs.map((job, i) => (
        <JobCard job={job} key={i} />
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
      <h6 className="text-primary">Signed in as {session?.user.name || 'guest'}</h6>
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

/**
 * get job and session information from server when page is loaded. Props is passed to the page component.
 * returns page props
 */
export async function getServerSideProps(context) {
  // const res = await fetch(`${server}/api/jobs`)
  // fetch data
  const jobRes = await fetch('http://localhost:3000/api/jobs')
  // get json response for job
  const { data } = await jobRes.json()
  return {
    props: {
      jobs: data,
      session: await getSession(context)
    }
  }
}

export default Home
