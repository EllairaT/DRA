import * as filestack from 'filestack-js'
import { Component, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import { client } from 'filestack-react'
// import getResponse from '../pages/api/filestack/upload'
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
      workflows: ['4b88240f-b06c-4fa4-9b3a-37a3e423b692'],
      location: 'azure',
      path: '/DRA_uploads/'
    },
    container: '#inline',
    displayMode: displaymode,
    fromSources: ['local_file_system']
  }

  //initialise filestack client
  const c = client.init(apikey, options)

  const getMetadata = (res) => {
    c.metadata(res.filesUploaded[0].handle)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  // const picker = client.picker(options)
  // const p = <Container>{picker.open()}</Container>
  // return <>{p}</>

  // console.log(c.session.apikey, c.options)
  return (
    <Container>
      <InlinePicker
        apikey={c.session.apikey}
        pickerOptions={c.options}
        onError={(res) => console.log(res)}
        onUploadDone={(res) => getMetadata(res)} //need to get webhook after upload
      />
    </Container>
  )
}
export default FilePicker
