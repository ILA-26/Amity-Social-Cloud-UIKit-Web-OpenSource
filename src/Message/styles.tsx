import React from 'react';
import styled from 'styled-components';
import ReactTinyPopover from 'react-tiny-popover';
import UiKitAvatar from '../Avatar';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSave, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export const SystemMessageContainer = styled.span`
  opacity: 0.5;
`;

export const EditingContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const EditingInput = styled.input`
  height: 34px;
  padding: 6px;
  margin: 5px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
`;

export const SaveIcon = styled(FaIcon).attrs({ icon: faSave })`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled(FaIcon).attrs({ icon: faTrashAlt })`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(FaIcon).attrs({ icon: faTimes })`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;

export const MessageOptionsIcon = styled(FaIcon).attrs({ icon: faEllipsisV })`
  opacity: 0.5;
  font-size: 11px;
  padding: 0 5px;
  cursor: pointer;
`;

const ReactPopover = props => <ReactTinyPopover containerClassName={props.className} {...props} />;

// TODO move in common components
export const Popover = styled(ReactPopover)`
  background: white;
  min-width: 200px;
  padding: 4px 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Menu = styled.div``;

export const MenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background: #f2f2f4;
  }
`;

export const Avatar = styled(UiKitAvatar)`
  margin-right: auto;
`;

export const MessageWrapper = styled.div`
  display: flex;
  max-width: 60%;
  min-width: 60px;
  ${({ incoming }) => !incoming && 'align-self: flex-end;'}
`;

export const MessageContainer = styled.div``;

export const AvatarWrapper = styled.div`
  width: 52px;
  flex-shrink: 0;
`;

export const UserName = styled.div`
  color: #17181c;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const MessageBody = styled.div`
  word-break: break-word;
  padding: 8px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  ${({ incoming }) =>
    incoming
      ? `
  background: #e3e4e8;
  border-radius: 0px 6px 6px 6px;
`
      : `
  background: #1054DE;
  color: #fff;
  border-radius: 6px 0px 6px 6px;
`}
`;

export const MessageDate = styled.div`
  font-size: 13px;
  opacity: 0.5;
  margin-left: auto;
`;

export const BottomLine = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
`;