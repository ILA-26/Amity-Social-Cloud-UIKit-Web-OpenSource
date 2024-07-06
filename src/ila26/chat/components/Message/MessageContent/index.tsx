import React from 'react';

import Deleted from './Deleted';
import Text from './Text';
import Custom from './Custom';
import Unsupported from './Unsupported';
import Image from './Image';
import { MessageContentType } from '@amityco/ts-sdk';
import File from './File';

type MessageContentProps = {
  isDeleted?: boolean;
} & (
  | { data: { text: string }; type: typeof MessageContentType.TEXT }
  | { data: { fileId: string }; type: typeof MessageContentType.IMAGE }
  | { data: { fileId: string }; type: typeof MessageContentType.FILE }
  | { data: unknown; type: 'custom' }
  | { data: unknown; type: string }
);

function isTextProps(
  props: MessageContentProps,
): props is { data: { text: string }; type: typeof MessageContentType.TEXT } {
  return props.type === MessageContentType.TEXT;
}

function isImageProps(
  props: MessageContentProps,
): props is { data: { fileId: string }; type: typeof MessageContentType.IMAGE } {
  return props.type === MessageContentType.IMAGE;
}

function isFileProps(
  props: MessageContentProps,
): props is { data: { fileId: string }; type: typeof MessageContentType.FILE } {
  return props.type === MessageContentType.FILE;
}

function isCustomProps(
  props: MessageContentProps,
): props is { data: unknown; type: typeof MessageContentType.CUSTOM } {
  return props.type === MessageContentType.CUSTOM;
}

const MessageContent = (props: MessageContentProps) => {
  const { isDeleted } = props;
  if (isDeleted) {
    return <Deleted />;
  }

  if (isTextProps(props)) {
    return <Text data={props.data} />;
  }
  if (isCustomProps(props)) {
    return <Custom data={props.data} />;
  }
  if (isImageProps(props)) {
    return <Image data={props.data} />;
  }
  if (isFileProps(props)) {
    return <File fileId={props.data.fileId} />;
  }

  return <Unsupported />;
};

export default MessageContent;
