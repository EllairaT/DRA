import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/login.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Navi from '../components/Navi'
import { signOut } from 'next-auth/react'
/**
 *
 * Entry point of the application.
 * Returns current page with session and pageprops
 * @returns {Component} React Component
 * @author Ellaira
 */
function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // provide ability to pass session around the app
    <SessionProvider session={session}>
      <Container>
        <Row>
          {/* sidebar. if there is a session, show sidebar */}
          {session && (
            <Col md={2}>
              <Navi />
            </Col>
          )}
          <Col>
            {/* provide pageProps to the current component */}
            <Component {...pageProps} />
          </Col>
        </Row>
      </Container>
    </SessionProvider>
  )
}

export default CustomApp
