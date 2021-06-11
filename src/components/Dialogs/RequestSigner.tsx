import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import useStore from '../../store';
import Dialog from './Dialog';

export default function RequestSigner() {
  const { requestSignerModalIsOpen, toggleRequestSignerModal } = useStore();
  const [requestIsLoading, setRequestIsLoading] = useState(false);
  const toast = useToast();
  const [requestedSigner, setRequestedSigner] = useState({
    name: '',
    platform: 'twitter',
    handle: '',
  });

  async function handlePostRegisration() {
    setRequestIsLoading(true);

    try {
      const { name, platform, handle } = requestedSigner;

      await fetch('/api/requested', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, platform, handle }),
      });

      toast({
        title: 'Request success.',
        description: 'Keeping a tab...',
        status: 'success',
        isClosable: true,
        variant: 'top-accent',
        position: 'bottom',
      });
      toggleRequestSignerModal();
      setRequestedSigner({ name: '', platform: '', handle: '' });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Request error.',
        description: 'Please try again.',
        status: 'error',
        isClosable: true,
        variant: 'top-accent',
        position: 'bottom',
      });
    }
    setRequestIsLoading(false);
  }

  return (
    <Dialog
      isOpen={requestSignerModalIsOpen}
      onClose={toggleRequestSignerModal}
      header="Someone you'd like to see?"
      footer={
        <>
          <Button variant="ghost" mr={3} onClick={toggleRequestSignerModal}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={handlePostRegisration}
            isDisabled={
              requestedSigner.name === '' || requestedSigner.handle === ''
            }
            isLoading={requestIsLoading}
            loadingText="Requesting"
          >
            Request
          </Button>
        </>
      }
    >
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Justin Shenkarow"
            value={requestedSigner.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRequestedSigner({
                ...requestedSigner,
                name: e.target.value,
              })
            }
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
        </FormControl>
        <FormControl id="platform" isRequired>
          <FormLabel>Platform</FormLabel>
          <Select
            value={requestedSigner.platform}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setRequestedSigner({
                ...requestedSigner,
                platform: e.target.value,
              })
            }
          >
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="twitch">Twitch</option>
            <option value="other">Other or N/A</option>
          </Select>
        </FormControl>
        <FormControl id="handle" isRequired>
          <FormLabel>Handle</FormLabel>
          <Input
            type="text"
            placeholder="@justinshenkarow"
            value={requestedSigner.handle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRequestedSigner({
                ...requestedSigner,
                handle: e.target.value,
              })
            }
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
        </FormControl>
      </VStack>
    </Dialog>
  );
}
