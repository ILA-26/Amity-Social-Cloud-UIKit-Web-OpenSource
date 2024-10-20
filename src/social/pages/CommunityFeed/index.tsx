import React, { useEffect, useState, useMemo } from 'react';

import { SubscriptionLevels } from '@amityco/ts-sdk';
import { FormattedMessage } from 'react-intl';
import CommunityCreatedModal from '~/social/components/CommunityCreatedModal';

import useCommunity from '~/social/hooks/useCommunity';

import Feed from '~/social/components/Feed';
import MediaGallery from '~/social/components/MediaGallery';
import CommunityInfo from '~/social/components/CommunityInfo';
import CommunityMembers from '~/social/components/CommunityMembers';
import FeedHeaderTabs from '~/social/components/FeedHeaderTabs';
import { CommunityFeedTabs } from './constants';
import { getTabs } from './utils';
import { DeclineBanner, Wrapper } from './styles';
import useCommunityPermission from '~/social/hooks/useCommunityPermission';
import useCommunitySubscription from '~/social/hooks/useCommunitySubscription';
import usePostsCollection from '~/social/hooks/collections/usePostsCollection';
import { ILA26_internalFeedProps } from '~/ila26/types/customPosts';

interface CommunityFeedProps extends ILA26_internalFeedProps {
  communityId: string;
  isNewCommunity: boolean;
}

const CommunityFeed = ({
  communityId,
  isNewCommunity,
  ILA26_communityManagerProps,
  ILA26_getInternalData,
}: CommunityFeedProps) => {
  const community: (Amity.Community & { needApprovalOnPostCreation?: boolean }) | null =
    useCommunity(communityId);

  const { canReview } = useCommunityPermission({ community });

  const { posts } = usePostsCollection({
    targetId: communityId,
    targetType: 'community',
    feedType: 'reviewing',
  });

  const pendingPostCount = posts.reduce((acc, post) => acc + post.flagCount, 0);

  const tabs = useMemo(
    () =>
      getTabs(
        community?.postSetting,
        community?.needApprovalOnPostCreation,
        community?.isJoined,
        canReview,
        pendingPostCount,
      ),
    [community?.postSetting, community?.isJoined, canReview, pendingPostCount],
  );

  const [activeTab, setActiveTab] = useState(CommunityFeedTabs.TIMELINE);

  useCommunitySubscription({
    communityId,
    level: SubscriptionLevels.POST,
  });

  useEffect(() => {
    if (!tabs.find((tab) => tab.value === activeTab)) {
      setActiveTab(tabs[0].value);
    }
  }, [activeTab, tabs]);

  const isJoined = community?.isJoined || false;

  const [isCreatedModalOpened, setCreatedModalOpened] = useState(isNewCommunity);

  return (
    <Wrapper>
      <CommunityInfo communityId={communityId} />

      <FeedHeaderTabs
        data-qa-anchor="community-feed-header"
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === CommunityFeedTabs.TIMELINE && (
        <Feed
          targetType={'community'}
          targetId={communityId}
          readonly={!isJoined}
          showPostCreator={isJoined}
          feedType={'published'}
          ILA26_communityManagerProps={ILA26_communityManagerProps}
          ILA26_getInternalData={ILA26_getInternalData}
        />
      )}

      {activeTab === CommunityFeedTabs.GALLERY && (
        <MediaGallery targetType={'community'} targetId={communityId} />
      )}

      {activeTab === CommunityFeedTabs.MEMBERS && <CommunityMembers communityId={communityId} />}

      {activeTab === CommunityFeedTabs.PENDING && (
        <>
          {canReview && (
            <DeclineBanner>
              <FormattedMessage id="community.review.declinePendingPosts" />
            </DeclineBanner>
          )}
          <Feed
            targetType={'community'}
            targetId={communityId}
            readonly={!isJoined}
            showPostCreator={false}
            feedType={'reviewing'}
            ILA26_communityManagerProps={ILA26_communityManagerProps}
            ILA26_getInternalData={ILA26_getInternalData}
          />
        </>
      )}

      {isCreatedModalOpened && (
        <CommunityCreatedModal
          communityId={communityId}
          onClose={() => setCreatedModalOpened(false)}
        />
      )}
    </Wrapper>
  );
};

export default CommunityFeed;
