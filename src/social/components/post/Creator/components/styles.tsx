import styled from 'styled-components';
import UIAvatar from '~/core/components/Avatar';

export const Avatar = styled(UIAvatar)`
  margin-right: 8px;
`;

export const Label = styled("div")`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.palette.neutral.shade2};
`