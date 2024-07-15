import styled from 'styled-components';
import { ReactNode } from 'react';
import { BarsIcon, Close } from "~/icons";

export const DetailsIcon = styled(BarsIcon).attrs<{ icon?: ReactNode }>({
  width: 24,
  height: 24,
})`
    cursor: pointer;
    fill: ${({ theme }) => theme.palette.neutral.main};
    align-self: center;
`;

export const ChatHeaderContainer = styled.div<{ $variant: 'regular' | 'popup' }>`
  height: 76px;
  padding: 0 20px;
  background: ${({ theme }) => theme.palette.system.background};
  border-bottom: 1px solid #e3e4e8;
  border-top-right-radius: ${(props) => (props.$variant === 'popup' ? '10px' : '0px')};
  border-top-left-radius: ${(props) => (props.$variant === 'popup' ? '10px' : '0px')};
  display: flex;
  justify-content: space-between;
`;

export const HeaderCloseIcon = styled(Close).attrs<{ icon?: ReactNode }>({ width: 20, height: 20 })`
  fill: ${({ theme }) => theme.palette.neutral.main};
  cursor: pointer;
  align-self: center;
`;

export const Channel = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
`;

export const ChannelInfo = styled.div`
  margin-left: 8px;
`;

export const ChannelName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
`;

export const MemberCount = styled.div`
  font-size: 12px;
  color: #999999;
`;
