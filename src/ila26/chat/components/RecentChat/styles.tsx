import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
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
