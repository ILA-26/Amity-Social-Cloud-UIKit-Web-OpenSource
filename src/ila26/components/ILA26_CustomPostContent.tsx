import { ILA26_CustomPostContentProps } from '../types/componentProps';
import React from 'react';
import ILA26_ServiceOffer from './ServiceOffer';
import ILA26_MarketplaceProduct from './MarketplaceProduct';
const ILA26_CustomPostContent = ({ metadata, dataType, data }: ILA26_CustomPostContentProps) => {
  return metadata ? (
    <a href={data.text} style={{ all: 'unset', cursor: 'pointer' }} target="_blank">
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
        <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#f8f8f8' }}>
          <div style={{ padding: '1rem 1rem 0 1rem' }}>
            {dataType === `customPost.serviceOffer` ? (
              <ILA26_ServiceOffer metadata={metadata} />
            ) : dataType === `customPost.marketplaceProduct` ? (
              <ILA26_MarketplaceProduct metadata={metadata} />
            ) : (
              <h1>Unknown custom type</h1>
            )}
          </div>
        </div>
      </div>
    </a>
  ) : (
    <h1>no metadata</h1>
  );
};

export default ILA26_CustomPostContent;
