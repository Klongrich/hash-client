import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link as CLink,
  Text,
  useColorMode,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { FaDiscord, FaMoon, FaSun, FaTwitter } from 'react-icons/fa';

import useStore from '../store';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import AccountPopover from './Popover/Account';

export default function Header() {
  const { toggleWalletModal } = useStore();
  const { active } = useWeb3React();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      zIndex="5"
      h="3.5rem"
      m="0 auto"
      // position="sticky"
      position="fixed"
      top="0"
      userSelect="none"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
      bgColor={useColorModeValue('white', 'black')}
      alignItems="center"
      justifyContent="space-between"
      px={['0.5rem', '0.5rem', '1.5rem']}
    >
      <CLink href="/">
        <Box color={useColorModeValue('black', 'white')} cursor="pointer">
          <Logo />
        </Box>
      </CLink>

      <Flex
        alignItems="center"
        h="100%"
        justifyContent="flex-end"
        w="100%"
        maxWidth="824px"
        display={{ base: 'none', md: 'flex' }}
      >
        <HStack spacing={4}>
          <ButtonGroup variant="ghost" color="gray.600" mr="1rem">
            <IconButton
              variant="ghost"
              onClick={toggleColorMode}
              aria-label="toggle theme"
              icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/hashinkapp"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://discord.gg/MYYba5pPEY"
              aria-label="Discord"
              icon={<FaDiscord fontSize="20px" />}
            />
          </ButtonGroup>
          <>
            {active ? (
              <AccountPopover />
            ) : (
              <Button
                size="sm"
                onClick={() => toggleWalletModal()}
                variant="outline"
              >
                Connect wallet
              </Button>
            )}
          </>
        </HStack>
      </Flex>

      <Flex display={{ base: 'flex', md: 'none' }}>
        <MobileMenu />
      </Flex>
    </Flex>
  );
}
