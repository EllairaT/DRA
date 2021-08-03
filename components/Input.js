import FormControl from 'react-bootstrap/FormControl'

export default function Input(props) {
  const { type, placeholder, arialabel, ariadescribe, onChange, name } = props
  return (
    <>
      <FormControl type={type} placeholder={placeholder} aria-label={arialabel} aria-describedby={ariadescribe} onChange={onChange} name={name} />
    </>
  )
}
