import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import SideMenuSection from '~/core/components/SideMenuSection';
import CommunitiesList from '~/social/components/CommunitiesList';

interface SideSectionEnterpriseCommunityProps {
  className?: string;
  activeCommunity?: string;
  categoryId: string | undefined;
}

const SideSectionEnterpriseCommunity = ({
  className,
  activeCommunity,
  categoryId,
}: SideSectionEnterpriseCommunityProps) => {
  return (
    <SideMenuSection heading={<FormattedMessage id="SideSectionMyCommunity.Enterprises" />}>
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

export default memo(SideSectionEnterpriseCommunity);
