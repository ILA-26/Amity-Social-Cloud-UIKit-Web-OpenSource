import React from 'react';

import useCategory from '~/social/hooks/useCategory';

import { Header, PageContainer, Title } from './styles';
import UICategoryCommunitiesList from '~/social/components/community/CategoryCommunitiesList/UICategoryCommunitiesList';
import { useCategoryCommunitiesList } from '~/social/components/community/CategoryCommunitiesList/hook';

interface CategoryCommunitiesPageProps {
  categoryId?: string | null;
}

const CategoryCommunitiesPage = ({ categoryId }: CategoryCommunitiesPageProps) => {
  const category = useCategory(categoryId);
  const { communities, loadMore, isLoading, hasMore, onClickCommunity } =
    useCategoryCommunitiesList({ categoryId });

  const title = category?.name || '';

  return (
    <PageContainer>
      <Header>
        <Title>{title}</Title>
      </Header>
      {category ? (
        <UICategoryCommunitiesList
          category={category}
          communities={communities}
          loadMore={loadMore}
          isLoading={isLoading}
          hasMore={hasMore}
          onClickCommunity={onClickCommunity}
        />
      ) : null}
    </PageContainer>
  );
};

export default CategoryCommunitiesPage;
