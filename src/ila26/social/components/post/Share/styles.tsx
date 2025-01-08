import styled from 'styled-components';
import { PrimaryButton } from '~/core/components/Button';
import InputText from '~/core/components/InputText';

export const PostShareContainer = styled.div`
  width: 520px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.system.background};
  border-radius: 4px;
`;

export const ContentContainer = styled.div`
  padding: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${({ theme }) => theme.palette.base.shade4};
  padding: 12px 16px;
`;

export const PostButton = styled(PrimaryButton)`
  padding: 10px 16px;
  margin-left: auto;
`;

export const PostInputText = styled(InputText)`
  display: block;
  border: none;
  & > textarea {
    width: 100%;
  }
`;
