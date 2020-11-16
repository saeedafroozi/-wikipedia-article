import React from 'react';
import Article from '../components/Article';
import { ApolloError, gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { StringDictionary } from '../utils/constants';
import { ReactComponent as LoadingIcon } from '../asset/icons/three-dots.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const Loading = styled(LoadingIcon)`
  width:100px;
  height:100px;
`;

const NoResult = styled.div`
`;

const Exception = styled.div`
`;

export const ARTICLE_QUERY = gql`
  query getArticle($page: String) {
    article(page: $page) {
      title
      categories
      sections {
        title
        id
        indentLevel
      }
    }
  }
`;

const renderRightComponent = (loading: boolean, error: ApolloError | undefined, data: GraphqlArticleViewModel | undefined) => {
  if (loading) {
    return <Loading>{StringDictionary.Waiting}</Loading>
  }
  if (error) {
    return <Exception>{StringDictionary.Error_Execption}</Exception>
  }
  else {
    const { article } = data!;
    if (!article) {
      return <NoResult>{StringDictionary.Not_found}</NoResult>
    }
    return (
      <>
        <Article
          categories={article.categories}
          title={article.title}
          sections={article.sections}
        />
      </>
    );
  }
};

interface Props {
  page: string;
};

const SearchResult: React.FC<Props> = ({ page }) => {
  const { loading, error, data } = useQuery<GraphqlArticleViewModel>(
    ARTICLE_QUERY,
    {
      variables: {
        page
      }
    }
  );
  return (
    <Container>{renderRightComponent(loading, error, data)}</Container>
  )
};

export default SearchResult;