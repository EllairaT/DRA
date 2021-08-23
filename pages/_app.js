import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navi from '../components/Navi'
import Login from './login'
import '../styles/login.css'

/**
 * Navigation, and any headers or footers should be put in here for consistency
 * across pages.
 * @Category Others
 */
function CustomApp({ Component, pageProps }) {
  return (
    <Container>
      <Row>
        {/* sidebar */}
        <Col xs={2}>
          <Navi />
        </Col>
        {/* rest of content */}
        <Col>
          <Component {...pageProps}/>
        </Col>
      </Row>
    </Container>

  )
  // return (
  //   <>
  //     <Login />
  //   </>
  // )
}

export default CustomApp
