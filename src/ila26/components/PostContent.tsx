import { ILA26_CustomPostContentProps } from '../types/componentProps';
import React from 'react';
import { SharedCustomPostContentContainer } from './styles';
import DefaultPost from '~/ila26/components/DefaultPost';
import { ContentSkeleton } from '~/social/components/post/Post/styles';
import UnavailableContentRenderer from '~/ila26/components/UnavailableContentRenderer';

const PostContent = ({ metadata, data }: ILA26_CustomPostContentProps) => {
  return metadata && metadata?.shouldFetch
    ? <ContentSkeleton />
    : metadata?.id ? (
      <div>
        <a
          href={data.text}
          style={{ all: 'unset', cursor: 'pointer' }}
          target="_blank"
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
            <SharedCustomPostContentContainer>
              <div style={{ padding: '1rem 1rem 0 1rem' }}>
                <DefaultPost metadata={metadata} />
              </div>
            </SharedCustomPostContentContainer>
          </div>
        </a>
      </div>
    ) : (
      <a
        href={data.text}
        style={{ all: 'unset', cursor: 'pointer' }}
        target="_blank"
      >
        <UnavailableContentRenderer />
      </a>
    );
};

export default PostContent;
