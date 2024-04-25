import { ILA26_internalElementsTypes } from './types/customPosts';

const ILA26_matchPostTextIsInternalElement = (
  textURL: string,
): { type: ILA26_internalElementsTypes; id: string } | false => {
  const serviceOffersRegex = /.+store\/offers\/([^/]+)/;
  const marketplaceProductRegex = /.+store\/catalog\/products\/([^/]+)/;
  const marketplaceEnterpriseProductsRegex =
    /.+\/store\/company\/details\/.+\/catalog\/products\/([^/]+)/;

  console.log({
    textURL,
    isService: serviceOffersRegex.test(textURL),
    id0: textURL.match(serviceOffersRegex)?.[1],
    isMarketplace: marketplaceProductRegex.test(textURL),
    id1: textURL.match(marketplaceProductRegex)?.[1],
    isDetail: marketplaceEnterpriseProductsRegex.test(textURL),
    id2: textURL.match(marketplaceEnterpriseProductsRegex)?.[1],
  });

  if (serviceOffersRegex.test(textURL))
    return { type: 'serviceOffer', id: textURL.match(serviceOffersRegex)?.[1] as string };
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
