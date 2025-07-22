import React from 'react';
import { FormattedMessage } from 'react-intl';

import EmptyState from '~/core/components/EmptyState';
import UnknownPost from '~/icons/UnknownPost';

const UnavailableContentRenderer = () => {
  return (
    <EmptyState title={<FormattedMessage id="post.unavailableContent.title" />} icon={<UnknownPost />}>
      <FormattedMessage id="post.unavailableContent.description" />
    </EmptyState>
  );
};

export default UnavailableContentRenderer;
