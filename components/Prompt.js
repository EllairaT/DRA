import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Modal from 'react-bootstrap/Modal'
import Popup from './Modal'
import Input from './Input'

/*
Author: Jarod
Updated : 18/08/21
Desc: This component creates a promt that is opened by clicking. 
Uses react-bootstrap Modal 
*/
function Prompt() {
  const [show, setShow] = useState(true)
  const close = () => setShow(false)
  const popupShow = () => setShow(true)
  return (
    <>
      <Button variant="primary" onClick={popupShow}>
        Hint
      </Button>
      <Popup show={show} handleShow={popupShow} handleClose={close} title="Weather" body="hello" />
    </>
  )
}
export default Prompt