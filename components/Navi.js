import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { CalendarPlus, JournalPlus, ClockHistory, HouseDoor } from 'react-bootstrap-icons'
import NavCSS from './Navi.module.css'
import logoimg from '../hardHat.jpg'

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
        <Nav.Item className={NavCSS.image}>
          <Image src = {logoimg} size ={10}/>
        </Nav.Item>
        <Nav.Link href="/" className={NavCSS.icons}>
          <HouseDoor size={40} />
        </Nav.Link>
        <Nav.Link href="/createAssessment" className={NavCSS.icons}>
          <JournalPlus size={40} />
        </Nav.Link>
        <Nav.Link href="/scheduleAssessment" className={NavCSS.icons}>
          <CalendarPlus size={40} />
        </Nav.Link>
        {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
      </Nav>
    </>
  )
}

export default Navi
