import * as filestack from 'filestack-js'
import React, { Component, useEffect, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
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
  const [loading, setLoading] = useState(false)

  const apikey = process.env.NEXT_PUBLIC_FS_API_KEY
  const clientOptions = {
    security: {
      policy: process.env.NEXT_PUBLIC_FS_POLICY,
      signature: process.env.NEXT_PUBLIC_FS_SIGNATURE
    }
  }
  const pickerOptions = {
    storeTo: {
      workflows: ['5d9ba7b9-2dbe-45ae-86bf-71dee785dcac']
    },
    fromSources: ['local_file_system', 'video', 'webcam'],
    disableTransformer: true,
    uploadInBackground: true,
    accept: ['image/*', 'video/*', 'audio/*'],
    onFileSelected: (file) => sanitizeFilename(file),
    onUploadDone: (res) => getMetaData(res.filesUploaded[0])
    //getMetaData(res.filesUploaded[0])
  }

  const parser = (res) => {
    //res.filesUploaded[0]
    return res.workflows[pickerOptions.storeTo.workflows[0]].jobid
  }
  // initialise filestack client
  const c = client.init(apikey, clientOptions)

  const sanitizeFilename = (file) => {
    const newName = file.filename.replace(/\s/g, '')
    return { ...file, filename: newName }
  }

  const { promiseInProgress } = (props) => {
    usePromiseTracker()
    return promiseInProgress && <h1>"LOADING"</h1>
  }
  //return metadata. refresh component after this. dont know why but it wont work for other uploads otherwise.
  const getMetaData = async (res) => {
    setLoading(true)
    const job = parser(res)
    let data
    const webhook = await fetch(`http://localhost:3000/api/files/webhook`, {
      method: 'POST',
      body: JSON.stringify({ jobid: job }),
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    })

    const response = await webhook.json()

    if (response) {
      const {
        results: {
          store: {
            data: { filename, handle, key, url, type }
          }
        }
      } = response
      setThumbnail(filename, type, url)
      setLoading(false)
    }
  }

  //check MIME type
  const checkMIME = (type, url) => {
    if (type.includes('video')) {
      return vThumb.src
    }
    return url + `?policy=${process.env.NEXT_PUBLIC_FS_POLICY}&signature=${process.env.NEXT_PUBLIC_FS_SIGNATURE}`
  }

  const setThumbnail = (fname, type, url) => {
    const thumbURL = checkMIME(type, url)
    //setFile({ ...file, name: e.filename, fileURL: thumbURL })
    setFile({ ...file, name: fname, fileURL: thumbURL ? thumbURL : url })
  }

  const openPicker = () => {
    c.picker(pickerOptions).open()
  }

  const LoadingSpinner = () => {
    return (
      <>
        <div className="d-block mb-3 mt-3">
          <Spinner animation="border" variant="warning" />
          <p className="text-muted lead d-inline m-2">
            <i>We're processing your file for you</i>
          </p>
        </div>
      </>
    )
  }
  return (
    <>
      <Button onClick={() => openPicker()} className="btn btn-primary">
        Upload file
      </Button>

      {loading ? LoadingSpinner() : ''}
      {file.fileURL ? <Summary name={file.name} fileURL={file.fileURL} /> : ''}
    </>
  )
}
export default FilePicker
