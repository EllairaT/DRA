import * as filestack from 'filestack-js'
import { useState } from 'react'

import { Button } from 'react-bootstrap'

export default function FilePicker({ displaymode }) {
  const [button, setButton] = useState('closed')

  const apikey = 'A0yHkhiKiR0uyQlW7XLzrz'
  const client = filestack.init(apikey)
  const options = {
    container: '#inline',
    displayMode: 'inline',
    fromSources: ['local_file_system'],
    // all info about upload in res
    onUploadDone: (res) => console.log(res),
    onOpen: () => console.log('opened!')
  }

  const picker = client.picker(options)
  const p = () => picker.open()

  // const c = client('A0yHkhiKiR0uyQlW7XLzrz', options)
  // const getURL = (e) => {}
  // .return(
  //   <>
  //     <h1>FileStack</h1>
  //     <PickerInline apikey="A0yHkhiKiR0uyQlW7XLzrz" pickerOptions={options} />
  //   </>
  // )
  return <></>
}
