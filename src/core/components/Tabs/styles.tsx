import styled from 'styled-components';

export const TabsContainer = styled.nav`
  background: ${({ theme }) => theme.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid ${({ theme }) => theme.palette.system.dividers};
`;

export const TabsList = styled.ul`
  margin: 0;
  padding: 0 16px;
  list-style-type: none;
`;

export const TabItem = styled.li`
  display: inline-block;
`;

export const TabButton = styled.button`
  padding: 0.75em;
  margin-right: 0.5em;
  background-color:${({ theme }) => theme.palette.system.background};
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.palette.neutral.shade2};
  ${({ theme }) => theme.typography.bodyBold}
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.palette.neutral.shade3};
  }

  &.active {
    ${({ theme }) => `
      border-bottom: 2px solid ${theme.palette.primary.main};
      color: ${theme.palette.primary.main};
    `}
  }

  &:disabled {
    color: #abaeba;
  }

  transition: border-color 0.3s;
`;
