import React, { memo, useCallback, useEffect, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';

import HorizontalList from '~/core/components/HorizontalList';
import Skeleton from '~/core/components/Skeleton';
import CommunityCard, { UICommunityCard } from '~/social/components/community/Card';
import useCategoriesCollection from '~/social/hooks/collections/useCategoriesCollection';
import useCommunitiesCollection from '~/social/hooks/collections/useCommunitiesCollection';

import { useNavigation } from '~/social/providers/NavigationProvider';

const COLUMNS = {
  720: 3,
  1024: 4,
  1280: 6,
  1440: 6,
  1800: 6,
};

const ACCUEIL = 'Accueil';

const RecommendedList = () => {
  const { onClickCommunity } = useNavigation();
  const {
    categories,
    hasMore,
    loadMore,
    isLoading: isLoadingCategories,
  } = useCategoriesCollection({
    includeDeleted: false,
    limit: 10,
    sortBy: 'name',
  });

  const energieCategoryId = useMemo(
    () => categories.find((item) => item.name === ACCUEIL)?.categoryId,
    [categories],
  );

  useEffect(() => {
    if (!energieCategoryId && hasMore && !isLoadingCategories) {
      loadMore();
    }
  }, [energieCategoryId]);

  const { communities, isLoading } = useCommunitiesCollection({
    categoryId: energieCategoryId,
    limit: 6,
  });

  const parseOrderFromDescription = useCallback((description: string | undefined): number => {
    if (!description) return Infinity;
    const match = description.match(/<!--order:(\d+)-->/);
    return match ? parseInt(match[1], 10) : Infinity;
  }, []);

  const sortedCommunities: Amity.Community[] = useMemo(() => {
    return communities.sort((a, b) => {
      return parseOrderFromDescription(a.description) - parseOrderFromDescription(b.description);
    });
  }, [communities]);

  const title = isLoading ? (
    <Skeleton style={{ fontSize: 12, maxWidth: 156 }} />
  ) : (
    <FormattedMessage id="recommendedList" />
  );

  if (!communities?.length) return null;

  return (
    <HorizontalList title={title} columns={COLUMNS}>
      {isLoading && new Array(4).fill(1).map((x, index) => <UICommunityCard key={index} loading />)}

      {!isLoading &&
        sortedCommunities.map(({ communityId }) => (
          <CommunityCard key={communityId} communityId={communityId} onClick={onClickCommunity} />
        ))}
    </HorizontalList>
  );
};

export default memo(RecommendedList);
