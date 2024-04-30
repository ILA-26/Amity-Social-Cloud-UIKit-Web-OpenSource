import { ILA26_MarketplaceProductProps } from '../types/componentProps';
import React from 'react';
import { ILA26_UiKitProviderProps } from '../types/kitProviderProps';
import { useIntl } from 'react-intl';

const ILA26_MarketplaceProduct = ({ metadata }: ILA26_MarketplaceProductProps) => {
  const { locale } = useIntl();
  return (
    <>
      <span
        style={{
          background: '#5C2DD3',
          color: '#fff',
          padding: '0.2rem 0.5rem',
          borderRadius: '3px',
        }}
      >
        {(locale as ILA26_UiKitProviderProps['locale']) === 'en-US' ? 'Product' : 'Produit'}
      </span>

      <h1>{metadata?.title}</h1>
      <p
        style={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          lineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {metadata?.description}
      </p>
    </>
  );
};

export default ILA26_MarketplaceProduct;
