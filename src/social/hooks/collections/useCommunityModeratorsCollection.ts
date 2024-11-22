import { useEffect } from 'react';
import { CommunityRepository } from '@amityco/ts-sdk';

import useLiveCollection from '~/core/hooks/useLiveCollection';
import { MemberRoles } from '~/social/constants';

const { COMMUNITY_MODERATOR } = MemberRoles;

export default function useCommunityModeratorsCollection(
  communityId?: string,
  options?: { limit: number },
) {
  const { limit } = options ?? {};
  const { items, ...rest } = useLiveCollection({
    fetcher: CommunityRepository.Membership.getMembers,
    params: { communityId: communityId as string, roles: [COMMUNITY_MODERATOR], limit },
    shouldCall: () => !!communityId,
  });

  return {
    moderators: items,
    ...rest,
  };
}
