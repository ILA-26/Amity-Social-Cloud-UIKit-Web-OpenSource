import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/pro-solid-svg-icons';

import UIOptions from '~/core/components/Options';
import { ArrowRight } from '~/icons';

export const Options = styled(UIOptions)`
  margin-left: auto;
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PostInfo = styled.div`
  margin-left: 8px;
`;

export const Name = styled.div`
  ${({ theme }) => theme.typography.title}
`;

export const ArrowSeparatorContainer = styled.div`
  margin: 0 4px !important;
`;

export const ArrowSeparator = styled(ArrowRight).attrs({
  height: '8px',
  width: '8px',
})`
  color: ${({ theme }) => theme.palette.base.shade1};
`;

export const ShieldIcon = styled(FaIcon).attrs({ icon: faShieldAlt })`
  margin-right: 4px;
`;

export const ModeratorBadge = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: ${({ theme }) => theme.palette.base.shade1};
  ${({ theme }) => theme.typography.captionBold};
`;

export const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  & > .time {
    margin-bottom: 4px;
  }

  ${({ showTime }) =>
    showTime &&
    css`
      & > ${ModeratorBadge} {
        &::after {
          content: '•';
          margin-left: 4px;
        }
      }
    `};
`;

export const PostNamesContainer = styled.div`
  display: flex;
  align-items: center;
`;