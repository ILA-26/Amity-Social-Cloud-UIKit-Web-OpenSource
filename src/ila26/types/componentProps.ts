import { ILA26_internalData, ILA26_internalElementsTypes } from './customPosts';

export type ILA26_ServiceOfferProps = { metadata: ILA26_internalData };
export type ILA26_MarketplaceProductProps = { metadata: ILA26_internalData };
export type ILA26_CustomPostContentProps = {
  metadata: ILA26_internalData | undefined;
  dataType: string;
  data: { text: string };
};
