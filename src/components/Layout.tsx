import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useEagerConnect } from '../hooks';
import Banner from './Banner';
import Dialogs from './Dialogs';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const triedEager = useEagerConnect();

  if (!triedEager) {
    return null;
  }

  return (
    <Box>
      {/* <Banner /> */}
      <Header />
      <Box>{children}</Box>
      <Footer />
      <Dialogs />
    </Box>
  );
}
