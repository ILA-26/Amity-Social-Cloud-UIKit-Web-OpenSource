import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import SideMenuSection from '~/core/components/SideMenuSection';
import CommunitiesList from '~/social/components/CommunitiesList';

interface SideSectionEnergyCommunityProps {
  className?: string;
  activeCommunity?: string;
  categoryId: string | undefined;
}

const SideSectionEnergyCommunity = ({
  className,
  activeCommunity,
  categoryId
}: SideSectionEnergyCommunityProps) => {
  return (
    <SideMenuSection heading={<FormattedMessage id="SideSectionMyCommunity.EnergyCommunities" />}>
      <CommunitiesList
        className={className}
        communitiesQueryParam={{
          membership: 'all',
          limit: 20,
          categoryId,
        }}
        activeCommunity={activeCommunity}
      />
    </SideMenuSection>
  );
};

export default memo(SideSectionEnergyCommunity);
