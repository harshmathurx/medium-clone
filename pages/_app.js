import Head from 'next/head'
import { MediumProvider } from '../context/MediumContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Head>
        <meta name="google-site-verification" content="ufjB4lpFxeLeyrleMdoU3BtoNleUMd-Wb53g-gZzEiQ" />
      </Head>
      <Component {...pageProps} />
    </MediumProvider>
  )
}

export default MyApp
