import React from 'react';
import Linkify from 'linkify-react';
import { Link } from './styles';

type UiKitLinkifyProps = Omit<React.ComponentProps<typeof Linkify>, 'componentDecorator'>;

const UiKitLinkify = (props: UiKitLinkifyProps) => (
  <Linkify
    as={'span'}
    options={{
      target: '_blank',
      rel: 'noopener noreferrer',
      render: ({ content }) => <Link>{content}</Link>,
    }}
    {...props}
  />
);

export default UiKitLinkify;
