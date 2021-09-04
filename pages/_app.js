import { Container, Row, Col } from 'react-bootstrap'
import { Provider } from 'next-auth/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navi from '../components/Navi'
import Login from './login'
import Register from './register'
import '../styles/login.css'

/**
 * Navigation, and any headers or footers should be put in here for consistency
 * across pages.
 * @Category Others
 */
function CustomApp({ Component, pageProps }) {
  return (
    // provide ability to pass session around the app
    <Provider session={pageProps.session}>
    <Component {...pageProps} />
    </Provider>
  )
  // return (
  //   <>
  //     <Login />
  //   </>
  // )
}

export default CustomApp
