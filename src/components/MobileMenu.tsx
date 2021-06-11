import {
  IconButton,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { FaDiscord, FaTwitter, FaUserEdit, FaUserPlus } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import useStore from '../store';

export default function MobileMenu() {
  const { toggleRequestSignerModal } = useStore();
  const { account, library, chainId, connector } = useWeb3React();
  const [ENSName, setENSName] = useState('');

  useEffect(() => {
    if (library && account) {
      let stale = false;
      library
        .lookupAddress(account)
        .then((name: any) => {
          if (!stale && typeof name === 'string') {
            if (name.length > 12) setENSName(name.substr(0, 8) + '...');
            else setENSName(name);
          }
        })
        .catch(() => {});
      return (): void => {
        stale = true;
        setENSName('');
      };
    }
  }, [library, account, chainId]);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="menu"
        size="sm"
        icon={<FiMenu size={20} />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<FaUserPlus />} onClick={toggleRequestSignerModal}>
          Request a signer
        </MenuItem>
        <MenuItem
          icon={<FaTwitter />}
          as="a"
          href="https://twitter.com/hashinkapp"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </MenuItem>
        <MenuItem
          icon={<FaDiscord />}
          as="a"
          href="https://discord.gg/MYYba5pPEY"
          target="_blank"
          rel="noreferrer noopener"
        >
          Discord
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
