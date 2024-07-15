import React from 'react';
import { FormattedMessage } from 'react-intl';

import UserAvatar from '~/ila26/chat/components/UserAvatar';
import { backgroundImage as userBackgroundImage } from '~/icons/User';
import { backgroundImage as communityBackgroundImage } from '~/icons/Community';
import useChatInfo from '~/ila26/chat/hooks/useChatInfo';

import {
  ChatHeaderContainer,
  DetailsIcon,
  Channel,
  ChannelInfo,
  ChannelName,
  MemberCount,
  HeaderCloseIcon,
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannel from '~/ila26/chat/hooks/useChannel';
import { ChatProps } from '../Chat';
import useSDK from '~/core/hooks/useSDK';

const ChatHeader = ({
  channelId,
  ila26_variant = 'regular',
  onChatActionClick,
}: ChatProps) => {
  const channel = useChannel(channelId);
  const { chatName, chatAvatar } = useChatInfo({ channel });
  const { ila26_displayName } = useSDK();

  return (
    <ChatHeaderContainer $variant={ila26_variant} data-qa-anchor="chat-header">
      <Channel>
        <UserAvatar
          avatarUrl={chatAvatar || undefined}
          defaultImage={
            channel?.memberCount && channel.memberCount > 2
              ? communityBackgroundImage
              : userBackgroundImage
          }
        />
        <ChannelInfo data-qa-anchor="chat-header-channel-info">
          <ChannelName data-qa-anchor="chat-header-channel-info-channel-name">
            {ila26_displayName
              ? chatName?.replace(ila26_displayName, '').replace(',', '')
              : chatName}
          </ChannelName>
          <MemberCount data-qa-anchor="chat-header-channel-info-member-count">
            <FormattedMessage id="chat.members.count" values={{ count: channel?.memberCount }} />
          </MemberCount>
        </ChannelInfo>
      </Channel>
      {ila26_variant === 'regular' ? (
        <DetailsIcon onClick={onChatActionClick} />
      ) : (
        <HeaderCloseIcon onClick={onChatActionClick} />
      )}
    </ChatHeaderContainer>
  );
};

export default (props: ChatProps) => {
  const CustomComponentFn = useCustomComponent<ChatProps>('ChatHeader');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <ChatHeader {...props} />;
};
