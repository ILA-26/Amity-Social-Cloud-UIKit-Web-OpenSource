import styled from 'styled-components';
import { Comment, Repost } from '~/icons';

export const EngagementBarContainer = styled.div`
  color: ${({ theme }) => theme.palette.neutral.shade1};
  ${({ theme }) => theme.typography.body}
`;

export const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e4e8;
  padding: 8px 0;
`;

export const InteractionBar = styled.div`
  display: flex;
  padding: 2px 0;
  border-bottom: 1px solid #e3e4e8;
`;

export const CommentIcon = styled(Comment).attrs({ width: 16, height: 16 })`
  position: relative;
  margin-right: 5px;
  :dir(rtl) & {
    margin-right: unsent;
    margin-left: 5px;
  }
`;

export const RepostIcon = styled(Repost).attrs({ width: 16, height: 16 })`
  position: relative;
  margin-right: 5px;
  :dir(rtl) & {
    margin-left: 5px;
    margin-right: unsent;
  }
`;

export const NoInteractionMessage = styled.div`
  color: ${({ theme }) => theme.palette.base.shade2};
  margin-top: 8px;
`;

export const CommentsLabel = styled('span')<{ $disabled?: boolean }>`
  ${({ $disabled }) =>
    !$disabled &&
    `cursor: pointer;
      &:hover {
        text-decoration: underline;
      }`}
`;
