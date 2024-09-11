import styled from 'styled-components';
import SideMenuItem from '~/core/components/SideMenuItem';
import UserAvatar from '~/ila26/chat/components/UserAvatar';

export const ChatItemContainer = styled(SideMenuItem)<{active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0 18px 0 16px;
  border-radius: 0;
  ${({ active }) => active && 'background-color: #EFF4FE;'};
  &:hover {
    background-color: #EBECEE;
  }
`;

export const ChatItemLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(UserAvatar)`
  flex-shrink: 0;
`;

export const TitleContainer = styled.div`
  margin-left: 8px;
  text-align: start;
  width: 180px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.bodyBold};
  line-height: 20px;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SubTitle = styled.div`
  font-size: 12px !important;
  font-weight: normal;
  color: grey;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const UnreadCount = styled.div`
  padding: 0px 5px;
  font-size: 12px !important;
  color: #fff;
  background: red;
  border-radius: 20px;
`;
