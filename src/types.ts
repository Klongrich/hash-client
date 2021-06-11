export interface ISigner {
  name: string;
  profession: string;
  description: string;
  photo: string;
  autograph: string;
  price: number;
  ethPrice: number;
  available: boolean;
  numberOfPrints: number;
  numberOfReviews: number;
  reviewRating: number;
  responseTime: string;
  groupSig?: boolean;
  address?: string;
}

export type Store = {
  walletModalIsOpen: boolean;
  viewModalIsOpen: boolean;
  requestModalIsOpen: boolean;
  requestSignerModalIsOpen: boolean;
  bannerIsOpen: boolean;

  toggleWalletModal(): void;
  toggleViewModal(): void;
  toggleRequestModal(): void;
  toggleRequestSignerModal(): void;
  toggleBanner(): void;
};
