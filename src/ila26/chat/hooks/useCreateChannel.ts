import { ChannelRepository } from "@amityco/ts-sdk";
import useSDK from "~/core/hooks/useSDK";

export default function useCreateChannel() {
  const { ila26_displayName: currentUserDisplayName } = useSDK();

  const newChannel = {
    type: "conversation" as Amity.ChannelType,
  };

  const createChannel = async (userId: string[], displayName: string) => {
    if (currentUserDisplayName) {
      const { data: channel } = await ChannelRepository.createChannel({
        ...newChannel,
        displayName: `${currentUserDisplayName},${displayName}`,
        userIds: userId,
      });

      return channel;
    }
  };

  return { createChannel };
}
