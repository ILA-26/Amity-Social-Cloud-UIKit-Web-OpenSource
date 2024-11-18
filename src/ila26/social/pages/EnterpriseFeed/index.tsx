import React, { useEffect, useState, useMemo } from 'react';

import { SubscriptionLevels } from '@amityco/ts-sdk';
import { FormattedMessage } from 'react-intl';

import useCommunity from '~/social/hooks/useCommunity';

import Feed from '~/social/components/Feed';
import MediaGallery from '~/social/components/MediaGallery';
import CommunityMembers from '~/social/components/CommunityMembers';
import FeedHeaderTabs from '~/social/components/FeedHeaderTabs';
import { EnterpriseFeedTabs } from './constants';
import { getTabs } from './utils';
import { DeclineBanner, Wrapper } from './styles';
import useCommunityPermission from '~/social/hooks/useCommunityPermission';
import useCommunitySubscription from '~/social/hooks/useCommunitySubscription';
import usePostsCollection from '~/social/hooks/collections/usePostsCollection';
import { ILA26_internalFeedProps } from '~/ila26/types/customPosts';

export interface EnterpriseFeedProps extends ILA26_internalFeedProps {
  communityId: string;
}

const EnterpriseFeed = ({
  communityId,
  ILA26_communityManagerProps,
  ILA26_getInternalData,
}: EnterpriseFeedProps) => {
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

  const [activeTab, setActiveTab] = useState(EnterpriseFeedTabs.TIMELINE);

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

  return (
    <Wrapper>
      <FeedHeaderTabs
        data-qa-anchor="community-feed-header"
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === EnterpriseFeedTabs.TIMELINE && (
        <Feed
          targetType={'community'}
          targetId={communityId}
          readonly={!isJoined}
          showPostCreator={false}
          feedType={'published'}
          ILA26_communityManagerProps={ILA26_communityManagerProps}
          ILA26_getInternalData={ILA26_getInternalData}
        />
      )}

      {activeTab === EnterpriseFeedTabs.GALLERY && (
        <MediaGallery targetType={'community'} targetId={communityId} />
      )}

      {activeTab === EnterpriseFeedTabs.MEMBERS && <CommunityMembers communityId={communityId} />}

      {activeTab === EnterpriseFeedTabs.PENDING && (
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
    </Wrapper>
  );
};

export default EnterpriseFeed;
