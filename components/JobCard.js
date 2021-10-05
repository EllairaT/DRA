import Container from 'react-bootstrap/Container'
import { Clock, Phone, Geo } from 'react-bootstrap-icons'
import { Row, Card, DropdownButton, Dropdown } from 'react-bootstrap'
import Input from './Input'

/**
 * Bootstrap Card that contains job information
 * @component
 * @param {Object} job job information. See {@link models/job.model.js}
 * @returns {Component} Card
 * @author Victor
 */
function JobCard({ job }) {
  // const

  function formatDate(){
    let date = job.date.substring(0,10)
    return date.substring(8,10)+'/'+date.substring(5,7)+'/'+date.substring(0,4)
  }

  return (
    <>
      <Card style={{ width: '50rem' }}>
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
            {formatDate()}
          </p>
          {/* DropDown menu*/}
          <DropdownButton variant='Secondary' >
            <Dropdown.Item href={`../createAssessment/${job._id}`}>Add assessment</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Card>
    </>
  )
}
export default JobCard
