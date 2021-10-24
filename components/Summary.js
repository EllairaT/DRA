import { Row, Col } from 'react-bootstrap'
import thumbnail from '../styles/thumbnail.module.css'
import cx from 'classnames'
import { useState } from 'react'

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
