import { useRef } from 'react'
import { Container } from 'react-bootstrap'
import FilePicker from '../components/FilePicker'

export default function FS() {
  return (
    <>
      <h1>Hello</h1>
      <div id="inline" style={{ height: '500px', width: '500px' }}>
        <FilePicker displaymode="inline" />
      </div>
    </>
  )
}