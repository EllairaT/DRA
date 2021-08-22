import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
//import Modal from 'react-bootstrap/Modal'
import Popup from './Modal'
import Input from './Input'

/*
Author: Jarod
Updated : 18/08/21
Desc: This component creates a promt that is opened by clicking. 
Uses react-bootstrap Modal 
*/
function Prompt() {
    let data =[['Weather', 'Have you thought about the weather in this area today?'],['Below Risks', 'Have you checked beneath you for any risks?'],
    ['Above Risks', 'Have you looked up? Is there any potential for harm?'], ['Whoose in Charge?', 'Is the safety warden working? Are they aware of immediate risks? '],
    ['Level Risks', 'Are there any risks at ground level?'], ['Uniform', "Is everyone wearing the correct equipment for their roles?"]]

    const hint = Math.floor(Math.random() * 6);
    const [show, setShow] = useState(false)
  
    const close = () => setShow(false);
    const popupShow = () => setShow(true)
    

  return (
    <>
    
    <Button variant="primary" onClick={popupShow}> 
    Hint
    </Button>  
  <Popup show = {show} handleShow = {popupShow} handleClose = {close} title = {data[hint][0]} body = {data[hint][1]}/>
  </>
  ) }
   

  export default Prompt