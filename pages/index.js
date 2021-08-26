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
      {jobs.map((job) => {
        return (
          <JobCard job={job} />
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/jobs`)
  //get jobs from api
  const { data } = await res.json()
  //jobs put into jobs
  console.log(data)

  return { 
    props: {jobs: data }
  }
}