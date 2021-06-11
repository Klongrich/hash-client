import create from 'zustand';

import { Store } from './types';

const useStore = create<Store>((set: any) => ({
  walletModalIsOpen: false,
  viewModalIsOpen: false,
  requestModalIsOpen: false,
  requestSignerModalIsOpen: false,
  bannerIsOpen: true,

  toggleWalletModal: () =>
    set((state: any) => ({ walletModalIsOpen: !state.walletModalIsOpen })),
  toggleViewModal: () =>
    set((state: any) => ({ viewModalIsOpen: !state.viewModalIsOpen })),
  toggleRequestModal: () =>
    set((state: any) => ({ requestModalIsOpen: !state.requestModalIsOpen })),
  toggleRequestSignerModal: () =>
    set((state: any) => ({
      requestSignerModalIsOpen: !state.requestSignerModalIsOpen,
    })),
  toggleBanner: () =>
    set((state: any) => ({
      bannerIsOpen: !state.bannerIsOpen,
    })),
}));

export default useStore;
