import { ILA26_RealEstateProps } from '../types/componentProps';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SharedCustomPostContentType, StyledPrice } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const DefaultPost = ({ metadata }: ILA26_RealEstateProps) => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: metadata?.imageUrl ? '180px' : 'unset',
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
          <img
            src={metadata?.imageUrl ?? 'https://stilan26prdfront.blob.core.windows.net/public/no-image-product.svg'}
            style={{
              width: '100%',
              maxHeight: '180px',
              objectFit: metadata?.imageUrl ? 'cover' : 'contain',
            }}
            loading="lazy"
          />
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
      {metadata?.type &&
        <SharedCustomPostContentType>
          <FormattedMessage id={`post.${metadata?.type}`} />
        </SharedCustomPostContentType>}

      <h1>{metadata?.title}</h1>
      {metadata?.address && <p
        style={{
          overflow: 'hidden',
          display: 'flex',
          WebkitLineClamp: 2,
          lineClamp: 2,
          WebkitBoxOrient: 'vertical',
          gap: '10px',
        }}
      >
        <FontAwesomeIcon icon={faMapMarkedAlt} />
        {`${metadata?.address ?? ' - '}`}
      </p>}

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
        <StyledPrice>{metadata?.price}</StyledPrice>
      </p>
    </>
  );
};

export default DefaultPost;
