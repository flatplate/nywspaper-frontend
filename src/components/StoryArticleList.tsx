import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import {useCachedFetch} from '../hooks';
import {ArticleSummary as ArticleSummaryData} from '../types/Article';
import {ArticleSummary} from './ArticleSummary';

type StoryArticleListProps = {
  articleIdList: number[];
};

const ArticleListContainer = styled.div`
`;

const ArticleSummaryContainer = styled.div`
  margin-top: 1em;
`

const StoryArticleList: React.FC<StoryArticleListProps> = ({articleIdList}) => {
  const params = articleIdList.map((id, i) => `${i === 0 ? '?' : '&'}articles=${id}`).join('');
  const {status, data} = useCachedFetch<ArticleSummaryData[]>(`${process.env.REACT_APP_API_URL}/api/v1/articlesummary${params}`);

  return (
    <ArticleListContainer>
      {status === 'fetched' && data
        ? data.map(article => (
            <ArticleSummaryContainer>
              <ArticleSummary articleSummary={article} />
            </ArticleSummaryContainer>
          ))
        : 'loading'}
    </ArticleListContainer>
  );
};

export {StoryArticleList};
