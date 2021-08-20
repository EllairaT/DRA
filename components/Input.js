/** @module App */
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

/**
 * Generic input field for entering information
 * @component
 * @param {object} props - Array of props (strings, ints, etc)
 * @property {String} type - type of input (i.e. email, password, number, etc)
 * @returns {FormControl}
 */
function Input(props) {
  const { type, label, placeholder, arialabel, ariadescribe, onChange, name } = props
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className=""
        type={type}
        placeholder={placeholder}
        aria-label={arialabel}
        aria-describe
        dby={ariadescribe}
        onChange={onChange}
        name={name}
      />
    </>
  )
}

export default Input
