import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { CalendarPlus, JournalPlus, ClockHistory, HouseDoor, BoxArrowLeft } from 'react-bootstrap-icons'
import NavCSS from '../styles/Navi.module.css'
import logoimg from '../hardHat.png'
import { signOut } from 'next-auth/react'
import cx from 'classnames'
/**
 * Returns a React Sidebar
 * @component
 *
 * @returns {Component} Navigation Menu
 *
 * @author Victor
 * @author Ellaira
 */
function Navi() {
  return (
    <>
      <Nav className={NavCSS.customnav}>
        <Nav.Item className={NavCSS.image}>
          <Image src={logoimg} size={10} />
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
        <Nav.Link onClick={() => signOut()} className={cx('position-absolute bottom-0 start-0 mb-3', NavCSS.icons)}>
          <BoxArrowLeft size={40} />
        </Nav.Link>
      </Nav>
    </>
  )
}

export default Navi
