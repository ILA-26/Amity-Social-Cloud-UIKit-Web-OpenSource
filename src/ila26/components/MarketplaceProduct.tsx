import { ILA26_MarketplaceProductProps } from '../types/componentProps';
import React from 'react';
import { ILA26_UiKitProviderProps } from '../types/kitProviderProps';
import { useIntl } from 'react-intl';

const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
});

const ILA26_MarketplaceProduct = ({ metadata }: ILA26_MarketplaceProductProps) => {
  const { locale } = useIntl();

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '180px',
          marginBottom: '1rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <img
          src={
            metadata?.productPicture?.azureBlobUri ??
            'https://stilan26prdfront.blob.core.windows.net/b2c/logo.c116c8b3.jpg'
          }
          style={{ width: '100%', maxHeight: '180px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            background:
              ' linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.163) 5%, rgba(255,255,255,0) 100%)',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
        ></div>
      </div>
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

      <p>
        {(locale as ILA26_UiKitProviderProps['locale']) === 'en-US' ? 'Price' : 'Prix'}

        <span
          style={{
            color: '#5C2DD3',
            fontWeight: '700',
            marginLeft: '5px',
            fontSize: '17px',
          }}
        >
          {formatter.format(metadata?.price || 0)}
        </span>
      </p>
    </>
  );
};

export default ILA26_MarketplaceProduct;
