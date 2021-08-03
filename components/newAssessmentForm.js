import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import React, { useState } from 'react';
import Input from './Input'

export default function NewDRAForm(props) {

  const [job, setJob] = useState({
    JobSite: "",
    JobAddress: "",
    JobSiteDescription: "",
    Phone: "",
    Date: "",
    Time: ""
  })

  const onSubmit = (e) => {
    e.preventDefault();
    //Needed to be added to database to store
    alert(`Submitting ${job.JobSite}, ${job.JobAddress}, ${job.JobSiteDescription}, ${job.Phone}, ${job.Date}, ${job.Time}`);

  }
  const inputsHandler = (e) => {
    // update the attributes in object
    const name = e.target.name;
    const value = e.target.value;
    job[name] = value;
    setJob(job);

  }

  return (
    <>
      <Container>
        <Row>
          <h2>Create new Assessment</h2>
        </Row>
        <Form>
          <label>Job Site:
          <Input type="text" placeholder="Name of Location" name="JobSite" onChange={inputsHandler} />
          </label>

          <label>Job Address:
          <Input type="text" placeholder="Address of Location" name="JobAddress" onChange={inputsHandler} />
          </label>

          <label>Job Site Description:
          <Input type="text" placeholder="Description of Location" name="JobSiteDescription" onChange={inputsHandler} />
          </label>

          <Row>
            <Col>
              <label>Phone:
              <Input type="tel" placeholder="Phone Number of Location" name="Phone" onChange={inputsHandler} />
              </label>
            </Col>
            <Col>
              <label>Date:
              <Input type="date" name="Date" onChange={inputsHandler} />
              </label>
            </Col>
            <Col>
              <label>Time:
              <Input type="time" name="Time" onChange={inputsHandler} />
              </label>
            </Col>
          </Row>
          <Button as="input" onClick={onSubmit} value="submit" />
        </Form>
      </Container>
    </>
  )
}
