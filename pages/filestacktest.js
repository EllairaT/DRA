import { useRef } from 'react'
import { Container } from 'react-bootstrap'
import FilePicker from '../components/FilePicker'

export default function FS() {
  return (
    <>
      <FilePicker displaymode="inline" h="500px" w="500px" />
    </>
  )
}
