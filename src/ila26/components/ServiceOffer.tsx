import React from 'react';
import { ILA26_ServiceOfferProps } from '../types/componentProps';

const ILA26_ServiceOffer = ({ metadata }: ILA26_ServiceOfferProps) => {
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
        Offre de service
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

export default ILA26_ServiceOffer;
