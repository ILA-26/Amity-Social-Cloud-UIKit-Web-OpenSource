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
) {
  if (channel?.type === 'conversation' && otherUser?.avatarUrl) {
    return getAvatarUrl({ avatarCustomUrl: otherUser.avatarUrl });
  }

  return getAvatarUrl({
    avatarFileId: channel?.avatarFileId,
    avatarCustomUrl: channel?.metadata?.avatarCustomUrl,
  });
}

function useChatInfo({ channel }: { channel: Amity.Channel | null }) {
  const { formatMessage: __ } = useIntl();
  const { currentUserId } = useSDK();
  const [chatAvatar, setChatAvatar] = useState<string | null>(null);

  const { channelMembers } = useChannelMembersCollection(
    channel?.type === 'conversation' ? channel?._id : undefined,
  );

  const otherUserId = useMemo(() => {
    const isConversation = channel?.type === 'conversation';
    const members = channelMembers.map((m) => m.userId);

    return isConversation ? members.find((userId: string) => userId !== currentUserId) : null;
  }, [channel, channelMembers, currentUserId]);

  const otherUser = useUser(otherUserId);
  const otherUserAvatarUrl = useImage({ fileId: otherUser?.avatarFileId });

  useEffect(() => {
    async function run() {
      const url = await getChatAvatar(channel, { avatarUrl: otherUserAvatarUrl });
      setChatAvatar(url);
    }
    run();
  }, [otherUserAvatarUrl, channel]);

  const chatName = useMemo(() => {
    if (!channel) return;
    return trim(channel.type === 'conversation' ? otherUser?.displayName : channel.displayName);
  }, [channel, otherUser]);

  const messagePreview = useMemo(() => {
    if (!channel) return '';

    const { messagePreview: preview }: { messagePreview?: MessagePreview } = channel;
    if (!preview) return '';

    const isCurrentUser = preview.creatorId === currentUserId;

    if (preview.dataType === 'text') {
      return isCurrentUser
        ? `${__({ id: 'chat.preview.you' })}: ${preview.data.text}`
        : preview.data.text;
    }

    const messageKey = isCurrentUser ? 'youSent' : 'youReceived';
    return `${__({ id: `chat.preview.${messageKey}` })} ${__({ id: `chat.preview.${preview.dataType}` })}`;
  }, [channel, __]);

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
