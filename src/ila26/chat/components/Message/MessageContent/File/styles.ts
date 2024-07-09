import { styled } from "styled-components";
import Icon from '~/icons/files';

export const FileContainer = styled.a`
  display: block;
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.base.shade4};
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  background-color: #ffffffce;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'icon name size remove';
  grid-template-columns: minmax(min-content, 2em) auto max-content min-content;
  grid-template-rows: 2.5em;
  grid-gap: 0.5em;
  padding: 0.5em;
  align-items: center;
`;

export const FileIcon = styled(Icon)`
  grid-area: icon;
`;

export const FileName = styled.div`
  grid-area: name;
  padding: 0 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ theme }) => theme.typography.bodyBold}
`;

export const FileSize = styled.div`
  grid-area: size;
  ${({ theme }) => theme.typography.caption};
  color: ${({ theme }) => theme.palette.base.shade1};
`;
