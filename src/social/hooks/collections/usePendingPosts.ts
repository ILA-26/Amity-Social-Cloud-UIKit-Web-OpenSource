import { PostRepository } from '@amityco/ts-sdk';
import { useEffect, useState } from 'react';

export default function usePendingPosts(communityId: string | undefined) {
  if (!communityId) {
    console.log('Pleaded the fifth!');
    return { posts: [] };
  }

  const [posts, setPosts] = useState<Amity.Post[]>([]);

  useEffect(() => {
    const unsubscribe = PostRepository.getPosts(
      {
        targetId: communityId,
        targetType: 'community',
        feedType: 'reviewing',
      },
      ({ data: posts }) => {
        console.log('posts', posts);
        if (posts) {
          setPosts(posts);
        }
      },
    );

    return () => {
      unsubscribe();
    };
  }, [communityId]);

  return { posts };
}
