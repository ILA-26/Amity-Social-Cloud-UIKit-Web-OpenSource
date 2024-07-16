import React from 'react';

import TextContent from '~/social/components/post/TextContent';
import ImageContent from '~/social/components/post/ImageContent';
import VideoContent from '~/social/components/post/VideoContent';
import FileContent from '~/social/components/post/FileContent';
import LivestreamContent from '~/social/components/post/LivestreamContent';
import { ILA26_customTypeDataTypes } from '~/ila26/constants';
import { ILA26_internalData, ILA26_internalElementsTypes } from '~/ila26/types/customPosts';
import ILA26_CustomPostContent from '~/ila26/components/ILA26_CustomPostContent';

interface PostContentProps {
  data?: any;
  dataType?: Amity.PostContentType & ILA26_internalElementsTypes;
  postMaxLines?: number;
  mentionees?: Amity.User[];
  metadata?: ILA26_internalData;
}

const PostContent = ({ data, dataType, postMaxLines, mentionees, metadata }: PostContentProps) => {
  if (!data) return null;

  if (Object.values(ILA26_customTypeDataTypes).includes(dataType ?? '')) {
    return <ILA26_CustomPostContent {...{ metadata, dataType: dataType ?? '', data }} />; // render custom ila26 content component
  }

  if (!['text', 'image', 'video', 'file', 'liveStream'].includes(dataType || '')) {
    return null;
  }

  if (dataType === 'text') {
    return <TextContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === 'image') {
    return <ImageContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === 'video') {
    return <VideoContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === 'file') {
    return <FileContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === 'liveStream') {
    return <LivestreamContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }

  return null;
};

export default PostContent;
