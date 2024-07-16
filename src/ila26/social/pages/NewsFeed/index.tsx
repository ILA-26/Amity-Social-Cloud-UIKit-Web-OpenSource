import React from 'react';

import { PageTypes } from '~/social/constants';
import Feed from '~/ila26/social/components/Feed';

import { useNavigation } from '~/social/providers/NavigationProvider';

import { Wrapper } from './styles';
import { ILA26_internalFeedProps } from '~/ila26/types/customPosts';

const NewsFeed = ({
  ILA26_communityManagerProps,
  ILA26_getInternalData,
}: ILA26_internalFeedProps) => {
  const { onChangePage } = useNavigation();

  return (
    <Wrapper data-qa-anchor="news-feed">
      <Feed
        targetType={'globalFeed'}
        goToExplore={() => onChangePage(PageTypes.Explore)}
        showPostCreator
        ILA26_communityManagerProps={ILA26_communityManagerProps}
        ILA26_getInternalData={ILA26_getInternalData}
      />
    </Wrapper>
  );
};

export default NewsFeed;
