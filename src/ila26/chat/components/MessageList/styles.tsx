import styled from 'styled-components';

export const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  overflow: auto;
  background: ${({ theme }) => theme.mode === "light" ? "#f7f7f8" : "#0b2b4d"};
`;

export const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
`;
