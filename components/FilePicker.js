import * as filestack from 'filestack-js'
import { Component, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import { client } from 'filestack-react'

// disable server-side rendering for filepicker
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
 * @param {string} h - set height of file picker
 * @param {string} w - set width of file picker
 * @property {string} apikey - api key for filestack
 * @property {Object} client - client object
 * @property {Object} options - options for the filepicker
 * @returns {Component} Filestack FilePicker
 * @author Victor
 * @author Ellaira
 */
function FilePicker({ displaymode, container, h, w }) {
  const apikey = process.env.NEXT_PUBLIC_FS_API_KEY
  const containerName = `#${container}`
  console.log(containerName)
  const options = {
    storeTo: {
      workflows: ['4b88240f-b06c-4fa4-9b3a-37a3e423b692'],
      location: 'azure',
      path: '/DRA_uploads/'
    },
    container: containerName,
    displayMode: displaymode,
    fromSources: ['local_file_system']
  }

  // initialise filestack client
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

  return (
    <>
      <div id="inline" style={{ height: h, width: w }}>
        <InlinePicker
          apikey={c.session.apikey}
          pickerOptions={c.options}
          onError={(err) => console.error(err)}
          onUploadDone={(res) => getMetadata(res)}
        />
      </div>
    </>
  )
}
export default FilePicker
