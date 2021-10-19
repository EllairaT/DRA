import * as filestack from 'filestack-js'
import React, { Component, useEffect, useState } from 'react'
import { Button, Container, ProgressBar } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import { client } from 'filestack-react'
import '../styles/Assessment.module.css'
import Summary from './Summary'
import vThumb from '../videothumb.png'

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
  const options = {
    storeTo: {
      location: 'azure',
      path: '/DRA_uploads/',
      workflows: ['5d9ba7b9-2dbe-45ae-86bf-71dee785dcac']
    },
    fromSources: ['local_file_system', 'video', 'webcam'],
    disableTransformer: true,
    uploadInBackground: true,
    accept: ['image/*', 'video/*', 'audio/*'],
    onFileSelected: (file) => sanitizeFilename(file),
    onUploadDone: (res) => getMetaData(res)
  }

  // initialise filestack client
  const c = client.init(apikey)

  const sanitizeFilename = (file) => {
    const newName = file.filename.replace(/\s/g, '')
    return { ...file, filename: newName }
  }

  //return metadata. refresh component after this. dont know why but it wont work for other uploads otherwise.
  const getMetaData = (res) => {
    c.metadata(res.filesUploaded[0].handle)
      .then((response) => {
        pickerCallback(response.path)
        setThumbnail(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  //check MIME type
  const checkMIME = (e) => {
    if (e.mimetype.includes('video')) {
      return vThumb.src
    }
    //use the url from filestack cdn for the thumbnail
    return `https://cdn.filestackcontent.com/${e.handle}`
  }

  const setThumbnail = (e) => {
    const thumbURL = checkMIME(e)
    setFile({ ...file, name: e.filename, fileURL: thumbURL })
  }

  return (
    <>
      <Button onClick={() => c.picker(options).open()} className="btn btn-primary">
        Upload file
      </Button>
      {file.fileURL ? <Summary name={file.name} fileURL={file.fileURL} /> : ''}
    </>
  )
}
export default FilePicker
