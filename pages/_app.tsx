import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../components/theme';
import '../styles/globals.scss';
import createEmotionCache from '../components/createEmotionCache';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Web3Provider } from '@ethersproject/providers'

import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

// call this function at the root of the application and before any MUI components import
ClassNameGenerator.configure((componentName) => `iotabots-${componentName}`);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>IOTABOTS</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>

        <ThemeProvider theme={theme}>
          <Navigation />

          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Web3ReactProvider>

    </CacheProvider>
  );
}