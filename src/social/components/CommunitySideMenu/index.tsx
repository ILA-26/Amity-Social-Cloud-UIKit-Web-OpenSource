import React, { useMemo } from 'react';
import styled from 'styled-components';
import SideMenu from '~/core/components/SideMenu';
import SideSectionEnergyCommunity from '~/ila26/social/components/SideSectionEnergyCommunity';
import SideSectionEnterpriseCommunity from '~/ila26/social/components/SideSectionEnterpriseCommunity';
import SideSectionCommunity from '~/social/components/SideSectionCommunity';
import SideSectionMyCommunity from '~/social/components/SideSectionMyCommunity';
import UiKitSocialSearch from '~/social/components/SocialSearch';
import useCategoriesCollection from '~/social/hooks/collections/useCategoriesCollection';

const ENTERPRISES = 'Entreprises';
const ACCUEIL = 'Accueil';

const SocialSearch = styled(UiKitSocialSearch)`
  background: ${({ theme }) => theme.palette.system.background};
  padding: 0.5rem;
`;

interface CommunitySideMenuProps {
  className?: string;
  activeCommunity?: string;
}

const CommunitySideMenu = ({ className, activeCommunity }: CommunitySideMenuProps) => {
  const { categories } = useCategoriesCollection({
    includeDeleted: false,
    limit: 10,
    sortBy: 'name',
  });

  const energieCategoryId = useMemo(
    () => categories.find((item) => item.name === ACCUEIL)?.categoryId,
    [categories],
  );

  const enterprisesCategoryId = useMemo(
    () => categories.find((item) => item.name === ENTERPRISES)?.categoryId,
    [categories],
  );

  return (
    <SideMenu data-qa-anchor="community-side-menu" className={className}>
      <SocialSearch sticky searchBy="communities" />

      <SideSectionCommunity />

      <SideSectionEnergyCommunity
        activeCommunity={activeCommunity}
        categoryId={energieCategoryId || ''}
      />
      <SideSectionEnterpriseCommunity
        activeCommunity={activeCommunity}
        categoryId={enterprisesCategoryId || ''}
      />
      <SideSectionMyCommunity activeCommunity={activeCommunity} />
    </SideMenu>
  );
};

export default CommunitySideMenu;
