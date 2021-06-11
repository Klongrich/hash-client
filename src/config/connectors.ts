import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: process.env.RPC_URL_1 as string,
    4: process.env.RPC_URL_4 as string,
  },
});

export const walletlink = new WalletLinkConnector({
  url: process.env.RPC_URL_1 as string,
  appName: 'Hashink',
});
