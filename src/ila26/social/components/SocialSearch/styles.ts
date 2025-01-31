import styled, { css } from 'styled-components';

import Search from '~/icons/Search';

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  :dir(rtl) & {
    padding-left: unset;
    padding-right: 20px;
  }
`;

export const SearchIcon = styled(Search).attrs({ width: 16, height: 16 })`
  fill: ${({ theme }) => theme.palette.base.shade2};
`;

export const SocialSearchContainer = styled.div<{ sticky?: boolean }>`
  position: relative;

  ${({ sticky }) =>
    sticky &&
    css`
      z-index: 500;
      position: sticky;
      top: 0;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    `};
`;
