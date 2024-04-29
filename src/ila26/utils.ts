import { ILA26_internalElementsTypes } from './types/customPosts';

const ILA26_matchPostTextIsInternalElement = (
  textURL: string,
): { type: ILA26_internalElementsTypes; id: string } | false => {
  const serviceOffersRegex = /.+offers\/([^/]+)/;
  const marketplaceEnterpriseServiceOfferRegex = /.+\/store\/company\/details\/.+\/offers\/([^/]+)/;
  const marketplaceProductRegex = /.+catalog\/products\/([^/]+)/;
  const marketplaceEnterpriseProductsRegex =
    /.+\/store\/company\/details\/.+\/catalog\/products\/([^/]+)/;

  if (serviceOffersRegex.test(textURL))
    return { type: 'serviceOffer', id: textURL.match(serviceOffersRegex)?.[1] as string };
  if (marketplaceEnterpriseServiceOfferRegex.test(textURL))
    return {
      type: 'serviceOffer',
      id: textURL.match(marketplaceEnterpriseServiceOfferRegex)?.[1] as string,
    };
  if (marketplaceProductRegex.test(textURL))
    return {
      type: 'marketplaceProduct',
      id: textURL.match(marketplaceProductRegex)?.[1] as string,
    };
  if (marketplaceEnterpriseProductsRegex.test(textURL)) {
    return {
      type: 'marketplaceProduct',
      id: textURL.match(marketplaceEnterpriseProductsRegex)?.[1] as string,
    };
  }
  return false;
};

export { ILA26_matchPostTextIsInternalElement };
