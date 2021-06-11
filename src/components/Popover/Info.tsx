import {
  Button,
  ListItem,
  OrderedList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';

export default function Info() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size="lg" colorScheme="blue" variant="ghost">
          How does this work?!
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>How does this work?!</PopoverHeader>
        <PopoverBody>
          <OrderedList>
            <ListItem>Request an autograph</ListItem>
            <ListItem>Wait for a reply (7 days at the max)</ListItem>
            <ListItem>
              If for some reason your requestor doesn&apos;t send back an
              autograph, your money will be returned
            </ListItem>
            <ListItem>
              Otherwise, expect to find the NFT within your wallet once the 7
              day waiting period is over
            </ListItem>
          </OrderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
