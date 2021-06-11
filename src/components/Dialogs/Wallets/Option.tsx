import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

import getIcon from '../../../theme/icons';

export default function Option({
  name,
  icon,
  active = false,
  onClick,
  link,
  id,
}: {
  name?: React.ReactNode;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
  link?: string | null;
  id: string;
}): JSX.Element {
  const hoverColor = useColorModeValue('gray.100', 'gray.600');
  const content = (
    <Flex
      alignItems="center"
      borderRadius="base"
      justifyContent="space-between"
      my="0.5rem"
      p="0.75rem 1rem"
      textAlign="center"
      transition="all 0.3s ease 0s"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
      key={id}
      onClick={onClick}
      cursor={!active ? 'pointer' : undefined}
      bgColor={useColorModeValue('gray.50', 'gray.500')}
      color={useColorModeValue('gray.800', 'white')}
      _hover={
        !active
          ? {
              bgColor: hoverColor,
              textDecoration: 'none',
            }
          : undefined
      }
    >
      {icon ? getIcon(icon) : null}
      <Text fontSize="1.25rem" fontWeight="600" m="0" userSelect="none">
        {name}
      </Text>
      {active ? <Icon as={FiCheckCircle} color="green.400" /> : <Box w="5%" />}
    </Flex>
  );

  if (link)
    return (
      <Link
        href={link}
        color="white"
        isExternal
        _focus={{ boxShadow: 'none' }}
        _hover={{ textDecoration: 'none' }}
        userSelect="none"
      >
        {content}
      </Link>
    );

  return content;
}
