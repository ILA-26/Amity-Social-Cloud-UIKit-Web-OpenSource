import { ReactNode } from 'react';
import styled from 'styled-components';
import { Plus } from '~/icons';

export const PlusIcon = styled(Plus).attrs<{ icon?: ReactNode }>({ width: 15, height: 15 })`
  margin-right: 8px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const PageContainer = styled.div`
  & > * {
    margin-bottom: 20px;
  }
`;
