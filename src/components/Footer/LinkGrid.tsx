import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
} from '@chakra-ui/react';

import useStore from '../../store';
import { FooterHeading } from './FooterHeading';

export const LinkGrid = (props: SimpleGridProps) => {
  const { toggleRequestSignerModal } = useStore();
  return (
    <SimpleGrid columns={2} {...props}>
      <Box minW="130px">
        <FooterHeading mb="4">Product</FooterHeading>
        <Stack>
          <Link isExternal href="#">
            How it works
          </Link>
          <Link onClick={toggleRequestSignerModal}>Request a celeb ⭐</Link>
          <Link isExternal href="https://ethereum.org/en/">
            Ethereum.org
          </Link>
        </Stack>
      </Box>
      <Box minW="130px">
        <FooterHeading mb="4">About</FooterHeading>
        <Stack>
          <Link
            isExternal
            href="https://medium.com/hashink/hashink-the-origin-story-9007e3acc185"
          >
            Our journey
          </Link>
          <Link
            cursor="not-allowed"
            textDecoration="none"
            color="gray"
            _hover={{ color: 'gray' }}
          >
            Roadmap
          </Link>
          <Link
            cursor="not-allowed"
            textDecoration="none"
            color="gray"
            _hover={{ color: 'gray' }}
          >
            Upcoming partners
          </Link>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};
