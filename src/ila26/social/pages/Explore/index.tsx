import React from 'react';

import Recommended from '~/ila26/social/components/community/RecommendedCommunities';
import FollowedEnterprises from '~/ila26/social/components/community/FollowedEnterprises';
import CategoriesCard from '~/social/components/category/CategoriesCard';

import { PageContainer } from './styles';

const ExplorePage = () => (
  <PageContainer>
    <Recommended />
    <CategoriesCard />
    <FollowedEnterprises />
  </PageContainer>
);

export default ExplorePage;
