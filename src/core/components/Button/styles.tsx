import styled, { DefaultTheme, css } from 'styled-components';

const commonButtonStyles = ({ theme }: { theme: DefaultTheme }) => css<{ fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  outline: none;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${theme.typography.bodyBold}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  justify-content: center;
  &:disabled {
    cursor: default;
  }
  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const DefaultButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'fullWidth',
})<{ fullWidth?: boolean }>`
  ${commonButtonStyles};
  background-color: ${({ theme }) => theme.palette.system.background};
  border: 1px solid ${({ theme }) => theme.palette.system.dividers};
  color: ${({ theme }) => theme.palette.neutral.main};
  &:hover {
    color: ${({ theme }) => theme.palette.neutral.shade1};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.neutral.shade2};
  }
`;

export const PrimaryButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'fullWidth',
})<{ fullWidth?: boolean }>`
  ${commonButtonStyles};
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#000')};
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.3;
  }
`;

export const SecondaryButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'fullWidth',
})<{ active?: boolean; fullWidth?: boolean }>`
  ${commonButtonStyles};
  color: ${({ theme }) => theme.palette.neutral.shade1};
  background-color: transparent;
  border: none;
  &:hover {
    background-color: ${({ theme }) => (theme.mode === 'light' ? '#f2f2f4' : '#0b2b4d')};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.neutral.shade2};
  }
  ${({ active, theme }) => active && `color: ${theme.palette.primary.shade1};`}
`;
