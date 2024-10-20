import React, { useCallback, useContext, useEffect } from 'react';
import { FormattedTime, FormattedDate, useIntl, FormattedMessage } from 'react-intl';

import { backgroundImage as UserImage } from '~/icons/User';

import Options from './Options';
import MessageContent from './MessageContent';

import {
  Avatar,
  AvatarWrapper,
  MessageReservedRow,
  MessageWrapper,
  MessageContainer,
  GeneralMessageBody,
  DeletedMessageBody,
  UnsupportedMessageBody,
  UserName,
  BottomLine,
  MessageDate,
  StyledDate,
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import { MessageType, PropsContext } from '../Chat';
import { MessageContentType } from '@amityco/ts-sdk';
import { isToday } from '~/ila26/utils';
import { useNavigation } from '~/social/providers/NavigationProvider';

const MessageBody = ({
  isDeleted,
  type,
  isSupportedMessageType,
  ...otherProps
}: {
  isDeleted: boolean;
  type: string;
  isSupportedMessageType: boolean;
  [key: string]: unknown;
}) => {
  if (isDeleted) {
    return <DeletedMessageBody {...otherProps} data-qa-anchor="message-body-deleted" />;
  }

  if (!isSupportedMessageType) {
    return <UnsupportedMessageBody {...otherProps} data-qa-anchor="message-body-unsupported" />;
  }

  return <GeneralMessageBody {...otherProps} data-qa-anchor="message-body-general" />;
};

interface MessageProps {
  messageId: string;
  avatar: string;
  type: MessageType;
  data: { text: string } | string;
  createdAt: Date;
  isDeleted?: boolean;
  isIncoming: boolean;
  isConsequent: boolean;
  userDisplayName: string;
  containerRef: React.RefObject<HTMLDivElement>;
  creatorId: string;
}

const Message = ({
  messageId,
  avatar,
  type,
  data,
  createdAt,
  isDeleted,
  isIncoming,
  isConsequent,
  userDisplayName,
  containerRef,
  creatorId,
}: MessageProps) => {
  const { locale } = useIntl();
  const shouldShowUserName = isIncoming && !isConsequent && userDisplayName;
  const isSupportedMessageType = (
    [MessageContentType.TEXT, MessageContentType.IMAGE, MessageContentType.FILE] as MessageType[]
  ).includes(type);
  const { onClickUser } = useNavigation();

  const { variant } = useContext(PropsContext);

  const renderAvatar = () => {
    if (avatar) return <Avatar avatar={avatar} />;

    return <Avatar backgroundImage={UserImage} />;
  };

  const handleClickUser = useCallback(() => {
    onClickUser(creatorId);
  }, []);

  return (
    <MessageReservedRow isIncoming={isIncoming}>
      <MessageWrapper>
        {isIncoming && (
          <AvatarWrapper onClick={handleClickUser}>{!isConsequent && renderAvatar()}</AvatarWrapper>
        )}

        <MessageContainer variant={variant} data-qa-anchor="message">
          {shouldShowUserName && <UserName onClick={handleClickUser}>{userDisplayName}</UserName>}
          <MessageBody
            type={type}
            isIncoming={isIncoming}
            isDeleted={isDeleted || false}
            isSupportedMessageType={isSupportedMessageType}
          >
            <MessageContent data={data} type={type} isDeleted={isDeleted} />
            {!isDeleted && (
              <BottomLine>
                <MessageDate title={createdAt.toLocaleString()}>
                  <StyledDate>
                    {isToday(createdAt) ? (
                      <>
                        <FormattedMessage id="chat.today" /> <FormattedTime value={createdAt} />
                      </>
                    ) : (
                      createdAt.toLocaleString(locale)
                    )}
                  </StyledDate>
                </MessageDate>
                <Options
                  messageId={messageId}
                  data={data}
                  isIncoming={isIncoming}
                  isSupportedMessageType={isSupportedMessageType}
                  popupContainerRef={containerRef}
                />
              </BottomLine>
            )}
          </MessageBody>
        </MessageContainer>
      </MessageWrapper>
    </MessageReservedRow>
  );
};

export default (props: MessageProps) => {
  const CustomComponentFn = useCustomComponent<MessageProps>('Message');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <Message {...props} />;
};
