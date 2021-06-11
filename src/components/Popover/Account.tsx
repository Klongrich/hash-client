import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { FiClipboard, FiPaperclip } from 'react-icons/fi';

import { injected, walletlink } from '../../config/connectors';
import useStore from '../../store';
import getIcons from '../../theme/icons';
import { getEtherscanLink, shortenAddress } from '../../utils';
import formatConnectorName from '../../utils/formatConnectorName';

export default function AccountPopover() {
  const { account, library, chainId, connector } = useWeb3React();
  const accountClipboard = useClipboard(account);
  const [ENSName, setENSName] = useState('');
  const { toggleWalletModal } = useStore();

  useEffect(() => {
    if (library && account) {
      let stale = false;
      library
        .lookupAddress(account)
        .then((name: any) => {
          if (!stale && typeof name === 'string') {
            if (name.length > 12) setENSName(name.substr(0, 8) + '...');
            else setENSName(name);
          }
        })
        .catch(() => {});
      return (): void => {
        stale = true;
        setENSName('');
      };
    }
  }, [library, account, chainId]);

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar size="sm" name="" src="" cursor="pointer" />
      </PopoverTrigger>
      <PopoverContent bgColor={useColorModeValue('white', 'gray.800')}>
        <PopoverHeader fontWeight="semibold">Account</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Flex direction="column" fontSize="1.25rem">
            <Text fontSize="0.75rem">{formatConnectorName(connector)}</Text>
            <Text>{ENSName || `${shortenAddress(account)}`}</Text>

            <ButtonGroup size="xs" spacing="2">
              <IconButton
                fontWeight="300"
                aria-label="Copy address"
                icon={
                  accountClipboard.hasCopied ? <FiPaperclip /> : <FiClipboard />
                }
                onClick={accountClipboard.onCopy}
              />
              <Button
                as="a"
                target="_blank"
                href={
                  chainId ? getEtherscanLink(chainId, account, 'address') : '#'
                }
                rel="noopener noreferrer"
                aria-label="View on Etherscan"
                leftIcon={getIcons('Etherscan', 4)}
                fontWeight="300"
              >
                View on Etherscan
              </Button>
            </ButtonGroup>
          </Flex>
        </PopoverBody>
        <PopoverFooter d="flex" justifyContent="flex-end">
          <ButtonGroup size="sm" textAlign="right">
            <Button onClick={toggleWalletModal}>Change wallets</Button>
            <Button
              color="white"
              onClick={() => (connector as any).close()}
              display={
                connector !== injected && connector !== walletlink
                  ? 'block'
                  : 'none'
              }
            >
              Disconnect
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
