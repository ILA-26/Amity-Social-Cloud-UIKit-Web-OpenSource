import React from 'react';

import Deleted from './Deleted';
import Text from './Text';
import Custom from './Custom';
import Unsupported from './Unsupported';
import Image from './Image';
import { MessageContentType } from '@amityco/ts-sdk';

type MessageContentProps = {
  isDeleted?: boolean;
} & (
  | { data: { text: string }; type: 'text' }
  | { data: unknown; type: 'custom' }
  | { data: unknown; type: string }
);

function isTextProps(
  props: MessageContentProps,
): props is { data: { text: string }; type: 'text' } {
  return props.type === 'text';
}

function isImageProps(
  props: MessageContentProps,
): props is { data: { text: string, fileId: string }; type: 'text' } {
  return props.type === MessageContentType.IMAGE;
}

function isCustomProps(props: MessageContentProps): props is { data: unknown; type: 'custom' } {
  return props.type === 'custom';
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

  if(isImageProps(props)) {
    return <Image data={props.data} />
  }

  return <Unsupported />;
};

export default MessageContent;
