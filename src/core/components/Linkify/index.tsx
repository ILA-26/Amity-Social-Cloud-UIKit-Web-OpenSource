import React from 'react';
import Linkify from 'linkify-react';

type UiKitLinkifyProps = Omit<React.ComponentProps<typeof Linkify>, 'componentDecorator'>;

const UiKitLinkify = (props: UiKitLinkifyProps) => <Linkify as={'span'} {...props} />;

export default UiKitLinkify;
