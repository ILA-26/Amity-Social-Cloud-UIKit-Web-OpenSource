import React, { memo, useEffect, useState } from 'react';

import usePost from '~/social/hooks/usePost';
import usePoll from '~/social/hooks/usePoll';
import DefaultPostRenderer from './DefaultPostRenderer';
import useSDK from '~/core/hooks/useSDK';
import useUser from '~/core/hooks/useUser';
import { PollRepository, PostRepository, SubscriptionLevels } from '@amityco/ts-sdk';
import usePostByIds from '~/social/hooks/usePostByIds';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useImage from '~/core/hooks/useImage';
import usePostFlaggedByMe from '~/social/hooks/usePostFlaggedByMe';
import { usePostRenderer } from '~/social/providers/PostRendererProvider';
import usePostSubscription from '~/social/hooks/usePostSubscription';
import useReactionSubscription from '~/social/hooks/useReactionSubscription';
import { ILA26_internalData, ILA26_internalElementsTypes } from '~/ila26/types/customPosts';

interface PostProps {
  postId: string;
  className?: string;
  hidePostTarget?: boolean;
  readonly?: boolean;
  onDeleted?: (postId: string) => void;
  getInternalData?: (
    typeOfRequest: ILA26_internalElementsTypes,
    elementId: string,
  ) => Promise<ILA26_internalData>;
}

const Post = ({ postId, className, hidePostTarget, readonly, onDeleted, getInternalData }: PostProps) => {
  const post = usePost(postId);
  const postedUser = useUser(post?.postedUserId);
  const avatarFileUrl = useImage({ fileId: postedUser?.avatarFileId, imageSize: 'small' });
  const childrenPosts = usePostByIds(post?.children);
  const { userRoles } = useSDK();
  const { isFlaggedByMe, toggleFlagPost } = usePostFlaggedByMe(post);
  const postRenderFn = usePostRenderer(post?.dataType);
  const { currentUserId } = useSDK();
  const [postData, setPostData] = useState();

  usePostSubscription({
    postId,
    level: SubscriptionLevels.POST,
  });

  useReactionSubscription({
    targetType: post?.targetType,
    targetId: post?.targetId,
    shouldSubscribe: () => !!post,
  });

  const pollPost = (childrenPosts || []).find((childPost) => childPost.dataType === 'poll');

  const poll = usePoll((pollPost?.data as Amity.ContentDataPoll)?.pollId);
  const isPollClosed = poll?.status === 'closed';

  const handleClosePoll = async () => {
    if (poll == null) return;
    await PollRepository.closePoll(poll.pollId);
  };

  const handleDeletePost = async () => {
    if (post == null) return;
    await PostRepository.deletePost(post.postId);
    onDeleted?.(post.postId);
  };

  const handleApprovePost = async () => {
    if (post == null) return;
    await PostRepository.approvePost(post.postId);
  };
  const handleDeclinePost = async () => {
    if (post == null) return;
    await PostRepository.declinePost(post.postId);
  };

  useEffect(() => {
    const loadInternalData = async () => {
      const type = post?.metadata?.type;
      const id = post?.metadata?.id;

      if (!post || !getInternalData || !type || !id) return;

      try {
        const metadata = await getInternalData(type, id);
        if (metadata) {
          setPostData({ ...post, metadata });
        }
      } catch (error) {
        console.error("Failed to load internal data:", error);
      }
    };

    loadInternalData();
  }, [post, getInternalData]);


  if (post == null || postRenderFn == null) {
    return <DefaultPostRenderer loading />;
  }

  return (
    <>
      {postRenderFn({
        childrenPosts: childrenPosts || [],
        handleClosePoll,
        isPollClosed,
        avatarFileUrl,
        user: postedUser,
        poll,
        className,
        currentUserId: currentUserId || undefined,
        hidePostTarget,
        post: postData ?? post,
        userRoles,
        readonly,
        isFlaggedByMe,
        handleReportPost: toggleFlagPost,
        handleUnreportPost: toggleFlagPost,
        handleApprovePost,
        handleDeclinePost,
        handleDeletePost,
      })}
    </>
  );
};

export default memo((props: PostProps) => {
  const CustomComponentFn = useCustomComponent<PostProps>('Post');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <Post {...props} />;
});
