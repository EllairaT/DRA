import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Input from './Input'

const JobCard = ({job}) => {
  return (
    <>
      <Container>
          <h1>{job.site}</h1>
          <p>{job.siteAddress}</p>
          <p>{job.date}</p>
      </Container>
    </>
  )
}
export default JobCard