import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import customizableComponent from '~/core/hocs/customization';

import Avatar from '~/core/components/Avatar';
import { backgroundImage as CategoryImage } from '~/icons/Category';

const CategoryHeaderContainer = styled.div`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar subtitle';
  grid-template-columns: min-content max-content;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.5em;
  padding: 1em;
  ${({ hasNoChildren }) =>
    hasNoChildren &&
    css`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}

  ${({ theme, clickable }) =>
    clickable &&
    `
    padding: .5rem;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: ${theme.palette.base.shade4};
    }`}
`;

const CategoryHeaderAvatar = styled(Avatar)`
  grid-area: avatar;
`;

const CategoryHeaderTitle = styled.div`
  grid-area: title;
  ${({ theme }) => theme.typography.title}
`;

const CategoryHeaderSubtitle = styled.div`
  grid-area: subtitle;
  ${({ theme }) => theme.typography.body}
`;

const CategoryHeader = ({ className, categoryId, name, avatarFileUrl, children, onClick }) => {
  const handleClick = () => onClick(categoryId);
  const blockClick = e => e.stopPropagation();

  return (
    <CategoryHeaderContainer
      className={className}
      title={name}
      hasNoChildren={!children}
      clickable={!!onClick}
      onClick={handleClick}
    >
      <CategoryHeaderAvatar avatar={avatarFileUrl} backgroundImage={CategoryImage} />
      <CategoryHeaderTitle title={categoryId}>{name}</CategoryHeaderTitle>
      {children && <CategoryHeaderSubtitle onClick={blockClick}>{children}</CategoryHeaderSubtitle>}
    </CategoryHeaderContainer>
  );
};

CategoryHeader.propTypes = {
  className: PropTypes.string,
  categoryId: PropTypes.string,
  name: PropTypes.string,
  avatarFileUrl: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default customizableComponent('CategoryHeader', CategoryHeader);