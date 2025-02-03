import React from 'react';
import { ILA26_ServiceOfferProps } from '../types/componentProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { SharedCustomPostContentType } from './styles';

const ILA26_ServiceOffer = ({ metadata }: ILA26_ServiceOfferProps) => {
  return (
    <>
      <SharedCustomPostContentType>
        <FormattedMessage id="post.serviceOffer" />
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
      <p
        style={{
          overflow: 'hidden',
          display: 'flex',
          WebkitLineClamp: 2,
          lineClamp: 2,
          WebkitBoxOrient: 'vertical',
          gap : "10px"
        }}
      >
        <FontAwesomeIcon icon={faMapMarkedAlt} />
        {`${metadata?.address?.streetLine1 ?? ' - '}`}
      </p>
    </>
  );
};

export default ILA26_ServiceOffer;
