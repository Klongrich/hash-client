import { Box, Center, Img, SimpleGrid, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Countdown from 'react-countdown';

import About from '../components/About';
import SignatureCard from '../components/SignatureCard';

import { useEffect, useState } from 'react';

import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import HashinkDropABI from "../components/SignatureCard/HashinkDrop.json";

const HashinkDropContractAddress = "0xD4c0E103B69A6aDf0F9D1737Ccd8C1D66CCE1D6F";
const dropID = "0x9366abecab1d00a1c935e01755258552868321de443bb966563b0afff3b912e0";

const slide = keyframes`
    0% {
      transform:translateX(-25%);
      }
    
      100% {
        transform:translateX(25%);
      }
  `;

const Box1 = styled(Box)`
  background-image: linear-gradient(-60deg, #e6007a 50%, #2f54eb 50%);
  position: fixed;
  opacity: 0.5;
  right: -50%;
  top: 0;
  bottom: 0;
  left: -50%;
  z-index: -1;
`;

const Box2 = styled(Box1)`
  animation-direction: alternate-reverse;
  animation-duration: 4s;
`;

const Box3 = styled(Box1)`
  animation-duration: 5s;
`;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '43b86485d3164682b5d703fd1d39fe1c' // required
    }
  }
}

export default function App() {

  const [totalAmount, setTotalAmount] = useState(0);
  const [amountMinted, setAmountMinted] = useState(0);

  const [amountRaised, setAmountRaised] = useState(0);

  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);

  const web3Modal = new Web3Modal({
    network: 'rinkeby', // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

  const signer = {
    timeLeft: '05/13/2021 23:00:00',
    numberOfPrints: 0,
    totalRaised: amountRaised,
    numberOfPrintsLeft: amountMinted,
    setNumberOfPrints: totalAmount,
  };

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  useEffect(() => {    
    async function loadWeb3() {

      const provider = await web3Modal.connect();
      const web3 = await new Web3(provider);

      setProvider(provider);
      setWeb3(web3);

      if (web3.eth) {

        const Contract = new web3.eth.Contract(HashinkDropABI.abi, HashinkDropContractAddress);
  
        await Contract.methods.dropmeta(dropID).call(function (error, res) {
          setTotalAmount(res.total_amount_aviable);
          setAmountMinted(res.total_amount_minted);

          // have to parse this so that price comes in correctly
          setAmountRaised(res.pirce * res.total_amount_minted);
        })
      }
    }

    loadWeb3();  
  }, [])

  return (
    <>
      <Head>
        <title key="title">Justin Shenkarow | Hashink</title>
      </Head>
      <Box h="100%">
        <Box1 animation={`${slide} 3s ease-in-out infinite alternate`} />
        <Box2 animation={`${slide} 3s ease-in-out infinite alternate`} />
        <Box3 animation={`${slide} 3s ease-in-out infinite alternate`} />
      </Box>
      <Box
        as="section"
        py="12"
        position="relative"
        h={{ base: '80vh', md: '100vh' }}
        _after={{
          content: `""`,
          display: 'block',
          w: 'full',
          h: 'full',
          bg: 'blackAlpha.700',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <SignatureCard web3={web3} />
        <Box
          position="absolute"
          zIndex={2}
          w="full"
          bottom="0"
          py="4"
          bg="blackAlpha.400"
        >
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
              <Box textAlign="center" color="white">
                <Text>Time until drop</Text>
                <Text
                  fontSize={{ base: 'xl', md: '3xl' }}
                  sx={{
                    fontFeatureSettings: 'tnum',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  <Countdown date={Date.parse(signer.timeLeft)} />
                </Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Available prints</Text>
                <Text fontSize={{ base: 'xl', md: '3xl' }}>
                  {signer.numberOfPrintsLeft} / {signer.setNumberOfPrints}
                </Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Total raised</Text>
                <Text fontSize={{ base: 'xl', md: '3xl' }}>{`${formatter.format(
                  signer.totalRaised,
                )}`}</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      <About />
    </>
  );
}
