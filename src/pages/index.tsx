import {
  AspectRatio,
  Box,
  Button,
  Center,
  chakra,
  Container,
  Divider,
  Flex,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';

import Splat from '../assets/splat';

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`;

export default function Landing() {
  const router = useRouter();
  const { account } = useWeb3React();
  const CURRENT_SIGNER = 'justin';

  const color = useColorModeValue(
    '0 0 0 3px rgba(33, 33, 33, 0.6)',
    '0 0 0 3px rgba(240, 240, 240, 0.6)',
  );

  return (
    <Box as="section" pt={{ base: '4rem', md: '10rem' }} pb="5rem">
      <Container>
        <Box textAlign="center" mb="2rem">
          <chakra.h1
            maxW="20ch"
            mx="auto"
            fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
            letterSpacing="tighter"
            fontWeight="extrabold"
            lineHeight="1.2"
            zIndex={100}
          >
            Digital autographs, guest starring your{' '}
            <chakra.span
              animation={`${shine} 10s ease-in-out infinite`}
              backgroundSize="200% auto"
              bgGradient="linear(to-l, #7928CA, #FF0080, #7928CA)"
              bgClip="text"
              fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
              fontWeight="extrabold"
              px="0.5rem"
            >
              favorite icons.
            </chakra.span>
          </chakra.h1>

          <Text
            maxW="560px"
            mx="auto"
            opacity={0.8}
            fontSize={{ base: '1.125rem', lg: '1.25rem' }}
            mt="6"
          >
            Hashink offers NFT autographs, with royalty perks for providers and
            100% memoribila ownership for the end user.
          </Text>

          <Stack
            mt="10"
            spacing="4"
            justify="center"
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              h="4rem"
              size="lg"
              px="40px"
              fontSize="1.2rem"
              onClick={() => router.push(`/${CURRENT_SIGNER}`)}
              backgroundSize="200% auto"
              bgGradient="linear(to-l, #7928CA, #FF0080, #7928CA)"
              color="white"
              _hover={{
                backgroundPosition: 'right center',
              }}
              _focus={{
                boxShadow: color,
              }}
              _active={{
                boxShadow: color,
              }}
            >
              🔥 Active Drop?!
            </Button>
          </Stack>
        </Box>
      </Container>

      <Box position="absolute" left={-40} top={-30} zIndex={-5}>
        <Splat />
      </Box>
      <Box position="absolute" right={-40} bottom={-40} zIndex={-4}>
        <Splat />
      </Box>

      <Divider w="75%" m="0 auto" sx={{ borderSize: '3px' }} mt="6rem" />

      <Container pt={{ base: '5rem', md: '7rem' }}>
        <Box mb="3em" textAlign="center">
          <chakra.h2
            fontSize={{ base: '2.25rem', sm: '2rem', lg: '3rem' }}
            letterSpacing="tighter"
            fontWeight="extrabold"
            maxW="20ch"
            mx="auto"
            lineHeight="1.2"
          >
            Something personal. Something fun.
          </chakra.h2>
          <Text opacity={0.8} fontSize="lg" mt="3" mx="auto" maxW="400px">
            Follow us on{' '}
            <Link
              href="https://twitter.com/hashinkapp"
              isExternal
              color="#1DA1F2"
              fontWeight="600"
              textDecoration="underline"
            >
              Twitter
            </Link>
            , connect with the{' '}
            <Link
              href="#"
              isExternal
              color="#7289da"
              fontWeight="600"
              textDecoration="underline"
            >
              Discord
            </Link>{' '}
            community, or join our{' '}
            <chakra.span
              color="pink.100"
              fontWeight="600"
              textDecoration="underline"
            >
              newsletter!
            </chakra.span>
          </Text>
        </Box>

        <Box mx="auto" px={{ base: '4', md: 0 }} position="relative">
          <AspectRatio>
            <Box
              as="iframe"
              boxShadow="lg"
              width="560"
              height="315"
              borderRadius="1rem"
              src="https://www.youtube.com/embed/dPa3UsuTAsw?start=2059"
              title="NFTHack Finale"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Container>
    </Box>
  );
}
