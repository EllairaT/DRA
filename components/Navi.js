import Nav from 'react-bootstrap/Nav'

export default function Navi() {
  return (
    <>
      <Nav className="flex-column">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/createAssessment">Create New Job</Nav.Link>
        {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
      </Nav>
    </>
  )
}
