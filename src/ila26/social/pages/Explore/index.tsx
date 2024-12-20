import React, { useCallback, useState } from 'react';
import Recommended from '~/ila26/social/components/community/RecommendedCommunities';
import FollowedEnterprises from '~/ila26/social/components/community/FollowedEnterprises';
import SocialSearch from '~/ila26/social/components/SocialSearch';
import CategoriesCard from '~/social/components/category/CategoriesCard';
import CommunityCreationModal from '~/social/components/CommunityCreationModal';
import { HeaderSection, PageContainer, PlusIcon } from './styles';
import Button from '~/core/components/Button';
import { FormattedMessage } from 'react-intl';

const ExplorePage = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggleCreationModal = useCallback(() => {
    setOpen((prev) => !prev);
  }, [isOpen]);

  return (
    <PageContainer>
      <HeaderSection>
        <SocialSearch />
        <Button variant="primary" onClick={handleToggleCreationModal}>
          <PlusIcon />{' '}
          <span>
            <FormattedMessage id="exploreHeader.createCommunityButton" />
          </span>
        </Button>
      </HeaderSection>
      <Recommended />
      <CategoriesCard />
      <FollowedEnterprises />
      <CommunityCreationModal isOpen={isOpen} onClose={handleToggleCreationModal} />
    </PageContainer>
  );
};

export default ExplorePage;
