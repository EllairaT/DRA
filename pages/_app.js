import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/login.css'
// import { QueryClientProvider, QueryClient } from 'react-query'
// import { ReactQueryDevTools } from 'react-query/devtools'
/**
 * @Category App
 */

//const queryClient = new QueryClient()

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // provide ability to pass session around the app
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    // <QueryClientProvider client={queryClient}>
    //   <ReactQueryDevTools initialIsOpen={false} />
    //   <Component {...pageProps} />
    // </QueryClientProvider>
  )
}

export default CustomApp
