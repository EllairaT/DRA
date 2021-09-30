import * as filestack from 'filestack-js'
import { Component, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import { client } from 'filestack-react'

const InlinePicker = dynamic(
  import('../node_modules/filestack-react/dist/filestack-react').then((p) => p.PickerInline),
  {
    ssr: false
  }
)
/**
 * Filepicker component.
 *
 * @component
 * @param {string} [displaymode=inline] - sets display mode for the filepicker.
 * @property {string} apikey - api key for filestack
 * @property {Object} client - client object
 * @property {Object} options - options for the filepicker
 * @returns {Component} Filestack FilePicker
 * @author Victor
 * @author Ellaira
 */
function FilePicker({ displaymode }) {
  const apikey = process.env.NEXT_PUBLIC_FS_API_KEY

  const options = {
    storeTo: {
      location: 'azure',
      path: '/DRA_uploads/'
    },
    container: '#inline',
    displayMode: 'inline',
    fromSources: ['local_file_system'],
    onUploadDone: (res) => console.log(res)
  }

  // const picker = client.picker(options)
  // const p = <Container>{picker.open()}</Container>
  // return <>{p}</>

  //initialise filestack client
  const c = client.init(apikey, options)

  // console.log(c.session.apikey, c.options)
  return (
    <Container>
      <InlinePicker
        apikey={c.session.apikey}
        pickerOptions={c.options}
        onSuccess={(res) => console.log(res)}
        onUploadDone={(res) => console.log(res)}
      />
    </Container>
  )
}
export default FilePicker
