import { PostContentType } from '@amityco/ts-sdk';
import React, { ReactNode, createContext, useContext, useMemo } from 'react';
import DefaultPostRenderer from '../components/post/Post/DefaultPostRenderer';
import UnknownPostRenderer from '../components/post/Post/UnknownPostRenderer';
import { ILA26_customTypeDataTypes } from '~/ila26/constants';

export type PostRendererProps = {
  childrenPosts?: Amity.Post[];
  className?: string;
  currentUserId?: string;
  handleDeletePost?: (postId: string) => void;
  handleReportPost?: () => void;
  handleUnreportPost?: () => void;
  handleApprovePost?: () => void;
  handleDeclinePost?: () => void;
  handleClosePoll?: () => void;
  poll?: Amity.Poll | null;
  isPollClosed?: boolean;
  hidePostTarget?: boolean;
  isFlaggedByMe?: boolean;
  readonly?: boolean;
  post?: Amity.Post;
  user?: Amity.User | null;
  userRoles?: string[];
  loading?: boolean;
  avatarFileUrl?: string;
};

export type PostRendererConfigType = Record<
  ValueOf<typeof PostContentType> | string,
  (props: PostRendererProps) => ReactNode
>;

const ILA26_customDataTypesPostRenderer = Object.values(ILA26_customTypeDataTypes).reduce(
  (prev, current) =>
    Object.assign(prev, {
      [current]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
    }),
  {},
); // get ILA 26 custom types to be appended to Amity datatypes renderer list

const defaultPostRenderer: PostRendererConfigType = {
  [PostContentType.FILE]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  [PostContentType.IMAGE]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  [PostContentType.LIVESTREAM]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  [PostContentType.POLL]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  [PostContentType.TEXT]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  [PostContentType.VIDEO]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  [PostContentType.CUSTOM]: (props: PostRendererProps) => <DefaultPostRenderer {...props} />,
  ...ILA26_customDataTypesPostRenderer, // ILA26 custom types
};

const PostRendererContext = createContext(defaultPostRenderer);

export const usePostRenderer = (dataType?: string) => {
  const postRendererConfig = useContext(PostRendererContext);

  return useMemo(() => {
    if (dataType == null) return (_props: PostRendererProps) => null;

    return (
      postRendererConfig[dataType] ||
      defaultPostRenderer[dataType] ||
      ((_props: PostRendererProps) => <UnknownPostRenderer />)
    );
  }, [dataType]);
};

interface PostRendererProviderProps {
  children: ReactNode;
  config?: typeof defaultPostRenderer;
}

export default function PostRendererProvider({ children, config }: PostRendererProviderProps) {
  const value = useMemo(() => {
    if (config == null) return defaultPostRenderer;

    return { ...defaultPostRenderer, ...config };
  }, [config]);

  return <PostRendererContext.Provider value={value}>{children}</PostRendererContext.Provider>;
}
