import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import CommunityHeader from '~/social/components/community/Header';

import { useNavigation } from '~/social/providers/NavigationProvider';
import { SocialSearchContainer, SearchIcon, SearchIconContainer } from './styles';
import { isNonNullable } from '~/helpers/utils';
import styled from 'styled-components';
import Menu from '~/core/components/Menu';
import { useInputAutocomplete } from '~/core/components/InputAutocomplete';
import InputText from '~/core/components/InputText';
import Suggestions from '~/core/components/Suggestions';
import Button from '~/core/components/Button';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useCommunitiesCollection from '~/social/hooks/collections/useCommunitiesCollection';

const Container = styled.div`
  position: relative;
  width: 300px;
`;

const SuggestionsMenu = styled(Menu)`
  z-index: 10;
  position: absolute;
  top: calc(100% + 0.25rem);
  width: 100%;
  color: ${({ theme }) => theme.palette.base.main};
`;

const CommunitySocialSearchTab = ({
  searchValue,
  isOpen,
}: {
  searchValue: string;
  isOpen?: boolean;
}) => {
  const { onClickCommunity } = useNavigation();
  const { communities, hasMore, loadMore } = useCommunitiesCollection({
    displayName: searchValue,
    limit: 6,
  });

  const filteredCommunities = communities.filter(isNonNullable);

  const filteredCommunityItems = filteredCommunities.map((community) => community.displayName);

  if (!isOpen) return null;

  return (
    <SuggestionsMenu>
      <Suggestions
        items={filteredCommunityItems}
        append={
          hasMore && loadMore ? (
            <Button fullWidth onClick={loadMore}>
              <FormattedMessage id="loadMore" />
            </Button>
          ) : null
        }
        onPick={(index) =>
          filteredCommunities[index]
            ? onClickCommunity(filteredCommunities[index].communityId)
            : null
        }
        renderItem={(displayName) => {
          const community = communities.find((community) => community.displayName === displayName);

          return community && <CommunityHeader communityId={community.communityId} />;
        }}
      />
    </SuggestionsMenu>
  );
};

interface SocialSearchProps {
  className?: string;
  sticky?: boolean;
}

const SocialSearch = ({ className, sticky = false }: SocialSearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const { open, isOpen, containerRef } = useInputAutocomplete({
    value: searchValue,
  });

  function onClear() {
    setSearchValue('');
  }

  return (
    <SocialSearchContainer className={className} sticky={sticky}>
      <FormattedMessage id="exploreHeader.searchCommunityPlaceholder">
        {([placeholder]) => (
          <Container ref={containerRef}>
            <InputText
              data-qa-anchor="social-search-input"
              value={searchValue}
              prepend={
                <SearchIconContainer>
                  <SearchIcon />
                </SearchIconContainer>
              }
              placeholder={typeof placeholder === 'string' ? placeholder : undefined}
              onClear={onClear}
              onChange={(newValue) => setSearchValue?.(newValue.plainText)}
              onClick={() => open()}
            />
            {isOpen && <CommunitySocialSearchTab searchValue={searchValue} isOpen={isOpen} />}
          </Container>
        )}
      </FormattedMessage>
    </SocialSearchContainer>
  );
};

export default (props: SocialSearchProps) => {
  const CustomComponentFn = useCustomComponent<SocialSearchProps>('SocialSearch');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <SocialSearch {...props} />;
};
