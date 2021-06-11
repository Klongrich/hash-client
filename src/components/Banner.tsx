import {
  Box,
  Button,
  Collapse,
  DarkMode,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HiX } from 'react-icons/hi';

import useStore from '../store';

export default function Banner() {
  const { bannerIsOpen, toggleBanner } = useStore();
  return (
    <Collapse in={bannerIsOpen} animateOpacity>
      <Box
        bgGradient="linear(to-r, pink.500, blue.500)"
        color="white"
        py="2"
        px={{ base: '3', md: '6', lg: '8' }}
      >
        <HStack spacing="3">
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="center"
            spacing={{ base: '3', md: '6' }}
            width="full"
          >
            <Text>
              🤔 <b>How does Hashink work? </b> Click the button to find out!
            </Text>

            <DarkMode>
              <Button as="a" href="#" size="sm" isDisabled>
                Read more
              </Button>
            </DarkMode>
          </Stack>

          <DarkMode>
            <IconButton
              fontSize="1.5em"
              variant="ghost"
              icon={<HiX />}
              alignSelf={{ base: 'self-start', sm: 'initial' }}
              aria-label="Close banner"
              onClick={toggleBanner}
            />
          </DarkMode>
        </HStack>
      </Box>
    </Collapse>
  );
}
