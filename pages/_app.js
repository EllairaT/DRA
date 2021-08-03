import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
