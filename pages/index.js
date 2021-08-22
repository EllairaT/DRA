import { Container, Row, Col } from 'react-bootstrap'
import { server } from '../config'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'

// isomorphic-unfetch allows https request to be made

/**
 * Entry point of the app.
 * @Category Pages
 */
function Home({ jobs }) {
  return (
    <>
      <h1>Dynamic Risk Assessment </h1>
      <div>
        {jobs.map((job) => {
          return (
            <div key={job._id}>
              <JobCard job={job} />
            </div>
          )
        })}
      </div>

    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/jobs`)
  //get data from api
  const jobs = await res.json()
  //data put into jobs

  if (!jobs) {
    return {
      notFound: true,
    }
  }
  return { props: { jobs } }
}

export default Home