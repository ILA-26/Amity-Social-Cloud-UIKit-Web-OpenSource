/* eslint no-underscore-dangle: 0 */
import { FileRepository } from '@amityco/ts-sdk';
import { trim } from 'lodash';

import useUser from '~/core/hooks/useUser';
import { useSDK } from '~/core/hooks/useSDK';
import { useEffect, useMemo, useState } from 'react';
import useImage from '~/core/hooks/useImage';
import { useIntl } from 'react-intl';
import useChannelMembersCollection from './collections/useChannelMembersCollection';

const MEMBER_COUNT_PER_CASE = {
  DIRECT_CHAT: 2,
  ONLY_ME_CHAT: 1,
};

function getChatName(channel: Amity.Channel, otherUser?: Amity.User | null) {
  return trim(channel.type === 'community' ? channel.displayName : otherUser?.displayName);
}

/**
 * Channel use avatarFileId
 * User use avatarCustomUrl
 */
async function getAvatarUrl({
  avatarFileId,
  avatarCustomUrl,
}: {
  avatarFileId?: string;
  avatarCustomUrl?: string;
}) {
  if (avatarCustomUrl) return avatarCustomUrl;

  if (avatarFileId) {
    const avatarFile = await FileRepository.getFile(avatarFileId);
    return FileRepository.fileUrlWithSize(avatarFile.data.fileUrl, 'small');
  }

  // not of all, just throw NULL
  return null;
}

async function getChatAvatar(
  channel?: Amity.Channel | null,
  otherUser?: { avatarUrl?: string } | null,
  currentUser?: { avatarUrl?: string } | null,
) {
  // It is direct chat but only one user - show current user instead
  if (channel?.memberCount === MEMBER_COUNT_PER_CASE.ONLY_ME_CHAT) {
    return getAvatarUrl({ avatarCustomUrl: currentUser?.avatarUrl });
  }

  if (channel?.type === 'conversation' && otherUser?.avatarUrl) {
    return getAvatarUrl({ avatarCustomUrl: otherUser.avatarUrl });
  }

  return getAvatarUrl({
    avatarFileId: channel?.avatarFileId,
    avatarCustomUrl: channel?.metadata?.avatarCustomUrl,
  });
}

function useChatInfo({ channel }: { channel: Amity.Channel | null }) {
  const { formatMessage } = useIntl();
  const { currentUserId } = useSDK();
  const [chatAvatar, setChatAvatar] = useState<string | null>(null);

  const { channelMembers } = useChannelMembersCollection(channel?._id);

  const isConversation = channel?.type === 'conversation' || channel?.metadata?.isDirectChat;
  const members = (channelMembers.map((m) => m.userId) || channel?.metadata?.userIds) ?? [];

  const otherUserId = isConversation
    ? members.find((userId: string) => userId !== currentUserId)
    : null;

  const currentUser = useUser(currentUserId);
  const otherUser = useUser(otherUserId);

  const currentUserAvatarUrl = useImage({ fileId: currentUser?.avatarFileId });
  const otherUserAvatarUrl = useImage({ fileId: otherUser?.avatarFileId });

  useEffect(() => {
    async function run() {
      setChatAvatar(null);
      const url = await getChatAvatar(
        channel,
        { avatarUrl: otherUserAvatarUrl },
        { avatarUrl: currentUserAvatarUrl },
      );

      setChatAvatar(url);
    }
    run();
  }, [otherUserAvatarUrl, channel]);

  const chatName = useMemo(() => {
    if (channel == null) return;

    const receiveChatName = getChatName(channel, otherUser);
    return receiveChatName;
  }, [channel, otherUser]);

  const messagePreview = useMemo(() => {
    if (!channel) return '';

    const { messagePreview: preview }: { messagePreview?: MessagePreview } = channel;
    if (!preview) return '';

    const isCurrentUser = preview.creatorId === currentUserId;

    if (preview.dataType === 'text') {
      return isCurrentUser
        ? `${formatMessage({ id: 'chat.preview.you' })}: ${preview.data.text}`
        : preview.data.text;
    }

    const messageKey = isCurrentUser ? 'youSent' : 'youReceived';
    return `${formatMessage({ id: `chat.preview.${messageKey}` })} ${formatMessage({ id: `chat.preview.${preview.dataType}` })}`;
  }, [channel, formatMessage]);

  return { chatName, chatAvatar, type: channel?.type, messagePreview };
}

// Amity.Channel doesn't define messagePreview
type MessagePreview = {
  channelId: string;
  createdAt: string;
  creatorId: string;
  data: {
    text: string;
  };
  dataType: string;
  isDeleted: boolean;
  messagePreviewId: string;
  segment: number;
  subChannelId: string;
  subChannelName: string;
  subChannelUpdatedAt: string;
  updatedAt: string;
};

export default useChatInfo;
