import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const SubscribeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsletter, setNewsletter] = useState({
    firstName: '',
    email: '',
  });

  const toast = useToast();

  async function handleRequest() {
    setIsLoading(true);

    const { firstName, email } = newsletter;
    console.log('email:', email);
    console.log('firstName:', firstName);

    try {
      await fetch('api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email,
        }),
      });

      toast({
        title: 'Success.',
        description: 'Be on the lookout 🧐 !',
        status: 'success',
        isClosable: true,
        variant: 'top-accent',
        position: 'bottom-left',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Opps!',
        description:
          'Please try again (or reach out to us at hello@hashink.app)',
        status: 'error',
        isClosable: true,
        variant: 'top-accent',
        position: 'bottom-left',
      });
    }
    setIsLoading(false);
    setNewsletter({
      firstName: '',
      email: '',
    });
  }
  return (
    <Stack maxW="md" spacing="4" direction={{ base: 'column', sm: 'row' }}>
      <HStack>
        <Input type="string" placeholder="Name" />
        <Input type="email" placeholder="Email" />
      </HStack>
      <Button
        colorScheme="blue"
        px="10"
        loadingText="Subscribing"
        onClick={handleRequest}
        isLoading={isLoading}
        isDisabled={!newsletter.firstName || !newsletter.email}
      >
        Subscribe
      </Button>
    </Stack>
  );
};

export default function Newsletter() {
  return (
    <Box as="section" py="12">
      <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto">
        <Stack
          direction="row"
          justify="space-between"
          align="center"
          spacing="8"
        >
          <Box maxW="2xl" p={{ base: '6', md: '12' }}>
            <Heading size="lg" fontWeight="extrabold" mb="2">
              Get the latest updates, sent straight to your inbox.
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mb="6">
              Get the latest from Hashink, including upcoming signers and
              feature updates.
            </Text>
            <SubscribeForm />
          </Box>

          <Box
            as="iframe"
            display={{ base: 'none', lg: 'block' }}
            boxShadow="lg"
            height="240"
            borderRadius="1rem"
            src="https://www.youtube.com/embed/dPa3UsuTAsw?start=2059"
            title="NFTHack Finale"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Stack>
      </Box>
    </Box>
  );
}
