import FormControl from 'react-bootstrap/FormControl'

/**
 * Input field that takes any amount of props. 
 * @component 
 * @param {*} props - Array of props (strings, ints, etc)
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