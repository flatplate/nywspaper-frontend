import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ArticleSummary as ArticleSummaryData} from '../types/Article';

const ArticleSummaryContainer = styled.div`
  padding: 1.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  place-items: center;
  cursor: pointer;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #eeddc4;
  }
`;

const ArticleSummaryTitle = styled.h5`
  font-size: 1.5em;
  font-weight: bold;
  color: #060606;
  margin: 0;
  margin-top: 0.2em;
`;

const ArticleSummaryDescription = styled.p`
  font-size: 0.8em;
  color: #443e38;
  margin: 0;
  text-align: justify;
`;

const ArticleSummaryImage = styled.img`
  margin: 0;
  margin-right: 1em;
  max-height: 6em;
`;

const ImageArticleSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
`;

const ArticleSummaryContentContainer = styled.div``;

const ArticleSummaryAdditionalInfo = styled.div`
  font-size: 0.7em;
  color: #443e38aa;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

type ArticleSummaryProps = {
  articleSummary: ArticleSummaryData;
};

const ArticleSummary: React.FC<ArticleSummaryProps> = ({articleSummary}) => {
  return (
    <Link to={`/article/${articleSummary.id}`}>
      <ArticleSummaryContainer>
        <ImageArticleSummaryContainer>
          {articleSummary.image && <ArticleSummaryImage src={articleSummary.image} />}
          <ArticleSummaryContentContainer>
            <ArticleSummaryTitle>{articleSummary.title}</ArticleSummaryTitle>
            <ArticleSummaryAdditionalInfo>{articleSummary.publisher + ' ' + articleSummary.publishTime}</ArticleSummaryAdditionalInfo>
            <ArticleSummaryDescription>{articleSummary.description}</ArticleSummaryDescription>
          </ArticleSummaryContentContainer>
        </ImageArticleSummaryContainer>
      </ArticleSummaryContainer>
    </Link>
  );
};

export {ArticleSummary};
