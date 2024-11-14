import React, { memo, useCallback } from 'react';
import useCommunity from '~/social/hooks/useCommunity';
import useImage from '~/core/hooks/useImage';
import UITrendingItem from './UITrendingItem';
import useFile from '~/core/hooks/useFile';
import useCategoriesByIds from '~/social/hooks/useCategoriesByIds';

interface TrendingItemProps {
  communityId: string;
  onClick: (communityId: string) => void;
  loading?: boolean;
}

const TrendingItem = ({ communityId, onClick, loading }: TrendingItemProps) => {
  const community = useCommunity(communityId);
  const avatarFileUrl = useImage({ fileId: community?.avatarFileId });

  const communityCategories = useCategoriesByIds(community?.categoryIds);

  // Function to remove the HTML comment used for ordering from the description
  const cleanDescription = useCallback((description?: string): string => {
    if (!description) return '';
    return description.replace(/<!--order:\d+-->/, '').trim();
  }, []);

  const handleClick = () => onClick(communityId);

  if (community == null) return null;

  const { membersCount, description } = community;

  return (
    <UITrendingItem
      avatarFileUrl={avatarFileUrl}
      description={cleanDescription(description)}
      categories={communityCategories}
      membersCount={membersCount}
      isOfficial={community.isOfficial}
      isPublic={community.isPublic}
      name={community.displayName}
      loading={loading}
      onClick={handleClick}
    />
  );
};

export { UITrendingItem };
export default memo(TrendingItem);
