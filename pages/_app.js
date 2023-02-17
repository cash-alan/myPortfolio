import 'styles/globals.css'

import Head from 'next/head'

import Navbar from 'components/Navbar'

const preferLightTheme = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)')

const favicon = preferLightTheme.matches ? '/favicon-black.svg' : '/favicon.svg'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='author' content='Alan Smith Valencia Izquierdo' />
        <meta name='description' content='This my portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href={favicon} />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
