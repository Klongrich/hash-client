import {
  Box,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import EthGlobalLogo from '../../assets/eth-global';
import Logo from '../Logo';
import { LinkGrid } from './LinkGrid';
import { SubscribeForm } from './SubscribeForm';

export default function Footer() {
  return (
    <Box
      as="footer"
      py="12"
      px={{ base: '4', md: '8' }}
      bgColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '10', lg: '28' }}
        >
          <Box flex="1">
            <Logo />

            <Flex
              as="a"
              href="https://hack.ethglobal.co/showcase/hashink-rechIlWuMbBysOmOJ"
              display="inline-block"
              rounded="xl"
              bg="gray.50"
              shadow="base"
              px="6"
              py="4"
              cursor="pointer"
              target="_blank"
              rel="noreferrer noopener"
              textAlign="center"
            >
              <EthGlobalLogo />
              <Text color="#21294c" lineHeight="0.5">
                Finalist
              </Text>
            </Flex>
          </Box>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '10', md: '20' }}
          >
            <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
            <SubscribeForm width={{ base: 'full', md: 'sm' }} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
