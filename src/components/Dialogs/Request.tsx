import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Img,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import DePayWidgets from 'depay-widgets';
import { useState } from 'react';

import RequestContract from '../../abis/RequestContract.json';
import { useContract } from '../../hooks';
import useStore from '../../store';
import addresses, { RINKEBY_ID } from '../../utils/addresses';
// import CopyableLink from '../CopyableLink';
import Dropzone from '../Dropzone';
import Dialog from './Dialog';

export default function Request() {
  const { requestModalIsOpen, toggleRequestModal } = useStore();
  const { chainId } = useWeb3React();

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestForm, setRequestForm] = useState({
    to: '',
    message: '',
    nftAddress: '',
  });

  const contract = useContract(
    addresses[RINKEBY_ID].requestContract,
    RequestContract.abi,
    true,
  );

  const toast = useToast();

  async function handleRequest() {
    setIsLoading(true);
    const WAIT = 7;

    try {
      // const res = await contract.createRequest(selectedSigner.address, WAIT, {
      //   value: selectedSigner.price,
      // });
      // const tx = await res.wait();

      toast({
        title: 'Request success. Signature in now in pending.',
        // description: (
        //   <CopyableLink txHash={tx.transactionHash} chainId={chainId} />
        // ),
        status: 'success',
        isClosable: true,
        variant: 'top-accent',
        position: 'top',
      });
      toggleRequestModal();
    } catch (error) {
      console.error(error);
      toast({
        title: 'Request error.',
        description: 'Please try again.',
        status: 'error',
        isClosable: true,
        variant: 'top-accent',
        position: 'top',
      });
    }
    setIsLoading(false);
  }

  return (
    <Dialog
      isOpen={requestModalIsOpen}
      onClose={toggleRequestModal}
      header="Send a request"
      disableClose={isLoading}
      footer={
        <>
          <Button variant="ghost" mr={3} onClick={toggleRequestModal}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={handleRequest}
            isLoading={isLoading}
            loadingText="Requesting"
            isDisabled={true}
          >
            Request
          </Button>
        </>
      }
    >
      <VStack>
        <FormControl id="name">
          <FormLabel>To</FormLabel>
          <Input
            type="text"
            placeholder="Name"
            value={requestForm.to}
            onChange={(e: any) =>
              setRequestForm({
                ...requestForm,
                to: e.target.value,
              })
            }
          />
          <FormHelperText>Who should this be made out to?</FormHelperText>
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Input
            type="text"
            placeholder="Today is my birthday"
            value={requestForm.message}
            onChange={(e: any) =>
              setRequestForm({
                ...requestForm,
                message: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="nft-address">
          <FormLabel>NFT Address</FormLabel>
          <Input
            type="text"
            placeholder="0x0"
            value={requestForm.nftAddress}
            onChange={(e: any) =>
              setRequestForm({
                ...requestForm,
                nftAddress: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Image</FormLabel>

          <Dropzone />
          <Flex as="aside" flexWrap="wrap" marginTop={16}>
            {/* {files.map((file) => (
              <Box
                display="inline-flex"
                borderRadius={2}
                border="1px solid #eaeaea"
                marginBottom={8}
                marginRight={8}
                width={100}
                height={100}
                padding={4}
                boxSizing="border-box"
                key={file.name}
              >
                <Box minWidth={0} overflow="hidden">
                  <Img src={file.preview} width="auto" height="100%" />
                </Box>
              </Box>
            ))} */}
          </Flex>
        </FormControl>
      </VStack>
    </Dialog>
  );
}
