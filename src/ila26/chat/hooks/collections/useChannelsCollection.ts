import { ChannelRepository } from '@amityco/ts-sdk';
import { useCallback, useEffect, useState } from 'react';
import useLiveCollection from '~/core/hooks/useLiveCollection';

type UseChannelsListParams = Parameters<typeof ChannelRepository.getChannels>[0];

export default function useChannelsCollection(params: UseChannelsListParams) {
  const [channels, setChannels] = useState<any[]>([]);

  const { items: liveChannels, ...rest } = useLiveCollection({
    fetcher: ChannelRepository.getChannels,
    params,
  });

  const refetch = useCallback(() => {
    ChannelRepository.getChannels(params, ({ data, loading }) => {
      setChannels(data);
    });
  }, [params]);

  useEffect(() => {
    setChannels(liveChannels);
  }, [liveChannels]);

  useEffect(() => {
    const unsubscribe = ChannelRepository.onChannelLeft(
      (channel: Amity.InternalChannel, _member: Amity.Membership<'channel'>) => {
        // Filter out the left channel from the state
        setChannels((prevChannels) =>
          prevChannels.filter((ch) => ch.channelId !== channel.channelId),
        );
        //  refetch to ensure the data is up-to-date
        refetch();
      },
    );

    return () => {
      unsubscribe();
    };
  }, [refetch]);

  return {
    channels,
    ...rest,
  };
}
