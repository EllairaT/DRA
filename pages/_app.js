import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/login.css'

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
      {/* provide pageProps to the current component */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default CustomApp
