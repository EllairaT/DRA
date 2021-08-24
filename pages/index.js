import { Container, Row, Col } from 'react-bootstrap'
import { server } from '../config'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'
import Login from './login'

/**
 * Entry point of the app.
 * @Category Pages
 */

const Home = ({ jobs }) => {

  console.log(jobs)
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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/jobs`)
  //get jobs from api
  const data = await res.json()
  //jobs put into jobs
  

  return {
    props: { jobs: data }
  }
}

export default Home;
