export type Paging = {
  next?: string;
  previous?: string;
};

export type Post = {
  _id: string;
  path: string;
  postId: string;
  parentPostId: string;
  postedUserId: string;
  postedUserPublicId: string;
  postedUserInternalId: string;
  sharedUserId: string;
  sharedCount: number;
  targetId: string;
  targetPublicId: string;
  targetInternalId: string;
  targetType: string;
  dataType: string;
  data: PostData;
  metadata: Record<string, unknown>;
  flagCount: number;
  hashFlag: HashFlag;
  editedAt: string;
  createdAt: string;
  updatedAt: string;
  reactions: Record<string, number>;
  reactionsCount: number;
  myReactions: Array<string>;
  commentsCount: number;
  comments: Array<string>;
  children: Array<string>;
  isDeleted: boolean;
  hasFlaggedComment: boolean;
  hasFlaggedChildren: boolean;
  feedId: string;
  tags: Array<string>;
  mentionees: Array<Mentionee>;
  impression: number;
  reach: number;
};

type PostData = {
  text?: string;
  fileId?: string;
  thumbnailFileId?: string;
  videoFileId?: {
    original: string;
    low: string;
    medium: string;
    high: string;
  };
  streamId?: string;
};

type HashFlag = {
  bits: number;
  hashes: number;
  hash: Array<string>;
};

type Mentionee = {
  type: string;
  userIds: Array<string>;
  userPublicIds: Array<string>;
  userInternalIds: Array<string>;
};

type Comment = {
  _id: string;
  path: string;
  commentId: string;
  userId: string;
  userPublicId: string;
  userInternalId: string;
  parentId: string;
  rootId: string;
  referenceId: string;
  referenceType: string;
  dataType: string;
  dataTypes: Array<string>;
  data: Record<string, unknown>;
  metadata: Record<string, unknown>;
  childrenNumber: number;
  flagCount: number;
  hashFlag: HashFlag;
  reactions: Record<string, number>;
  reactionsCount: number;
  myReactions: Array<string>;
  isDeleted: boolean;
  editedAt: string;
  createdAt: string;
  updatedAt: string;
  children: Array<string>;
  segmentNumber: number;
  mentionees: Array<Mentionee>;
  attachments: Array<Attachment>;
  targetId: string;
  targetType: string;
};

type Attachment = {
  type: string;
  fileId: string;
};

export type User = {
  _id: string;
  path: string;
  userId: string;
  userInternalId: string;
  userPublicId: string;
  roles: Array<string>;
  permissions: Array<string>;
  displayName: string;
  description: string;
  avatarFileId: string;
  avatarCustomUrl: string;
  flagCount: number;
  hashFlag: HashFlag;
  metadata: Record<string, unknown>;
  isGlobalBan: boolean;
  isBrand: boolean;
  createdAt: string;
  updatedAt: string;
};

type File = {
  fileId: string;
  fileUrl: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  attributes: FileAttributes;
};

type FileAttributes = {
  name: string;
  extension: string;
  size: number;
  mimeType: string;
  metadata: {
    exif?: Record<string, unknown>;
    gps?: Record<string, unknown>;
    height?: number;
    width?: number;
    isFull: boolean;
  };
};

export type Community = {
  _id: string;
  path: string;
  communityId: string;
  channelId: string;
  userId: string;
  userPublicId: string;
  userInternalId: string;
  displayName: string;
  avatarFileId: string;
  description: string;
  isOfficial: boolean;
  isPublic: boolean;
  onlyAdminCanPost: boolean;
  tags: Array<string>;
  metadata: Record<string, unknown>;
  postsCount: number;
  membersCount: number;
  isJoined: boolean;
  categoryIds: Array<string>;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  hasFlaggedComment: boolean;
  hasFlaggedPost: boolean;
  needApprovalOnPostCreation: boolean;
  moderatorMemberCount: number;
  allowCommentInStory: boolean;
  notificationMode: string;
};

export type CommunityUser = {
  userId: string;
  userPublicId: string;
  userInternalId: string;
  channelId: string;
  communityId: string;
  communityMembership: string;
  isBanned: boolean;
  lastActivity: string;
  roles: Array<string>;
  permissions: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  categoryId: string;
  name: string;
  metadata: Record<string, unknown>;
  avatarFileId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Feed = {
  targetId: string;
  targetType: string;
  postCount: number;
  feedType: string;
  feedId: string;
  createdAt: string;
  updatedAt: string;
};

export type VideoStreaming = {
  streamId: string;
  userId: string;
  userInternalId: string;
  userPublicId: string;
  thumbnailFileId: string;
  title: string;
  status: string;
  isLive: boolean;
  isDeleted: boolean;
  description: string;
  platform: {
    name: string;
    version: string;
  };
  moderationId: string;
  startedAt: string;
  endedAt: string;
  createdAt: string;
  updatedAt: string;
  metadata: Record<string, unknown>;
  resolution: string;
  streamerUrl: StreamerUrl;
  recordings: Array<Recording>;
  watcherUrl: WatcherUrl;
};

type StreamerUrl = {
  url: string;
  components: UrlComponents;
};

type WatcherUrl = {
  flv?: UrlWithComponents;
  hls?: UrlWithComponents;
  rtmp?: UrlWithComponents;
};

type UrlWithComponents = {
  url: string;
  components: UrlComponents;
};

type UrlComponents = {
  origin: string;
  appName: string;
  streamName: string;
  query: string;
};

type Recording = {
  flv?: RecordingFormat;
  mp4?: RecordingFormat;
  m3u8?: RecordingFormat;
};

type RecordingFormat = {
  url: string;
  duration: number;
  startTime: number;
  stopTime: number;
};
