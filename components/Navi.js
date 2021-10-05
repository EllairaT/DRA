import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { CalendarPlus, JournalPlus, ClockHistory, HouseDoor, BoxArrowLeft } from 'react-bootstrap-icons'
import NavCSS from '../styles/Navi.module.css'
import logoimg from '../hardHat.png'
import { signOut } from 'next-auth/react'
import cx from 'classnames'
import dynamic from 'next/dynamic'

//dynamically importing prevents Warning: Prop dangerouslySetInnerHTML did not match
const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false
})

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
      {/* LOGO IMG */}
      <Nav className={NavCSS.customnav}>
        <Nav.Item className={NavCSS.image}>
          <Image src={logoimg} size={10} />
        </Nav.Item>

        {/* HOME ICON */}
        <Nav.Link data-tip data-for="home" href="/" className={NavCSS.icons}>
          <HouseDoor size={40} />
          <ReactTooltip id="home" place="right" backgroundColor="#232323" className={NavCSS.tooltip}>
            Home
          </ReactTooltip>
        </Nav.Link>

        {/* NEW ASSESSMENT */}
        <Nav.Link data-tip data-for="CreateNewAssessment" href="/createAssessment" className={NavCSS.icons}>
          <JournalPlus size={40} />
          <ReactTooltip id="CreateNewAssessment" place="right" backgroundColor="#232323" className={NavCSS.tooltip}>
            Create New Assessment
          </ReactTooltip>
        </Nav.Link>

        {/* SCHEDULE ASSESSMENT */}
        <Nav.Link data-tip data-for="ScheduleNewAssessment" href="/scheduleAssessment" className={NavCSS.icons}>
          <CalendarPlus size={40} />
          <ReactTooltip id="ScheduleNewAssessment" place="right" backgroundColor="#232323" className={NavCSS.tooltip}>
            Schedule New Assessment
          </ReactTooltip>
        </Nav.Link>

        {/* LOGOUT */}
        <Nav.Link
          data-tip
          data-for="logout"
          onClick={() => signOut()}
          className={cx('position-absolute bottom-0 start-0 mb-3', NavCSS.icons)}
        >
          <BoxArrowLeft size={40} />
          <ReactTooltip id="logout" place="right" backgroundColor="#232323" className={NavCSS.tooltip}>
            Log Out
          </ReactTooltip>
        </Nav.Link>
      </Nav>
    </>
  )
}

export default Navi
