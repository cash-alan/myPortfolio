import Head from 'next/head'
import 'styles/globals.css'

import Navbar from 'components/Navbar'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='author' content='Alan Smith Valencia Izquierdo' />
        <meta name='description' content='This my portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
