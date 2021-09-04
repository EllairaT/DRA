import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Popup(props){
    const {show, handleShow, handleClose, title, body} = props
    return (
        <>
        <Modal show={show} onload={handleShow}>

            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleClose} >Close</Button>
                
            </Modal.Footer>

        </Modal>
        </>
    )

}
export default Popup