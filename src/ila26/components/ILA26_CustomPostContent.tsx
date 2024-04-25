import { ILA26_CustomPostContentProps } from '../types/componentProps';
import React from 'react';
import ILA26_ServiceOffer from './ServiceOffer';
import ILA26_MarketplaceProduct from './MarketplaceProduct';
const ILA26_CustomPostContent = ({ metadata, dataType, data }: ILA26_CustomPostContentProps) => {
  return metadata ? (
    <a href={data.text} style={{ all: 'unset', cursor: 'pointer' }} target="_blank">
      <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 3rem' }}>
        <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#f8f8f8' }}>
          {dataType === 'customPost.marketplaceProduct' && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
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
                    ' linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6629245448179272) 5%, rgba(255,255,255,0) 100%)',
                  top: 0,
                  left: 0,
                  height: '98%',
                  width: '100%',
                }}
              ></div>
            </div>
          )}
          <div style={{ padding: '1rem 1rem' }}>
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
