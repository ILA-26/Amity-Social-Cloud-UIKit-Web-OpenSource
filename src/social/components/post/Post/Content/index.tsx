import React from 'react';

import TextContent from '~/ila26/social/components/post/TextContent';
import ShareContent from '~/ila26/social/components/post/ShareContent';
import ImageContent from '~/social/components/post/ImageContent';
import VideoContent from '~/social/components/post/VideoContent';
import FileContent from '~/social/components/post/FileContent';
import LivestreamContent from '~/social/components/post/LivestreamContent';
import { PostContentType_extended } from '~/ila26/constants';
import { ILA26_internalData } from '~/ila26/types/customPosts';
import ILA26_CustomPostContent from '~/ila26/components/ILA26_CustomPostContent';
import { PostContentType } from '@amityco/ts-sdk';
import CustomPostContent from '~/ila26/components/PostContent';

interface PostContentProps {
  data?: any;
  dataType?: Amity.PostContentType;
  postMaxLines?: number;
  mentionees?: Amity.User[];
  metadata?: ILA26_internalData;
  hasChildrenPosts: boolean;
}

const PostContent = ({ data, dataType, postMaxLines, mentionees, metadata, hasChildrenPosts }: PostContentProps) => {
  if (!data) return null;

  if (
    ![...Object.values(PostContentType), ...Object.values(PostContentType_extended)].includes(
      dataType || '',
    )
  ) {
    return null;
  }

  if (dataType === PostContentType_extended.SHARE_CUSTOM_POST) {
    return <CustomPostContent {...{ metadata, dataType: dataType ?? '', data }} />;
  }

  if (
    dataType === PostContentType_extended.MARKETPLACE_PRODUCT ||
    dataType === PostContentType_extended.MARKETPLACE_SERVICEOFFER
  ) {
    return <ILA26_CustomPostContent {...{ metadata, dataType: dataType ?? '', data }} />; // render custom ila26 content component
  }

  if (dataType === PostContentType_extended.SHARE) {
    return <ShareContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }

  if (dataType === PostContentType.TEXT) {
    return (
      <TextContent
        {...data}
        postMaxLines={postMaxLines}
        mentionees={mentionees}
        hasChildrenPosts={hasChildrenPosts} // used for figuring out whether to add link open graph preview card
      />
    );
  }
  if (dataType === PostContentType.IMAGE) {
    return <ImageContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === PostContentType.VIDEO) {
    return <VideoContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === PostContentType.FILE) {
    return <FileContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }
  if (dataType === PostContentType.LIVESTREAM) {
    return <LivestreamContent {...data} postMaxLines={postMaxLines} mentionees={mentionees} />;
  }

  return null;
};

export default PostContent;
