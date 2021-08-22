import { Container, Row, Col } from 'react-bootstrap'
import { server } from '../config'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'

/**
 * Entry point of the app.
 * @Category Pages
 */

export default function Home({ jobs }) {
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
  //get jobs from api
  const jobs = await res.json()
  //jobs put into jobs
  console.log(jobs)
  if (!jobs) {
    return {
      notFound: true,
    }
  }
  return { props: { jobs } }

}