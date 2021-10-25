import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import cx from 'classnames'
import thumbnail from '../styles/thumbnail.module.css'

function Summary(props) {
  const { fileURL, name } = props
  return (
    <Row className={cx(thumbnail.cont, 'mt-2 mb-2')}>
      <Col sm={1} md={1} lg={1}>
        <img alt={name} src={fileURL} className={cx(thumbnail.thumb)} />
      </Col>
      <Col className="align-self-center">
        <p className="">
          <i>{name}</i>
        </p>
      </Col>
    </Row>
  )
}

export default Summary
