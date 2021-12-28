import * as React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Navigation } from '../components/Navigation/Navigation'
import { Footer } from '../components/Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

const ThemeProvider = dynamic(() => import('../contexts/Theme'), { ssr: false })

const App: React.FC<AppProps> = (props) => {
  const { pageProps, Component } = props
  return (
    <>
      <Head>
        <title>IOTABOTS</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='apple-touch-icon' sizes='180x180' href='favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicon.ico' />
        <link rel='manifest' href='favicon/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#20c593' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <ThemeProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  )
}

export default App
