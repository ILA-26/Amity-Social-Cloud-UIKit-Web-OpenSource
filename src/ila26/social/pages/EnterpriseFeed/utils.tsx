import { CommunityPostSettings } from '@amityco/ts-sdk';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EnterpriseFeedTabs } from './constants';

export function getTabs(
  postSetting?: ValueOf<typeof CommunityPostSettings>,
  needApprovalOnPostCreation?: boolean,
  isJoined?: boolean,
  canReview?: boolean,
  pendingPostCount = 0,
) {
  const tabs = [
    { value: EnterpriseFeedTabs.TIMELINE, label: <FormattedMessage id="tabs.timeline" /> },
    { value: EnterpriseFeedTabs.GALLERY, label: <FormattedMessage id="tabs.gallery" /> },
    { value: EnterpriseFeedTabs.MEMBERS, label: <FormattedMessage id="tabs.members" /> },
  ];

  if (
    isJoined &&
    (postSetting === CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED || needApprovalOnPostCreation)
  ) {
    const amount = canReview ? pendingPostCount : 0;

    tabs.push({
      value: EnterpriseFeedTabs.PENDING,
      label: (
        <FormattedMessage id="tabs.pendingPosts" values={{ amount, formattedAmount: amount }} />
      ),
    });
  }

  return tabs;
}
