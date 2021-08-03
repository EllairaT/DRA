import Nav from 'react-bootstrap/Nav'
import customnav from './Navi.module.css'

export default function Navi() {
  return (
    <>
      <Nav className={customnav}>
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/createAssessment">Create New Job</Nav.Link>
        <Nav.Link href="/scheduleAssessment">Schedule New Job</Nav.Link>
        {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
      </Nav>
    </>
  )
}
