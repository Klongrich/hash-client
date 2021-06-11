import dynamic from 'next/dynamic';

import Request from './Request';
import RequestSigner from './RequestSigner';

const Wallets = dynamic(() => import('./Wallets'), { ssr: false });

export default function Dialogs() {
  return (
    <>
      <Wallets />
      <RequestSigner />
      <Request />
    </>
  );
}
