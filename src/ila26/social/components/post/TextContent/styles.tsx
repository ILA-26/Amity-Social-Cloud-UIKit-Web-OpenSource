import styled from 'styled-components';
import Button from '~/core/components/Button';

export const PostContent = styled.div`
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.palette.neutral.main};
  white-space: pre-wrap;
  ${({ theme }) => theme.typography.body}
`;

export const ReadMoreButton = styled(Button).attrs({ variant: 'secondary' })<{ variant?: string }>`
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px;
  display: inline-block;
`;

export const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const PreviewContainer = styled.div`
  background-color: #eef0f3;
  margin-top: 15px;
  border: 1px solid lightgray;
`;

export const PreviewImage = styled.img`
  aspect-ratio: 2;
  object-fit: cover;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  padding: 5px 15px 15px 15px;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin: 0px;
`;

export const SubTitle = styled.span`
  color: #4d545d;
`;
