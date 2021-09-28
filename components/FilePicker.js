import * as filestack from 'filestack-js'
import { Component, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

/**
 * Filepicker component.
 *
 * @component
 * @param {string} [displaymode=inline] - sets display mode for the filepicker.
 * @property {string} apikey - api key for filestack
 * @property {Object} client - client object
 * @property {Object} options - options for the filepicker
 * @returns {Component} Filestack FilePicker
 * @author Victor <@fengv1976>
 * @author Ellaira <@EllairaT>
 */
function FilePicker({ displaymode }) {
  const apikey = 'A0yHkhiKiR0uyQlW7XLzrz'
  const client = filestack.init(apikey)
  const options = {
    container: '#inline',
    displayMode: 'inline',
    fromSources: ['local_file_system'],
    // all info about upload in res
    onUploadDone: (res) => console.log(res)
  }

  const picker = client.picker(options)
  const p = picker.open()

  return (
    <>
      <Container>{() => p}</Container>
    </>
  )
}
export default FilePicker
