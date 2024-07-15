import { FormattedMessage } from 'react-intl';
import { PostButton } from '~/social/components/post/Creator/styles';
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu, { MenuItem } from '~/core/components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
type ILA26_CustomPostCreatorPostButtonProps = {
  isCommunityManager: boolean;
  userName: string;
  communityName: string | undefined;
  onAsEnterpriseClick: () => Promise<void>;
  onAsUserClick: () => Promise<void>;
  isDisabled: boolean;
};

const PostOptions = styled(Menu)`
  z-index: 10;
  position: absolute;
  margin-top: 42px;
  width: 100%;
  color: ${({ theme }) => theme.palette.base.main};
`;

const PostSingleOption = styled(MenuItem)`
  background: #fff;
`;
const ILA26_CustomPostCreatorPostButton = ({
  isCommunityManager,
  communityName,
  userName,
  onAsEnterpriseClick,
  onAsUserClick,
  isDisabled,
}: ILA26_CustomPostCreatorPostButtonProps) => {
  const [isPostOptionsOpen, setIsPostOptionsOpen] = useState<boolean>();
  return isCommunityManager ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        position: 'relative',
      }}
    >
      <PostButton
        disabled={isDisabled}
        data-qa-anchor="post-creator-post-button"
        onClick={() => setIsPostOptionsOpen((prev) => !prev)}
      >
        <FormattedMessage id="postAs" />
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '8px' }} />
      </PostButton>
      {isPostOptionsOpen && (
        <PostOptions>
          <PostSingleOption
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAsUserClick();
              setIsPostOptionsOpen(false);
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {userName}
          </PostSingleOption>
          <PostSingleOption
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAsEnterpriseClick();
              setIsPostOptionsOpen(false);
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {communityName}
          </PostSingleOption>
        </PostOptions>
      )}
    </div>
  ) : (
    <PostButton
      disabled={isDisabled}
      data-qa-anchor="post-creator-post-button"
      onClick={onAsUserClick}
    >
      <FormattedMessage id="post" />
    </PostButton>
  );
};

export default ILA26_CustomPostCreatorPostButton;
