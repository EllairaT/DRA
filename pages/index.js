import { Row, Col, Button, Modal } from 'react-bootstrap'
import { useSession, getSession, signIn } from 'next-auth/react'
import cx from 'classnames'
import JobCard from '../components/JobCard'
// import createAssessment from './createAssessment'
import indexCSS from '../styles/index.module.css'
import { server } from '../config/index'

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

  // print out jobCard
  const printJobs = () => (
    <>
      {jobs.map((job, i) => (
        <JobCard job={job} key={job._id} />
      ))}
    </>
  )

  const printButtons = () => (
    <>
      <h1>No jobs found</h1>

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
    </>
  )

  const content = (
    <>
      <h1>Dynamic Risk Jobs </h1>
      {/* check if jobs are empty */}
      {Object.keys(jobs).length === 0 ? printButtons() : printJobs()}

      <h6 className="text-primary">Signed in as {session?.user.name || 'guest'}</h6>
    </>
  )

  return (
    <>
      {/* show login page if there is no session */}
      {!session && (
        <Modal show centered>
          <Modal.Header>
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
        </Modal>
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
  const jobRes = await fetch(`${server}/api/jobs/`)
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
