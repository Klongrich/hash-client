import { Box, Center, Img, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Lottie from 'lottie-react-web';
import { useEffect, useState, useRef } from 'react';
import styleds from "styled-components";

import Web3 from "web3";
import HashinkDropABI from "./HashinkDrop.json";

const HashinkDropContractAddress = "0xD4c0E103B69A6aDf0F9D1737Ccd8C1D66CCE1D6F";
const dropID = "0x9366abecab1d00a1c935e01755258552868321de443bb966563b0afff3b912e0";
const tokenID = 101; //start at 100 end at 120
const price = 14170000000000000;

// 0.01417004048 - $35 @ $2470
const ONE_ETHER = 100000000000000000;

//Account 3 minted them
// import animationData from './test.json';

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
      }
    
      50% {
        background-position: 100% 50%;
      }
    
      100% {
        background-position: 0% 50%;
      }
  `;

const StyledBox = styled(Center)`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;

    background: linear-gradient(
      45deg,
      #fafafa,
      #f2f2f2,
      #f0f0f0,
      #e8e8e8,
      #e6e6e6,
      #dedede,
      #dbdbdb,
      #d4d4d4,
      #d1d1d1,
      #c9c9c9
    );
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: ${gradient} 20s linear infinite;
    border-radius: 0.5rem;
  }
  &:after {
    filter: blur(20px);
  }
`;

const BuyButton = styleds.button`
  border: 1px solid black;
  background-color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;

  margin-bottom: 120px;
  margin-top: 30px;

`

export default function SignatureCard( {web3} ) {
  const sigContainer = useRef(null);
  const testContainer = useRef(null);

  const [amountMinted, setAmountMinted] = useState(0);

  async function buy_nft() {
    const Ethaccounts = await web3.eth.getAccounts();
    const Contract = await new web3.eth.Contract(HashinkDropABI.abi, HashinkDropContractAddress);
    
    const newTokenId = Number(amountMinted) + tokenID;

    await Contract.methods.purchase_nft(dropID, newTokenId)
    .send({from: Ethaccounts[0], value: price })
    .once("receipt", (res) => {
        console.log(res);
    })
  }

  useEffect(() => {
    async function check_drop_meta(){   

      const Contract = new web3.eth.Contract(HashinkDropABI.abi, HashinkDropContractAddress);
  
      await Contract.methods.dropmeta(dropID).call(function (error, res) {
           console.log(res);
          setAmountMinted(res.total_amount_minted);
      })
    }
    if (web3) {
      check_drop_meta();
    }
  },[]);
  return (
    <Box
      maxW={{ base: 'xl', md: '7xl' }}
      mx="auto"
      px={{ base: '6', md: '8' }}
      h="full"
      zIndex={1}
      position="relative"
    >
      <Center
        px={{ base: '6', md: '8' }}
        flexDirection="column"
        textAlign="center"
        color="white"
        h="full"
      >
        <StyledBox
          position="relative"
          h={{ base: '120px', md: '240px' }}
          bg="gray.800"
          borderRadius="0.5rem"
          p="2rem"
        >
          {/* <Lottie
            ariaLabel="current-signer-autograph"
            options={{
              animationData: animationData,
              loop: false,
            }}
          /> */}
          <Img src="/white-autograph.png" alt="white-autograph" />
        </StyledBox>
        
        <BuyButton onClick={()=> buy_nft()} >
          Purchase
        </BuyButton>

         <br />
         <br />
      </Center>
    </Box>
  );
}
