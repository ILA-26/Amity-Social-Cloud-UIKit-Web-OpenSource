import React, { memo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PostShareContainer, Footer, ContentContainer, PostButton, PostInputText } from './styles';
import Post from '~/social/components/post/Post';
import {
  MAXIMUM_POST_CHARACTERS,
  MAXIMUM_POST_MENTIONEES,
} from '~/social/components/post/Creator/constants';
import { info } from '~/core/components/Confirm';
import useSocialMention from '~/social/hooks/useSocialMention';
import { Post as PostType } from '~/ila26/types';
import { PostRepository } from '@amityco/ts-sdk';
import { notification } from '~/core/components/Notification';
import { ERROR_RESPONSE } from '~/social/constants';
import useSDK from '~/core/hooks/useSDK';

interface PostShareProps {
  post: PostType;
  onSave: () => void;
  className?: string;
  placeholder?: string;
}

const overCharacterModal = () =>
  info({
    title: <FormattedMessage id="postCreator.unableToPost" />,
    content: <FormattedMessage id="postCreator.overCharacter" />,
    okText: <FormattedMessage id="postCreator.done" />,
    type: 'info',
  });

const PostShare = ({ post, placeholder, className, onSave }: PostShareProps) => {
  const { formatMessage } = useIntl();

  const { mentionees, metadata, text, markup, onChange, queryMentionees, clearAll } =
    useSocialMention({ targetType: post.targetType, targetId: post.targetId });
  const [isCreating, setIsCreating] = useState(false);
  const { currentUserId } = useSDK();

  if (post.postId == null) return null;

  const onSharePost = async () => {
    if (!post.targetId) return;
    try {
      setIsCreating(true);

      if (text.length && text.length > MAXIMUM_POST_CHARACTERS) {
        overCharacterModal();
        return;
      }

      await PostRepository.createPost({
        dataType: 'custom.share',
        targetId: currentUserId,
        targetType: 'user',
        data: {
          originPostId: post.dataType === 'custom.share' ? post.data.originPostId : post.postId,
          text,
        },
      });

      onSave();
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === ERROR_RESPONSE.CONTAIN_BLOCKED_WORD) {
          notification.error({
            content: <FormattedMessage id="notification.error.blockedWord" />,
          });
        }
      }
    } finally {
      setIsCreating(false);
    }
  };

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
        <PostButton data-qa-anchor="post-share-save-button" onClick={onSharePost} disabled={isCreating}>
          <FormattedMessage id="post.repost" />
        </PostButton>
      </Footer>
    </PostShareContainer>
  );
};

export default memo(PostShare);
