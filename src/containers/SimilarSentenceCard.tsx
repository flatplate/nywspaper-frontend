import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {PublisherBox} from '../components/PublisherBox';
import {SimilarSentence} from './DocView';

export const Sentence = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Publisher = styled.div`
  font-size: 14;
  float: left;
  margin-bottom: 10;
`;

export const Similarity = styled.div`
  font-size: 14;
  float: right;
  margin-bottom: 10;
`;

export const PublisherSimilarity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
  width: 100%;
`;

export const FeedbackBox = styled.div<{active: boolean}>`
  height: 2em;
  width: 2em;
  display: flex;
  place-items: center;
  text-align: center;
  justify-content: center;
  color: ${({active}) => active ? '#262636' : '#262636c0'};
  transition: color 100ms linear;
`;

const SimilarSentenceCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1e6d6;
  border-radius: 0.25em;
  padding: 2em;
  box-shadow: 0px 5px 10px 0px #26263620;
  margin-bottom: 1em;
  transition: background-color 100ms linear;
  border: 1px solid #26263620;
  color: #443e38;

  &:hover {
    background-color: #f1e6d6a0;
  }
`;

const FeedbackContainer = styled.div`
  width: 5em;
  display: flex;
  justify-content: space-between;
`

export const SimilarSentenceCardComponent: React.FC<{sentence: SimilarSentence, currentSentenceId: number, currentArticleId: number}> = ({sentence, currentSentenceId, currentArticleId}) => {
  const [hovered, setHovered] = useState(false);
  const [feedback, setFeedback] = useState<number>(0);

  const feedbackGiven = (feedback: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/feedback`;
    const feedbackData = {
      articleOneId: currentArticleId,
      articleTwoId: sentence.documentId,
      sentenceOneId: currentSentenceId,
      sentenceTwoId: sentence.id,
      similarity: sentence.similarity,
      feedback: feedback
    }

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(feedbackData),
      credentials: 'include'
    }

    setFeedback(feedback);
    fetch(url, requestOptions as any);
  }

  return (
    <Link to={`/article/${sentence.documentId}/${sentence.id}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <SimilarSentenceCard>
        <div style={{flex: 1}}>
          <Sentence>{sentence.text}</Sentence>
          <PublisherSimilarity>
            <Publisher>
              <PublisherBox publisher={sentence.publisher} />
            </Publisher>
            {hovered ? (
              <FeedbackContainer>
                <FeedbackBox onClick={(e) => feedbackGiven(1, e)} active={feedback > 0}>
                  <FontAwesomeIcon icon={faThumbsUp} title='This paragraph suggestion is correct' />
                </FeedbackBox>
                <FeedbackBox onClick={(e) => feedbackGiven(-1, e)} active={feedback < 0}>
                  <FontAwesomeIcon icon={faThumbsDown} title='This paragraph suggestion is not correct' />
                </FeedbackBox>
              </FeedbackContainer>
            ) : (
              <Similarity>Similarity {Math.round(sentence.similarity * 100)}%</Similarity>
            )}
          </PublisherSimilarity>
        </div>
      </SimilarSentenceCard>
    </Link>
  );
};
