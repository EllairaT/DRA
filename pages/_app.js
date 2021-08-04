import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navi from '../components/Navi'

//_app.js lets us keep a persistent layout
// component is the currently active page.
export default function CustomApp({ Component, pageProps }) {
  return (
    <Container>
      <Row>
        {/* sidebar */}
        <Col xs={2}>
          <Navi />
        </Col>
        {/* rest of content */}
        <Col>
          <Component />
        </Col>
      </Row>
    </Container>
  )
}
