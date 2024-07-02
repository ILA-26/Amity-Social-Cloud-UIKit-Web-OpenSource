import { FileType } from '@amityco/ts-sdk';
import React from 'react';
import styled from 'styled-components';
import Loader from '~/core/components/Uploaders/Loader';
import ImageAttachmentIcon from '~/icons/ImageAttachment';
import FileAttachmentIcon from '~/icons/FileAttachment';
import { VideoAttachmentIcon } from './styles';

const StyledLoader = styled(Loader)<{
  uploadLoading?: boolean;
  disabled?: boolean;
}>`
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

const ChatUploaders = ({
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
      data-qa-anchor="chat-image-attachment-button"
      disabled={imageUploadDisabled}
      uploadLoading={uploadLoading}
      fileLimitRemaining={fileLimitRemaining}
      mimeType="image/jpeg,image/png"
      multiple
      onChange={onChangeImages}
    >
      <ImageAttachmentIcon />
    </StyledLoader>

    <StyledLoader
      data-qa-anchor="chat-video-attachment-button"
      disabled={videoUploadDisabled}
      uploadLoading={uploadLoading}
      fileLimitRemaining={fileLimitRemaining}
      mimeType="video/*,.flv,.3gp"
      multiple
      onChange={(files: File[]) => {
        files.forEach((file: any) => {
          file.forceType = FileType.VIDEO;
        });
        onChangeVideos?.(files);
      }}
    >
      <VideoAttachmentIcon />
    </StyledLoader>

    <StyledLoader
      data-qa-anchor="chat-file-attachment-button"
      disabled={fileUploadDisabled}
      uploadLoading={uploadLoading}
      fileLimitRemaining={fileLimitRemaining}
      multiple
      onChange={onChangeFiles}
    >
      <FileAttachmentIcon />
    </StyledLoader>
  </>
);

export default ChatUploaders;
