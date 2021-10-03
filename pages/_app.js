import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/login.css'

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // provide ability to pass session around the app
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default CustomApp
