import { ReactNode } from 'react';
import styled from 'styled-components';
import { Plus } from '~/icons';

export const PlusIcon = styled(Plus).attrs<{ icon?: ReactNode }>({ width: 15, height: 15 })`
  margin-right: 8px;
  :dir(rtl) & {
    margin-right: unset;
    margin-left: 8px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  :dir(rtl) & {
    [data-qa-anchor='community-creation-modal'] > div:first-child > svg {
      margin-left: unset;
      margin-right: auto;
    }
    .chevron-right-icon,
    .chevron-left-icon {
      transform: rotate(180deg)
    }
  }
`;
