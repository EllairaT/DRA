import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Clock, Phone, Geo, TypeH3 } from 'react-bootstrap-icons'
import { Row, Card, DropdownButton, Dropdown } from 'react-bootstrap'

/**
 * Bootstrap Card that contains job information
 * @component
 * @param {Object} job job information. See {@link models/job.model.js}
 * @returns {Component} Card
 * @author Victor
 */
function JobCard({ job }) {
  const [date, setDate] = useState(job.date)

  function formatDate() {
    return `${date.substring(8, 10)}/${date.substring(5, 7)}/${date.substring(0, 4)}`
  }

  return (
    <>
      <Card style={{ width: '50rem' }} className="mb-3">
        <Container fluid>
          <p className="h2">
            {job.site} | <small className="text-muted">{job.siteType}</small>
          </p>
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
            {/* {date} */}
          </p>
          {/* DropDown menu */}
          <hr className="m-0" />
          <DropdownButton variant="Secondary" title="Actions" drop="end">
            <Dropdown.Item href={`../createAssessment/${job._id}`}>Add assessment</Dropdown.Item>
            <Dropdown.Item href={`../viewJob/${job._id}`}>View Job</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Card>
    </>
  )
}
export default JobCard
