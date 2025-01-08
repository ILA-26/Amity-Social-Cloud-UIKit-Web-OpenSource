import { Client as ASCClient } from '@amityco/ts-sdk';
import { useCallback, useEffect, useState } from 'react';
import {
  Category,
  Community,
  CommunityUser,
  Feed,
  Paging,
  Post,
  User,
  VideoStreaming,
} from '~/ila26/types';

const useIntelligentSearchPost = (query: string, options?: { limit?: number }) => {
  const { limit = 10 } = options ?? {};

  const currentClient = ASCClient.getActiveClient();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [paging, setPaging] = useState<Paging>();
  const [loadMoreHasBeenCalled, setLoadMoreHasBeenCalled] = useState(false);

  const onNext = useCallback(() => {
    setLoadMoreHasBeenCalled(true);
    if (paging?.next) {
      fetchResult(paging.next);
    }
  }, [paging]);

  const fetchResult = async (token?: string) => {
    setLoading(true);
    try {
      const response = await currentClient.http.get<PostPayload>(`/api/v1/semantic-search/posts`, {
        params: {
          query,
          options: {
            limit,
            token,
          },
        },
      });
      setLoading(false);
      if (response.status === 200) {
        token
          ? setPosts((prev) => [...prev, ...response.data.posts])
          : setPosts(response.data.posts);
        setPaging(response.data.paging);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (query === '') return;
    fetchResult();
  }, [query]);

  return {
    posts,
    isLoading: loading,
    error,
    hasNext: Boolean(paging?.next),
    onNext,
    loadMoreHasBeenCalled,
  };
};

export default useIntelligentSearchPost;

type PostPayload = {
  searchResults: Array<{
    postId: string;
    score: number;
  }>;
  posts: Array<Post>;
  postChildren: Array<Post>;
  comments: Array<Comment>;
  users: Array<User>;
  files: Array<File>;
  communities: Array<Community>;
  communityUsers: Array<CommunityUser>;
  categories: Array<Category>;
  feeds: Array<Feed>;
  videoStreamings: Array<VideoStreaming>;
  paging: Paging;
};
