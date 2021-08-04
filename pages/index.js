import { Container, Row, Col } from 'react-bootstrap'
import JobCard from '../components/JobCard'
import Navi from '../components/Navi'

export default function Home() {
  return (
    <>
      <h1>Dynamic Risk Assessment </h1>
      <Navi />
      <JobCard />
    </>
  )
}
