import { ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { CreateChat, Search } from '~/icons';

export const CreateNewChatIcon = styled(CreateChat).attrs<{ icon?: ReactNode }>({
  width: 24,
  height: 18,
})`
  width: 24px !important;
  cursor: pointer;
`;

export const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  padding: 24px 0 5px 0;
  background-color: white;
  border-right: 1px solid #e3e4e8;
  border-left: 1px solid #e3e4e8;
  max-height: 100dvh;
`;

export const RecentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 16px;
`;

export const RecentHeaderLabel = styled.span`
  ${({ theme }) => theme.typography.title};
  line-height: 28px;
  color: ${({ theme }) => theme.palette.neutral.shade1};
`;

export const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e3e4e8;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 15px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 2;
`;

export const SearchIcon = styled(Search).attrs<{ icon?: ReactNode }>({
  width: 22,
  height: 18,
})`
  padding-right: 8px;
  text-align: center;
  fill: gray;
`;

export const Center = styled.p`
  text-align: center;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  background-color: #fff;
`;

export const CategoryItem = styled.div.attrs<{ selected?: boolean }>({})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
  text-transform: uppercase;
  color: gray;
  fill: gray;
  span {
    font-size: 10px;
    margin: 2px;
  }
  font-weight: 600;
  &:hover {
    background-color: #EBECEE;
  }
  border-left: 2px solid transparent;
  ${({ selected, theme }) =>
    selected &&
    `
    border-left: 2px solid ${theme.palette.primary.main};
    background-color: #f7f7f8;
    color: ${theme.palette.primary.main};
    fill: ${theme.palette.primary.main};
    `}
`;

export const CountBadge = styled.span`
  position: absolute;
  z-index: 1;
  right:20px;
  top: 0px;
  color: white;
  background-color: red;
  padding: 2px 6px;
  border-radius: 25px;
  border: 2px solid white;
`;
