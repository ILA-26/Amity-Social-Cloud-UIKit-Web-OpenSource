import React from 'react';

import Recommended from '~/ila26/social/components/community/RecommendedCommunities';
import FollowedEnterprises from '~/ila26/social/components/community/FollowedEnterprises';
import CategoriesCard from '~/social/components/category/CategoriesCard';

import { HeaderSection, PageContainer } from './styles';
import SocialSearch from '~/ila26/social/components/SocialSearch';

const ExplorePage = () => (
  <PageContainer>
    <HeaderSection>
      <SocialSearch sticky />
    </HeaderSection>
    <Recommended />
    <CategoriesCard />
    <FollowedEnterprises />
  </PageContainer>
);

export default ExplorePage;
