import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Newspaper, Search } from '~/icons';
import { PageTypes } from '~/social/constants';
import SideMenuSection from '~/core/components/SideMenuSection';
import { useNavigation } from '~/social/providers/NavigationProvider';
import SideMenuActionItem from '~/core/components/SideMenuActionItem';

export const NewsIcon = styled(Newspaper).attrs<{ icon?: ReactNode }>({ width: 20, height: 20 })``;

export const SearchIcon = styled(Search).attrs<{ icon?: ReactNode }>({ width: 20, height: 20 })``;

interface SideSectionCommunityProps {
  shouldHideExplore?: boolean;
  children?: ReactNode;
}

const SideSectionCommunity = ({ shouldHideExplore, children }: SideSectionCommunityProps) => {
  const { onChangePage, page } = useNavigation();

  return (
    <SideMenuSection heading={<FormattedMessage id="sidesectioncommunity.community" />}>
      {!shouldHideExplore && (
        <SideMenuActionItem
          data-qa-anchor="side-section-community-side-menu-action-item-explore-button"
          icon={<SearchIcon />}
          active={page.type === PageTypes.Explore || page.type === PageTypes.NewsFeed} // hide community news feed and fallback to explore
          onClick={() => onChangePage(PageTypes.Explore)}
        >
          <FormattedMessage id="sidesectioncommunity.explore" />
        </SideMenuActionItem>
      )}
      {children}
    </SideMenuSection>
  );
};

export default SideSectionCommunity;
