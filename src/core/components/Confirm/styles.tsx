import styled from 'styled-components';
import Modal from '~/core/components/Modal';
import Button, { PrimaryButton } from '~/core/components/Button';

export const ConfirmModal = styled(Modal)`
  max-width: 360px;
  :dir(rtl) & {
    div:first-child > svg {
      margin-left: unset;
      margin-right: auto;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DefaultOkButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.mode === "light" ? "#fff" : "#000"};
  background: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;
export const DefaultCancelButton = styled(Button)`
  margin-right: 10px;
  :dir(rtl) & {
    margin-right: unset;
    margin-left: 10px;
  }
`;
