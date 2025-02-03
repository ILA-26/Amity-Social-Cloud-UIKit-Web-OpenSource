import { ILA26_CustomPostContentProps } from '../types/componentProps';
import React from 'react';
import ILA26_ServiceOffer from './ServiceOffer';
import ILA26_MarketplaceProduct from './MarketplaceProduct';
import { FormattedMessage } from 'react-intl';
import { ILA26_PostTextUrlExtractor, ILA26_PostTextUrlRemoval } from '../utils';
import { SharedCustomPostContentContainer } from './styles';
const ILA26_CustomPostContent = ({ metadata, dataType, data }: ILA26_CustomPostContentProps) => {
  return metadata ? (
    <div>
      <p>{ILA26_PostTextUrlRemoval(data.text)}</p>
      <a
        href={ILA26_PostTextUrlExtractor(data.text)}
        style={{ all: 'unset', cursor: 'pointer' }}
        target="_blank"
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
          <SharedCustomPostContentContainer>
            <div style={{ padding: '1rem 1rem 0 1rem' }}>
              {dataType === `customPost.serviceOffer` ? (
                <ILA26_ServiceOffer metadata={metadata} />
              ) : dataType === `customPost.marketplaceProduct` ? (
                <ILA26_MarketplaceProduct metadata={metadata} /> 
              ) : (
                <h1>
                  <FormattedMessage id="post.unknownDataType" />
                </h1>
              )}
            </div>
          </SharedCustomPostContentContainer>
        </div>
      </a>
    </div>
  ) : (
    <h1>no metadata</h1>
  );
};

export default ILA26_CustomPostContent;
