import { ILA26_internalElementsTypes, ILA26_internalData } from '~/ila26/types/customPosts';
export { default as AmityUiKitProvider } from '~/core/providers/UiKitProvider';
export { default as AmityUiKitChat } from '~/chat/pages/Application';

import ILA26_AmityUiKitChat_unwrapped from '~/ila26/chat/pages/Application';
import ILA26_AmityUiKitChatPopup_unwrapped from '~/ila26/chat/components/ChatPopup';
import { default as AmityUiKitFeed_unwrapped, FeedProps } from '~/social/components/Feed';
import { default as AmityUiKitSocial_unwrapped } from '~/social/pages/Application';

// HOC that wrappes the passed component inside UIStyles
import withUIStyles from './ila26/exportsWrapper';


import fr from '~/ila26/fr.json';
import en from '~/i18n/en.json';
export const ILA26_IntlMessages = { fr, en };

// ILA26 exports with UIStyles wrap at component level
export const ILA26_AmityUiKitChat = withUIStyles(ILA26_AmityUiKitChat_unwrapped);
export const ILA26_AmityUiKitChatPopup = withUIStyles(ILA26_AmityUiKitChatPopup_unwrapped);
export const AmityUiKitFeed = withUIStyles(AmityUiKitFeed_unwrapped);
export const AmityUiKitSocial = withUIStyles(AmityUiKitSocial_unwrapped);

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
export {
  ILA26_internalElementsTypes as ILA26_Amity_types,
  ILA26_internalData as ILA26_Amity_DataTypes,
};

// import AmityComment from './components/Comment';
// import AmityCommentComposeBar from './components/CommentComposeBar';
// import AmityCommentLikeButton from './components/CommentLikeButton';
// import AmityCommunity from './components/Community';
// import AmityCommunityItem from './components/CommunityItem';
// import AmityEmptyFeed from './components/EmptyFeed';
// import AmityFiles from './components/Files';
// import AmityImageGallery from './components/ImageGallery';
// import AmityImages from './components/Images';
// import AmityMessage from './components/Message';
// import AmityMessageComposeBar from './components/MessageComposeBar';
// import AmityMessageList from './components/MessageList';
// import AmityPost from './components/Post';
// import AmityPostCreator from './components/PostCreator';
// import AmityPostLikeButton from './components/PostLikeButton';
// import AmityRecentChat from './components/RecentChat';
// import AmitySideMenu from './components/SideMenu';
