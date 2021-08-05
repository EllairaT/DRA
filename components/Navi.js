import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { CalendarPlus, JournalPlus, ClockHistory, HouseDoor } from 'react-bootstrap-icons'
import NavCSS from './Navi.module.css'

/**
 * Navigation menu.
 * Uses custom css module. 
 * Bootstrap icons are of size 30.
 * @component
 * @returns {Component} 
 */
function Navi() {
  return (
    <>
      <Nav className={NavCSS.customnav}>
        <Nav.Link href="/" className={NavCSS.icons}>
          <HouseDoor size={30} />
        </Nav.Link>
        <Nav.Link href="/createAssessment" className={NavCSS.icons}>
          <JournalPlus size={30} />
        </Nav.Link>
        <Nav.Link href="/scheduleAssessment" className={NavCSS.icons}>
          <CalendarPlus size={30} />
        </Nav.Link>
        {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
      </Nav>
    </>
  )
}

export default Navi
