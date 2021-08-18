import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Input from './Input'

/*
Author: Jarod
Updated : 18/08/21
Desc: This component creates a promt that is opened by clicking. 
Uses react-bootstrap Modal 
*/console
function Example() {
    
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
  
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}> 
        Hint
      </Button>  */}      
        <Modal show={show} onload={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Weather</Modal.Title>
          </Modal.Header>
          <Modal.Body>Have you thought about how the weather is affecting the job site today? 
          <Input type="text" placeholder="Rainy/Sunny/Windy/Foggy" name="JobSite" /> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example