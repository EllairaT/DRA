import * as filestack from 'filestack-js'
import React, { Component, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import { client } from 'filestack-react'
import '../styles/Assessment.module.css'
import Summary from './Summary'
import { File } from 'react-bootstrap-icons'
import Image from 'next/image'

import vThumb from '../videothumb.png'
import { classBody } from '@babel/types'

// disable server-side rendering for filepicker
// const InlinePicker = dynamic(
//   import('../node_modules/filestack-react/dist/filestack-react').then((p) => p.PickerDropPane),
//   {
//     ssr: false
//   }
// )

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
function FilePicker(props) {
  const { pickerCallback } = props
  const [file, setFile] = useState({ name: '', fileURL: '' })

  const apikey = process.env.NEXT_PUBLIC_FS_API_KEY
  const token = {}
  const options = {
    storeTo: {
      location: 'azure',
      path: '/DRA_uploads/'
    },
    fromSources: ['local_file_system', 'video']
  }

  const uploadOpts = {}
  const storeOpts = {
    location: 'azure',
    path: '/DRA_uploads/'
  }

  // initialise filestack client
  const c = client.init(apikey, options)

  //return metadata
  async function getMetaData(handle) {
    try {
      const response = await c.metadata(handle, { upload_status: true })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  //works- get metadata later
  function uploadVideo(e) {
    c.upload(e.target.files[0], uploadOpts, storeOpts).then(async (res) => console.log(await res))
    // .catch((err) => console.log(err))
  }

  //check MIME type
  const checkMIME = (e) => {
    if (e.type.includes('video')) {
      return vThumb.src
    }
    return URL.createObjectURL(e)
  }

  // handle 1Hzi1YSSHqaBG853d9Rc
  const handleChange = (e) => {
    const thumbURL = checkMIME(e.target.files[0])
    setFile({ ...file, name: e.target.files[0].name, fileURL: thumbURL })
    // pickerCallback(file.fileURL)
    uploadVideo(e)
    // .then((res) => getMetaData(res))
    // .catch((err) => console.log(err))
  }

  return (
    <>
      <input type="file" accept="image/*,video/*" className="custom-file-input" onChange={handleChange} />
      {file ? <Summary name={file.name} fileURL={file.fileURL} /> : ''}
    </>
  )
}
export default FilePicker
