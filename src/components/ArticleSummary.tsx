import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useMobile} from '../hooks';
import {ArticleSummary as ArticleSummaryData} from '../types/Article';
import { processImageUrl } from '../util/ProcessImage';
import {PublisherBox} from './PublisherBox';

const ArticleSummaryContainer = styled.div`
  padding: 1.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 100ms linear;
  flex: 1;

  &:hover {
    background-color: #eeddc4;
  }
`;

const ArticleSummaryTitle = styled.h5<{mobile: boolean}>`
  font-size: ${({mobile}) => (mobile ? '1em' : '1.5em')};
  font-weight: bold;
  color: #443e38;
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
  border-radius: 0.25em;
  max-height: 6em;
  height: 6em;
  width: 10em;
  min-width: 10em;
  object-fit: cover;
  flex: 1;
`;

const ImageArticleSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: start;
  flex: 1;
`;

const ArticleSummaryContentContainer = styled.div`
  flex: 1;
`;

const ArticleSummaryAdditionalInfo = styled.div`
  font-size: 0.7em;
  color: #443e38aa;
  margin-top: 1em;
  margin-bottom: 1em;
  justify-items: between;
  place-items: center;
  display: flex;
`;

const ArticleImageContainer = styled.div`
  min-width: 13em;
  text-align: center;
  justify-content: center;
  display: flex;
`;

type ArticleSummaryProps = {
  articleSummary: ArticleSummaryData;
};


const ArticleSummary: React.FC<ArticleSummaryProps> = ({articleSummary}) => {
  const mobile = useMobile();

  return (
    <Link to={`/article/${articleSummary.id}/-1`}>
      <ArticleSummaryContainer>
        <ImageArticleSummaryContainer>
          {!mobile && articleSummary.image && (
            <ArticleImageContainer>
              <ArticleSummaryImage src={processImageUrl(articleSummary.image)} />
            </ArticleImageContainer>
          )}
          <ArticleSummaryContentContainer>
            <ArticleSummaryTitle mobile={mobile}>{articleSummary.title}</ArticleSummaryTitle>
            <ArticleSummaryAdditionalInfo>
              <PublisherBox publisher={articleSummary.publisher} />
              <div style={{marginLeft: 10}}>
                {new Date(articleSummary.publishTime).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit'
                })}
              </div>
            </ArticleSummaryAdditionalInfo>
            <ArticleSummaryDescription>{articleSummary.description}</ArticleSummaryDescription>
          </ArticleSummaryContentContainer>
        </ImageArticleSummaryContainer>
      </ArticleSummaryContainer>
    </Link>
  );
};

export {ArticleSummary};
