import { ChakraProvider } from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';
import theme from '../theme';

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Hashink | NFT Autographs</title>

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22> 🔏</text></svg>"
        />

        <meta
          name="description"
          content="Hashink provides NFT autographs, with royalty perks for providers
            and 100% memoribila ownership for the end user."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hashinkapp" />
        <meta name="twitter:title" content="Hashink - NFT Autographs" />
        <meta
          name="twitter:description"
          content="Collect NFT autographs from your favorite icons"
        />
        {/* <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" /> */}
      </Head>
      <ChakraProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ReactProvider>
      </ChakraProvider>
    </>
  );
}
