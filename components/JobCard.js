import Container from 'react-bootstrap/Container'
import { Clock, Phone, Geo } from 'react-bootstrap-icons'
import Row from 'react-bootstrap/Row'
import Input from './Input'

const JobCard = ({job}) => (
    <>
      <Container>
      {/* &ensp; adds 2 spaces */}
        <h1>{job.site} | {job.siteType}</h1>

        <p>
        <Geo size={20} />
        &ensp;{job.siteAddress}</p>

        <p><Phone size={20} />
        &ensp;{job.phone}</p>

        {/* have to be view in dd-mm hh-mm format */}
        <p><Clock size={20} />
        &ensp;{job.date}</p>
      </Container>
    </>
  )
export default JobCard