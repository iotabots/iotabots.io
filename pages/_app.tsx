import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.scss';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

const ThemeProvider = dynamic(() => { return import('../contexts/Theme') }, { ssr: false })

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>IOTABOTS</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#20c593" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  );
}