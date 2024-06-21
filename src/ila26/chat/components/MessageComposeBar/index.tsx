import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  AttachementComposerContainer,
  MessageComposeBarContainer,
  MessageComposeBarInput,
  MessageTextComposerContainer,
  SendMessageIcon,
  UploadsContainer,
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import UploaderButtons from '~/ila26/chat/components/Uploaders/UploaderButtons';
import ImagesUploaded from '~/ila26/chat/components/Uploaders/ImagesUploaded';
import VideosUploaded from '~/ila26/chat/components/Uploaders/VideosUploaded';
import FilesUploaded from '~/ila26/chat/components/Uploaders/FilesUploaded';
import useErrorNotification from '~/core/hooks/useErrorNotification';
import { notification } from '~/core/components/Notification';

interface MessageComposeBarProps {
  onSubmit: (message: string) => void;
}

const MAX_FILES_PER_POST = 1;

const MessageComposeBar = ({ onSubmit }: MessageComposeBarProps) => {
  const [message, setMessage] = useState('');

  const { formatMessage } = useIntl();

  const sendMessage = () => {
    if (message === '') return;
    onSubmit(message);
    setMessage('');
  };

  const [postImages, setPostImages] = useState<Amity.File[]>([]);
  const [postVideos, setPostVideos] = useState<Amity.File[]>([]);
  const [postFiles, setPostFiles] = useState<Amity.File[]>([]);

  const [incomingImages, setIncomingImages] = useState<File[]>([]);
  const [incomingVideos, setIncomingVideos] = useState<File[]>([]);
  const [incomingFiles, setIncomingFiles] = useState<File[]>([]);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [setError] = useErrorNotification();

  const onMaxFilesLimit = () => {
    notification.info({
      content: <FormattedMessage id="upload.attachmentLimit" values={{ MAX_FILES_PER_POST }} />,
    });
  };

  const onFileSizeLimit = () => {
    notification.info({
      content: <FormattedMessage id="upload.fileSizeLimit" />,
    });
  };

  return (
    <MessageComposeBarContainer>
      <MessageTextComposerContainer>
        <MessageComposeBarInput
          data-qa-anchor="message-compose-bar-input"
          type="text"
          value={message}
          placeholder={formatMessage({ id: 'MessageComposeBar.placeholder' })}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <SendMessageIcon
          data-qa-anchor="message-compose-bar-send-message-button"
          onClick={sendMessage}
        />
      </MessageTextComposerContainer>

      <UploadsContainer>
        <ImagesUploaded
          files={incomingImages}
          uploadedFiles={postImages}
          uploadLoading={uploadLoading}
          onLoadingChange={setUploadLoading}
          onChange={({ uploaded, uploading }) => {
            setPostImages(uploaded);
            setIncomingImages(uploading);
          }}
          onError={setError}
        />
        <VideosUploaded
          files={incomingVideos}
          uploadedFiles={postVideos}
          uploadLoading={uploadLoading}
          onLoadingChange={setUploadLoading}
          onChange={({ uploaded, uploading }) => {
            setPostVideos(uploaded);
            setIncomingVideos(uploading);
          }}
          onError={setError}
        />
        <FilesUploaded
          files={incomingFiles}
          uploadedFiles={postFiles}
          uploadLoading={uploadLoading}
          onLoadingChange={setUploadLoading}
          onChange={({ uploaded, uploading }) => {
            setPostFiles(uploaded);
            setIncomingFiles(uploading);
          }}
          onError={setError}
        />
      </UploadsContainer>

      <AttachementComposerContainer>
        <UploaderButtons
          imageUploadDisabled={postFiles.length > 0 || postVideos.length > 0 || uploadLoading}
          videoUploadDisabled={true}
          fileUploadDisabled={true}
          fileLimitRemaining={
            MAX_FILES_PER_POST - postFiles.length - postImages.length - postVideos.length
          }
          uploadLoading={uploadLoading}
          onChangeImages={(newImageFiles) => {
            setIncomingImages(newImageFiles);
          }}
          onChangeVideos={setIncomingVideos}
          onChangeFiles={setIncomingFiles}
          onMaxFilesLimit={onMaxFilesLimit}
          onFileSizeLimit={onFileSizeLimit}
        />
      </AttachementComposerContainer>
    </MessageComposeBarContainer>
  );
};

export default (props: MessageComposeBarProps) => {
  const CustomComponentFn = useCustomComponent<MessageComposeBarProps>('MessageComposerBar');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <MessageComposeBar {...props} />;
};
