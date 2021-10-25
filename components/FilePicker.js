import * as filestack from 'filestack-js'
import React, { Component, useEffect, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { client } from 'filestack-react'
import '../styles/Assessment.module.css'
import Summary from './Summary'
import vThumb from '../videothumb.png'
import { server } from '../config/index'

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
  const workflow = '5d9ba7b9-2dbe-45ae-86bf-71dee785dcac'
  const apikey = process.env.NEXT_PUBLIC_FS_API_KEY
  const filestackCDN = 'https://cdn.filestackcontent.com/'
  const clientOptions = {
    security: {
      policy: process.env.NEXT_PUBLIC_FS_POLICY,
      signature: process.env.NEXT_PUBLIC_FS_SIGNATURE
    }
  }

  const checkMIME = (type, url) => {
    if (type.includes('video')) {
      return vThumb.src
    }
    return `${url}?policy=${process.env.NEXT_PUBLIC_FS_POLICY}&signature=${process.env.NEXT_PUBLIC_FS_SIGNATURE}`
  }

  const setThumbnail = (fname, type, url) => {
    const thumbURL = checkMIME(type, url)
    setFile({ ...file, name: fname, fileURL: thumbURL })
  }

  const parser = (res) => res.workflows[workflow].jobid

  const getMetaData = async (res) => {
    setLoading(true)
    const job = parser(res)
    let data
    const webhook = await fetch(`/api/files/webhook`, {
      method: 'POST',
      body: JSON.stringify({ jobid: job }),
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    })

    const response = await webhook.json()

    // set thumbnail, and pass url to parent
    if (response) {
      const {
        results: {
          store: {
            data: { filename, handle, url, type }
          }
        }
      } = response
      pickerCallback(
        `${filestackCDN}/security=p:${process.env.NEXT_PUBLIC_FS_POLICY},s:${process.env.NEXT_PUBLIC_FS_SIGNATURE}/cache=false/${handle}`
      )
      setThumbnail(filename, type, url)
      setLoading(false)
    }
  }

  const sanitizeFilename = (f) => {
    const newName = f.filename.replace(/\s/g, '')
    return { ...file, filename: newName }
  }

  const pickerOptions = {
    storeTo: {
      workflows: workflow
    },
    fromSources: ['local_file_system', 'video', 'webcam'],
    disableTransformer: true,
    uploadInBackground: true,
    accept: ['image/*', 'video/*', 'audio/*'],
    onFileSelected: (fn) => sanitizeFilename(fn),
    onUploadDone: (res) => getMetaData(res.filesUploaded[0])
  }

  // initialise filestack client
  const c = client.init(apikey, clientOptions)

  const openPicker = () => {
    c.picker(pickerOptions).open()
  }

  const LoadingSpinner = () => (
    <>
      <div className="d-block mb-3 mt-3">
        <Spinner animation="border" variant="warning" />
        <p className="text-muted lead d-inline m-2">
          <i>We&#39re processing your file for you</i>
        </p>
      </div>
    </>
  )

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
