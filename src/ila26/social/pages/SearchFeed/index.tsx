import React, { useEffect } from 'react';
import useIntelligentSearchPost from '~/core/hooks/useIntelligentSearchPost';
import EmptyFeed from '~/social/components/EmptyFeed';
import { FeedScrollContainer } from '~/social/components/Feed/styles';
import LoadMoreWrapper from '~/social/components/LoadMoreWrapper';
import Post from '~/social/components/post/Post';
import DefaultPostRenderer from '~/social/components/post/Post/DefaultPostRenderer';
import EmptyResult from '../../components/EmptyResult';

const SearchFeed = ({ query }: props) => {
  const {
    posts: contents,
    isLoading,
    hasNext,
    onNext,
    loadMoreHasBeenCalled,
  } = useIntelligentSearchPost(query);

  function renderLoadingSkeleton() {
    return new Array(3).fill(3).map((_, index) => <DefaultPostRenderer key={index} loading />);
  }

  return (
    <FeedScrollContainer dataLength={contents.length} next={onNext} hasMore={hasNext} loader={null}>
      <>
        {isLoading && !loadMoreHasBeenCalled ? renderLoadingSkeleton() : null}

        {(!isLoading || loadMoreHasBeenCalled) && contents.length > 0 && (
          <LoadMoreWrapper
            hasMore={hasNext}
            loadMore={onNext}
            className="load-more no-border"
            contentSlot={contents.map((content) => (
              <Post
                key={content.postId}
                postId={content.postId}
                hidePostTarget={false}
                readonly={false}
              />
            ))}
          />
        )}

        {!isLoading && contents.length === 0 && <EmptyResult />}

        {isLoading && loadMoreHasBeenCalled ? renderLoadingSkeleton() : null}
      </>
    </FeedScrollContainer>
  );
};

type props = {
  query: string;
};

export default SearchFeed;
