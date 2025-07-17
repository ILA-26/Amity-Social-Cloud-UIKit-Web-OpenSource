import { ILA26_CustomPostContentProps } from '../types/componentProps';
import React from 'react';
import { ILA26_PostTextUrlRemoval } from '../utils';
import { SharedCustomPostContentContainer } from './styles';
import RealEstatePost from '~/ila26/components/real-estate-post';

const RealEstateCustomPostContent = ({ metadata, data }: ILA26_CustomPostContentProps) => {
  return metadata && metadata?.id ? (
    <div>
      <p>{ILA26_PostTextUrlRemoval(data.text)}</p>
      <a
        href={data.text}
        style={{ all: 'unset', cursor: 'pointer' }}
        target="_blank"
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
          <SharedCustomPostContentContainer>
            <div style={{ padding: '1rem 1rem 0 1rem' }}>
              <RealEstatePost metadata={metadata} />
            </div>
          </SharedCustomPostContentContainer>
        </div>
      </a>
    </div>
  ) : (
    <h1>no metadata</h1>
  );
};

export default RealEstateCustomPostContent;
