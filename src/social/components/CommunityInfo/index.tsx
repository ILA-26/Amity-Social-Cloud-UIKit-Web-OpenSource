import React, { memo, useCallback, useMemo } from 'react';
import { CommunityPostSettings } from '@amityco/ts-sdk';
import UICommunityInfo from './UICommunityInfo';
import { leaveCommunityConfirmModal } from './leaveScenarioModals';

import { useCommunityInfo } from './hooks';

interface CommunityInfoProps {
  communityId: string;
}

const CommunityInfo = ({ communityId }: CommunityInfoProps) => {
  const {
    community,
    communityCategories,
    avatarFileUrl,
    canEditCommunity,
    onEditCommunity,
    joinCommunity,
    leaveCommunity,
    pendingPostsCount,
    canReviewCommunityPosts,
  } = useCommunityInfo(communityId);

  const categoryNames = (communityCategories || []).map((category) => category.name);

  // Function to remove the HTML comment used for ordering from the description
  const cleanDescription = useCallback((description?: string): string => {
    if (!description) return '';
    return description.replace(/<!--order:\d+-->/, '').trim();
  }, []);

  if (community == null) return null;

  const canLeaveCommunity = community.isJoined || false;
  const { membersCount, description, isJoined } = community;

  return (
    <UICommunityInfo
      communityId={communityId}
      communityCategories={categoryNames}
      pendingPostsCount={pendingPostsCount}
      postsCount={community.postsCount ?? 0}
      membersCount={membersCount}
      description={cleanDescription(description)}
      isJoined={isJoined || false}
      isOfficial={community.isOfficial || false}
      isPublic={community.isPublic || false}
      avatarFileUrl={avatarFileUrl || null}
      joinCommunity={joinCommunity}
      canEditCommunity={canEditCommunity}
      canLeaveCommunity={canLeaveCommunity || false}
      canReviewPosts={canReviewCommunityPosts}
      name={community.displayName}
      postSetting={community.postSetting || CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED}
      onEditCommunity={onEditCommunity}
      onClickLeaveCommunity={() =>
        leaveCommunityConfirmModal({
          onOk: () => leaveCommunity(),
        })
      }
    />
  );
};

export { UICommunityInfo };
export default CommunityInfo;
