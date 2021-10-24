import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import { Component } from 'react'

/**
 * Generic input field for entering information
 * @component
 * @param {object} props - Array of props (strings, ints, etc)
 * @property {String} type - type of input (i.e. email, password, number, etc)
 * @returns {Component} Form Control
 *
 * @author Ellaira
 */
function Input(props) {
  const { type, label, placeholder, arialabel, ariadescribe, onChange, name, as } = props
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className=""
        type={type}
        placeholder={placeholder}
        aria-label={arialabel}
        aria-describedby={ariadescribe}
        onChange={onChange}
        name={name}
        as={as}
      />
    </>
  )
}

export default Input
