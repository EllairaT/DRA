import FormControl from 'react-bootstrap/FormControl'


export default function Input(props) {
    return (
        <>
            <FormControl
                type={props.type}
                placeholder={props.placeholder}
                aria-label={props.label}
                aria-describedby={props.label}>

            </FormControl>

        </>)
}