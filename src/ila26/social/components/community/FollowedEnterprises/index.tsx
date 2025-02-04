import React, { useMemo } from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Skeleton from '~/core/components/Skeleton';

import TrendingItem, { UITrendingItem } from '~/social/components/community/TrendingItem';
import { useNavigation } from '~/social/providers/NavigationProvider';
import Title from '~/social/components/community/Title';
import useCommunitiesCollection from '~/social/hooks/collections/useCommunitiesCollection';

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadMore = styled.span`
  color: ${({ theme }) => theme.palette.neutral.main};
  font-size: 12px !important;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CommunitiesList = styled.ul`
  list-style: none;
  counter-reset: trending;
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FollowedEnterprises = () => {
  const { onClickCommunity } = useNavigation();

  const { communities, hasMore, loadMore } = useCommunitiesCollection({
    membership: 'member',
    limit: 6,
  });

  const onlyOfficialCommunities = useMemo(
    () => communities.filter((community) => community.isOfficial),
    [communities],
  );

  return (
    <div>
      <Title>
        <FormattedMessage id="followedEnterprises" />
      </Title>
      <CommunitiesList>
        {onlyOfficialCommunities.map(({ communityId }) => (
          <li key={communityId}>
            <TrendingItem communityId={communityId} onClick={onClickCommunity} />
          </li>
        ))}
      </CommunitiesList>
      <Footer>
        {hasMore && (
          <LoadMore onClick={loadMore}>
            <FormattedMessage id="loadMore" />
          </LoadMore>
        )}
      </Footer>
    </div>
  );
};

export default FollowedEnterprises;
