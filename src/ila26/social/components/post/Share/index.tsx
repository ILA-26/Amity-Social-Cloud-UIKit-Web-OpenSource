import React, { memo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PostShareContainer, Footer, ContentContainer, PostButton, PostInputText } from './styles';
import Post from '~/social/components/post/Post';
import { MAXIMUM_POST_MENTIONEES } from '~/social/components/post/Creator/constants';
import { info } from '~/core/components/Confirm';
import useSocialMention from '~/social/hooks/useSocialMention';
import { Post as PostType } from '~/ila26/types';

interface PostShareProps {
  post: PostType;
  onSave: () => void;
  className?: string;
  placeholder?: string;
}

const PostShare = ({ post, placeholder, className, onSave }: PostShareProps) => {
  const { formatMessage } = useIntl();

  const { mentionees, metadata, text, markup, onChange, queryMentionees, clearAll } =
    useSocialMention({ targetType: post.targetType, targetId: post.targetId });
  
  if (post.postId == null) return null;

  const _placeholder = placeholder || formatMessage({ id: 'post.placehoder' });

  return (
    <PostShareContainer className={className}>
      <ContentContainer>
        <PostInputText
          multiline
          onChange={({ text, plainText: plainTextVal, mentions }) => {
            if (mentions?.length > MAXIMUM_POST_MENTIONEES) {
              return info({
                title: <FormattedMessage id="postCreator.unableToMention" />,
                content: <FormattedMessage id="postCreator.overMentionees" />,
                okText: <FormattedMessage id="postCreator.okText" />,
                type: 'info',
              });
            }

            onChange({ text, plainText: plainTextVal, mentions });
          }}
          placeholder={_placeholder}
          value={markup}
        />
        <Post postId={post.postId} readonly={true} />
      </ContentContainer>
      <Footer>
        <PostButton
          data-qa-anchor="post-share-save-button"
          onClick={() => console.log('handleClick')}
        >
          <FormattedMessage id="post.share" />
        </PostButton>
      </Footer>
    </PostShareContainer>
  );
};

export default memo(PostShare);
