export { default as AmityUiKitProvider_v4 } from '~/v4/core/providers/AmityUIKitProvider';
import { ILA26_internalElementsTypes, ILA26_internalData } from '~/ila26/types/customPosts';
export { default as AmityUiKitProvider } from '~/core/providers/UiKitProvider';
// export { default as AmityUiKitFeed } from '~/social/components/Feed';
export { default as AmityUiKitSocial } from '~/social/pages/Application';
export { default as AmityUiKitChat } from '~/chat/pages/Application';

import ILA26_AmityUiKitChat_unwrapped from '~/ila26/chat/pages/Application';
import ILA26_AmityUiKitChatPopup_unwrapped from '~/ila26/chat/components/ChatPopup';
import ILA26_AmityUiKitFeed_unwrapped from '~/ila26/social/components/Feed';

export const ILA26_AmityUiKitChat = withUIStyles(ILA26_AmityUiKitChat_unwrapped);
export const ILA26_AmityUiKitChatPopup = withUIStyles(ILA26_AmityUiKitChatPopup_unwrapped);
export const AmityUiKitFeed = withUIStyles(ILA26_AmityUiKitFeed_unwrapped); // TODO: rename to ILA26_AmityUiKitFeed later

// HOC that wrappes the passed component inside UIStyles
import withUIStyles from './ila26/exportsWrapper';

import fr from '~/ila26/fr.json';
import en from '~/i18n/en.json';
export const ILA26_IntlMessages = { fr, en };

// Export helper
export {
  addChatMembers as amityAddChatMembers,
  removeChatMembers as amityRemoveChatMembers,
} from '~/ila26/chat/helpers';

export { default as useAmityUser } from '~/core/hooks/useUser';
export { useNavigation as useAmityNavigation } from '~/social/providers/NavigationProvider';

export { default as AmityAvatar } from '~/core/components/Avatar';
export { PostContainer as AmityPostContainer } from '~/social/components/post/Post/styles';
export { default as AmityPostEngagementBar } from '~/social/components/EngagementBar';
export { default as AmityExpandableText } from '~/social/components/Comment/CommentText';
export { useSDK as useAmitySDK } from '~/core/hooks/useSDK';

// v4
export { AmityUIKitManager } from '~/v4/core/AmityUIKitManager';
export {
  CommentTray as AmityCommentTrayComponent,
  StoryTab as AmityStoryTabComponent,
} from '~/v4/social/components';
export {
  ILA26_internalElementsTypes as ILA26_Amity_types,
  ILA26_internalData as ILA26_Amity_DataTypes,
};


// Chat v4

export { ChatHeader as AmityLiveChatHeader } from '~/v4/chat/components/ChatHeader';
export { MessageList as AmityLiveChatMessageList } from '~/v4/chat/components/MessageList';
export { MessageComposer as AmityLiveChatMessageComposeBar } from '~/v4/chat/components/MessageComposer';

export { MessageReactionPreview as AmityLiveChatMessageReactionPreview } from '~/v4/chat/components/MessageReactionPreview';
export { MessageReactionPicker as AmityLiveChatMessageReactionPicker } from '~/v4/chat/components/MessageReactionPicker';
export { MessageQuickReaction as AmityLiveChatMessageQuickReaction } from '~/v4/chat/components/MessageQuickReaction';

import type { MessageActionType } from '~/v4/chat/internal-components/LiveChatMessageContent/MessageAction';
import type { ReactionListProps } from '~/v4/social/components/ReactionList';

export type { MessageActionType as AmityMessageActionType };
export type { ReactionListProps as AmityReactionListProps };

// v4 internal use only (Amity Console)
export {
  StoryPreview as AmityStoryPreview,
  StoryPreviewThumbnail as AmityStoryPreviewThumbnail,
} from './v4/social/internal-components/StoryPreview';

// v4 Social
export {
  SocialHomePage as AmitySocialHomePage,
  AmityDraftStoryPage,
  ViewStoryPage as AmityViewStoryPage,
  StoryTargetSelectionPage as AmityStoryTargetSelectionPage,
  PostDetailPage as AmityPostDetailPage,
  SocialGlobalSearchPage as AmitySocialGlobalSearchPage,
  MyCommunitiesSearchPage as AmityMyCommunitiesSearchPage,
  SelectPostTargetPage as AmityPostTargetSelectionPage,
  PostComposerPage as AmityPostComposerPage,
} from '~/v4/social/pages';

export {
  MyCommunities as AmityMyCommunitiesComponent,
  EmptyNewsfeed as AmityEmptyNewsFeedComponent,
  GlobalFeed as AmityGlobalFeedComponent,
  PostContent as AmityPostContentComponent,
  TopSearchBar as AmityTopSearchBarComponent,
  Newsfeed as AmityNewsFeedComponent,
  CommunitySearchResult as AmityCommunitySearchResultComponent,
  UserSearchResult as AmityUserSearchResultComponent,
  DetailedMediaAttachment as AmityDetailedMediaAttachmentComponent,
  MediaAttachment as AmityMediaAttachmentComponent,
  CreatePostMenu as AmityCreatePostMenuComponent,
  ReactionList as AmityReactionListComponent,
  TopNavigation as AmitySocialHomeTopNavigationComponent,
} from '~/v4/social/components/';

export { HomePageTab as AmitySocialHomePageTab } from '~/v4/social/pages/SocialHomePage';
