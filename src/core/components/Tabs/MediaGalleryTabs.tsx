import styled from 'styled-components';
import { TabButton, TabItem, TabsContainer, TabsList } from './styles';
import Tabs from '.';

export default styled(Tabs)`
  &${TabsContainer} {
    border: none;
  }

  ${TabsList} {
    padding: 0;
  }

  ${TabItem} {
    &:not(:first-child) {
      margin-left: 0.75em;
    }
  }

  ${TabButton} {
    margin: 0;
    padding: 0.5em 0.75em;
    background: ${({ theme }) => theme.mode === "light" ? "#ebecef" : "#0b2b4d"};
    color : ${({ theme }) => theme.palette.neutral.shade1};
    border-radius: 1.5em;
    ${({ theme }) => theme.typography.body}

    &.active {
      background: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.mode === "light" ? "#fff" : "#000"};
      ${({ theme }) => theme.typography.bodyBold}
      border-bottom: none;
    }
  }
`;
