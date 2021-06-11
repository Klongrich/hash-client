import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import { FooterHeading } from './FooterHeading';

export const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsletter, setNewsletter] = useState({
    firstName: '',
    email: '',
  });
  console.log('newsletter:', newsletter);

  const toast = useToast();

  async function handleRequest() {
    setIsLoading(true);

    const { firstName, email } = newsletter;

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
        position: 'bottom',
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
        position: 'bottom',
      });
    }
    setIsLoading(false);
    setNewsletter({
      firstName: '',
      email: '',
    });
  }
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>
          Get the latest updates, <br />
          sent straight to your inbox.
        </FooterHeading>
        <Text>
          Recieve the latest from Hashink, including upcoming signers, feature
          updates, and more.
        </Text>
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
          <FormControl id="email" marginEnd="-1px">
            <FormLabel srOnly>Name</FormLabel>
            <Input
              mb={{ base: '2', lg: '0' }}
              flex="1"
              bgColor={useColorModeValue('white', 'gray.900')}
              placeholder="Name"
              type="string"
              value={newsletter.firstName}
              onChange={(e: any) =>
                setNewsletter({
                  ...newsletter,
                  firstName: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl id="email" marginEnd="-1px">
            <FormLabel srOnly>Email</FormLabel>
            <Input
              mb={{ base: '2', lg: '0' }}
              flex="1"
              bg={useColorModeValue('white', 'gray.900')}
              placeholder="Email"
              type="email"
              value={newsletter.email}
              onChange={(e: any) =>
                setNewsletter({
                  ...newsletter,
                  email: e.target.value,
                })
              }
            />
          </FormControl>
          <Button
            colorScheme="blue"
            flexShrink={0}
            width={{ base: 'full', md: 'auto' }}
            loadingText="Subscribing"
            onClick={handleRequest}
            isLoading={isLoading}
            isDisabled={!newsletter.firstName || !newsletter.email}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};
