import { ILA26_MarketplaceProductProps } from '../types/componentProps';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SharedCustomPostContentType, StyledPrice } from './styles';

const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
});

const ILA26_MarketplaceProduct = ({ metadata }: ILA26_MarketplaceProductProps) => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: metadata?.productPicture?.azureBlobUri ? '180px' : 'unset',
          marginBottom: '1rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <object
            data={metadata?.productPicture?.azureBlobUri}
            style={{
              width: '100%',
              maxHeight: '180px',
              objectFit: 'cover',
            }}
            aria-label={metadata?.title ?? 'Product image'}
          >
            <img
              src={'https://stilan26prdfront.blob.core.windows.net/public/no-image-product.svg'}
              style={{
                width: '100%',
                maxHeight: '180px',
                objectFit: 'contain',
              }}
            />
          </object>
          {!metadata?.productPicture?.azureBlobUri && (
            <span style={{ margin: '12px 0' }}>
              <FormattedMessage id="post.noImage" />
            </span>
          )}
        </div>
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
      <SharedCustomPostContentType>
        <FormattedMessage id="post.listing" />
      </SharedCustomPostContentType>

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
        <FormattedMessage id="post.price" />

        <StyledPrice>{formatter.format(metadata?.price || 0)}</StyledPrice>
      </p>
    </>
  );
};

export default ILA26_MarketplaceProduct;
