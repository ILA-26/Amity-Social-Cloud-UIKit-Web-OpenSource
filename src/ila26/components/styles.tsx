import styled from 'styled-components';

export const SharedCustomPostContentContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === 'light' ? '#f8f8f8' : '#0b2b4d')};
`;

export const SharedCustomPostContentType = styled.span`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#000')};
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
`;

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  margin-left: 5px;
  font-size: 17px;
`;
