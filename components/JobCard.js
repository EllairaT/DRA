import Container from 'react-bootstrap/Container'
import { Clock, Phone, Geo } from 'react-bootstrap-icons'
import Row from 'react-bootstrap/Row'
import Input from './Input'

/**
 * Bootstrap Card that contains job information
 * @component
 * @param {Object} job job information. See {@link models/job.model.js}
 * @returns {Component} Card
 * @author Victor
 */
function JobCard({ job }) {
  return (
    <>
      <Container>
        <h1>
          {job.site} | {job.siteType}
        </h1>

        <p>
          <Geo size={20} />
          &nbsp;
          {job.siteAddress}
        </p>

        <p>
          <Phone size={20} />
          &nbsp;
          {job.phone}
        </p>

        <p>
          {/* have to be view in dd-mm hh-mm format */}
          <Clock size={20} />
          &nbsp;
          {job.date}
        </p>
      </Container>
    </>
  )
}
export default JobCard
