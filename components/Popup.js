import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

/**
 * Calling Popup will return a modal object to be shown to the user.
 * @component
 * @param {Object} props json object containing string and helper function information
 * @param {boolean|string} props.show determine if popup is showing. Default value will be false.
 * @param {function} props.handleShow function to fire when `event:onLoad` is triggered from the Modal
 * @param {function} props.handleClose function to fire when `event:onClick` is triggered from the Button
 * @param {string} props.title title string
 * @param {string} props.body body string
 *
 * @returns {Component} Modal
 *
 */
function Popup(props) {
  const { show, handleShow, handleClose, title, body } = props
  return (
    <>
      <Modal show={show} onLoad={handleShow}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
