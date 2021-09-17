import React from 'react';
import styled from 'styled-components';
import {useCachedFetch} from '../hooks';
import {SimilarSentence} from '../containers/DocView';
import {PublisherBox} from './PublisherBox';

type SimilarSentenceBoxProps = {
  documentId: number;
  sentenceId: number;
};

const SentenceCard = styled.div`
  position: absolute;
  max-width: 30%;
  left: 50%;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fcded1;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Source Serif Pro', serif;
`;

const Sentence = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Publisher = styled.div`
  font-size: 14;
  float: left;
  margin-bottom: 10;
`;

const Similarity = styled.div`
  font-size: 14;
  float: right;
  margin-bottom: 10;
`;

const PublisherSimilarity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
  width: 100%;
`;

const SimilarSentenceBox: React.FC<SimilarSentenceBoxProps> = props => {
  const {status, data} = useCachedFetch<SimilarSentence[]>(
    `${process.env.REACT_APP_API_URL}/api/v1/similarsentences?document_id=${props.documentId}&sentence_id=${props.sentenceId}`
  );
  console.log('DATA', data);
  console.log('DOCUMENTID', (data && data.length > 0 && data[0].documentId) || null);
  console.log('STATUS', status);
  return (
    <SentenceCard>
      {status == 'fetched' && data
        ? data.map((sentence, i) => (
            <>
              {i !== 0 && <hr />}
              <Sentence>{sentence.text}</Sentence>
              <PublisherSimilarity>
                <Publisher>
                  <PublisherBox publisher={sentence.publisher} />
                </Publisher>
                <Similarity>Similarity {Math.round(sentence.similarity * 100)}%</Similarity>
              </PublisherSimilarity>
              <br />
            </>
          ))
        : 'Loading'}
    </SentenceCard>
  );
};

export {SimilarSentenceBox};
