import Container from 'react-bootstrap/Container'
import { Clock, Phone, Geo } from 'react-bootstrap-icons'
import Row from 'react-bootstrap/Row'
import Input from './Input'

const JobCard = ({job}) => {
  return (
    <>
      <Container>

        <h1>{job.site} | {job.siteType}</h1>

        <Geo size={20} />
        <p>{job.siteAddress}</p>

        <Phone size={20} />
        <p>{job.phone}</p>

        {/* have to be view in dd-mm hh-mm format */}
        <Clock size={20} />
        <p>{job.date}</p>
      </Container>
    </>
  )
}
export default JobCard