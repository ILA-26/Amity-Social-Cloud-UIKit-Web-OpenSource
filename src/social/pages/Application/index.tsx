import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PageTypes } from '~/social/constants';

import MainLayout from '~/social/layouts/Main';

import CommunitySideMenu from '~/social/components/CommunitySideMenu';

import ExplorePage from '~/social/pages/Explore';
import NewsFeedPage from '~/social/pages/NewsFeed';
import CommunityFeedPage from '~/social/pages/CommunityFeed';
import UserFeedPage from '~/social/pages/UserFeed';
import CategoryCommunitiesPage from '~/social/pages/CategoryCommunities';
import CommunityEditPage from '~/social/pages/CommunityEdit';
import ProfileSettings from '~/social/components/ProfileSettings';
import { useNavigation } from '~/social/providers/NavigationProvider';
import useSDK from '~/core/hooks/useSDK';
import { ILA26_internalFeedProps } from '~/ila26/types/customPosts';

const ApplicationContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledCommunitySideMenu = styled(CommunitySideMenu)`
  min-height: 100%;
`;

const Community = ({
  ILA26_getInternalData,
  ILA26_communityManagerProps,
}: ILA26_internalFeedProps) => {
  const { page } = useNavigation();

  const { client } = useSDK();
  const [socialSettings, setSocialSettings] = React.useState<Amity.SocialSettings | null>(null);

  useEffect(() => {
    if (client == null) return;

    async function run() {
      const settings = await client?.getSocialSettings();

      if (settings) {
        setSocialSettings(settings);
      }
    }
    run();
  }, [client]);

  return (
    <ApplicationContainer>
      <MainLayout aside={<StyledCommunitySideMenu activeCommunity={page.communityId} />}>
        {
          (page.type === PageTypes.Explore || page.type === PageTypes.NewsFeed) && <ExplorePage /> // hide community news feed and fallback to explore
        }

        {page.type === PageTypes.CommunityFeed && (
          <CommunityFeedPage
            ILA26_communityManagerProps={ILA26_communityManagerProps}
            ILA26_getInternalData={ILA26_getInternalData}
            communityId={page.communityId}
            isNewCommunity={page.isNewCommunity}
          />
        )}

        {page.type === PageTypes.CommunityEdit && (
          <CommunityEditPage communityId={page.communityId} tab={page.tab} />
        )}

        {page.type === PageTypes.Category && (
          <CategoryCommunitiesPage categoryId={page.categoryId} />
        )}

        {page.type === PageTypes.UserFeed && (
          <UserFeedPage
            ILA26_communityManagerProps={ILA26_communityManagerProps}
            ILA26_getInternalData={ILA26_getInternalData}
            userId={page.userId}
            socialSettings={socialSettings}
          />
        )}

        {page.type === PageTypes.UserEdit && <ProfileSettings userId={page.userId} />}
      </MainLayout>
    </ApplicationContainer>
  );
};

export default Community;
