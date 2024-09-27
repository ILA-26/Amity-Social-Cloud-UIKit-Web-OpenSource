import { FileType } from '@amityco/ts-sdk';
import React from 'react';
import styled from 'styled-components';
import Loader from '~/core/components/Uploaders/Loader';
import ImageAttachmentIcon from '~/icons/ImageAttachmentAlt';
import FileAttachmentIcon from '~/icons/FileAttachmentAlt';
import VideoAttachmentIcon from '~/icons/VideoAttachmentAlt';
import { Label } from './styles';
import { FormattedMessage } from 'react-intl';

const ALLOWED_VIDEO_MIME_TYPES = 'video/mp4,video/webm,video/ogg';

const StyledLoader = styled(Loader) <{
  uploadLoading?: boolean;
  disabled?: boolean;
}>`
  background: transparent;
  width: auto;
  height: auto;
  padding: 5px 8px;
  border-radius: 25px;
  ${({ uploadLoading }) => uploadLoading && 'cursor: wait !important;'}
  ${({ disabled, theme }) => disabled && `color: ${theme.palette.neutral.shade2};`}
`;

interface UploaderButtonsProps {
  fileUploadDisabled?: boolean;
  imageUploadDisabled?: boolean;
  videoUploadDisabled?: boolean;
  onChangeImages?: (files: File[]) => void;
  onChangeVideos?: (files: File[]) => void;
  onChangeFiles?: (files: File[]) => void;
  uploadLoading?: boolean;
  fileLimitRemaining?: number | null;
}

const PostCreatorUploaders = ({
  fileUploadDisabled,
  imageUploadDisabled,
  videoUploadDisabled,
  onChangeImages,
  onChangeVideos,
  onChangeFiles,
  uploadLoading,
  fileLimitRemaining,
}: UploaderButtonsProps): JSX.Element => (
  <>
    <StyledLoader
      data-qa-anchor="post-creator-image-attachment-button"
      disabled={imageUploadDisabled}
      uploadLoading={uploadLoading}
      fileLimitRemaining={fileLimitRemaining}
      mimeType="image/jpeg, image/png"
      multiple
      onChange={onChangeImages}
    >
      <Label>
        <ImageAttachmentIcon />
        <FormattedMessage id="postCreator.photos" />
      </Label>
    </StyledLoader>

    <StyledLoader
      data-qa-anchor="post-creator-video-attachment-button"
      disabled={videoUploadDisabled}
      uploadLoading={uploadLoading}
      fileLimitRemaining={fileLimitRemaining}
      mimeType={ALLOWED_VIDEO_MIME_TYPES}
      multiple
      onChange={(files: File[]) => {
        files.forEach((file: any) => {
          file.forceType = FileType.VIDEO;
        });
        onChangeVideos?.(files);
      }}
    >
      <Label>
        <VideoAttachmentIcon />
        <FormattedMessage id="postCreator.videos" />
      </Label>
    </StyledLoader>

    <StyledLoader
      data-qa-anchor="post-creator-file-attachment-button"
      disabled={fileUploadDisabled}
      uploadLoading={uploadLoading}
      fileLimitRemaining={fileLimitRemaining}
      multiple
      onChange={onChangeFiles}
    >
      <Label>
        <FileAttachmentIcon />
        <FormattedMessage id="postCreator.documents" />
      </Label>
    </StyledLoader>
  </>
);

export default PostCreatorUploaders;
