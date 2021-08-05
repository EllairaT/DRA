/** @module App */
import FormControl from 'react-bootstrap/FormControl'

/**
 * Generic input field for entering information
 * @component 
 * @param {object} props - Array of props (strings, ints, etc)
 * @property {String} type - type of input (i.e. email, password, number, etc)
 * @returns {FormControl}
 */
function Input(props) {
  const { type, placeholder, arialabel, ariadescribe, onChange, name } = props
  return (
    <>
      <FormControl type={type} placeholder={placeholder} aria-label={arialabel} aria-describedby={ariadescribe} onChange={onChange} name={name} />
    </>
  )
}

export default Input