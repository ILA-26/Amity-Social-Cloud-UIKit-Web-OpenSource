import { ILA26_internalElementsTypes } from './types/customPosts';

const serviceOffersRegex = /.+offers\/([^/]+)/;
const marketplaceEnterpriseServiceOfferRegex = /.+\/store\/company\/details\/.+\/offers\/([^/]+)/;
const marketplaceProductRegex = /.+catalog\/products\/([^/]+)/;
const marketplaceEnterpriseProductsRegex =
  /.+\/store\/company\/details\/.+\/catalog\/products\/([^/]+)/;

const ILA26_matchPostTextIsInternalElement = (
  textURL: string,
): { type: ILA26_internalElementsTypes; id: string } | false => {
  const extractedUrl = ILA26_PostTextUrlExtractor(textURL);

  if (serviceOffersRegex.test(extractedUrl))
    return { type: 'serviceOffer', id: extractedUrl.match(serviceOffersRegex)?.[1] as string };
  if (marketplaceEnterpriseServiceOfferRegex.test(extractedUrl))
    return {
      type: 'serviceOffer',
      id: extractedUrl.match(marketplaceEnterpriseServiceOfferRegex)?.[1] as string,
    };
  if (marketplaceProductRegex.test(extractedUrl))
    return {
      type: 'marketplaceProduct',
      id: extractedUrl.match(marketplaceProductRegex)?.[1] as string,
    };
  if (marketplaceEnterpriseProductsRegex.test(extractedUrl)) {
    return {
      type: 'marketplaceProduct',
      id: extractedUrl.match(marketplaceEnterpriseProductsRegex)?.[1] as string,
    };
  }
  return false;
};

const ILA26_PostTextUrlExtractor = (input: string): string => {
  const regexes = [
    serviceOffersRegex,
    marketplaceEnterpriseServiceOfferRegex,
    marketplaceProductRegex,
    marketplaceEnterpriseProductsRegex,
  ];

  // Split the input string by spaces to process each word separately
  const words = input.split(' ');

  for (const word of words) {
    for (const regex of regexes) {
      const match = word.match(regex);
      if (match) {
        return match[0]; // Return the first matching URL
      }
    }
  }

  return '#';
};

const ILA26_PostTextUrlRemoval = (input: string): string => {
  const regexes = [
    serviceOffersRegex,
    marketplaceEnterpriseServiceOfferRegex,
    marketplaceProductRegex,
    marketplaceEnterpriseProductsRegex,
  ];

  // Split the input string by spaces to process each word separately
  const words = input.split(' ');

  // Filter out words that match any of the regex patterns
  const filteredWords = words.filter((word) => {
    return !regexes.some((regex) => regex.test(word));
  });

  // Join the filtered words back into a single string
  return filteredWords.join(' ');
};

export {
  ILA26_matchPostTextIsInternalElement,
  ILA26_PostTextUrlRemoval,
  ILA26_PostTextUrlExtractor,
};
