import {faAngleDown, faAngleUp, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useRef, useState} from 'react';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
import {useCachedFetch} from '../hooks';
import {Sentence as SentenceData, SimilarSentence} from './DocView';
import {SimilarSentenceCardComponent} from './SimilarSentenceCard';

type SimilarSentenceColumnProps = {
  sentence?: SentenceData;
  sentenceOffset: number;
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

const Container = styled.div`
  position: sticky;
  height: 100vh;
  top: 0;
  overflow-y: scroll;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 1em;
  padding-right: 1em;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SimilarSentenceColumn: React.FC<SimilarSentenceColumnProps> = ({sentence, sentenceOffset}) => {
  const {status, data} = useCachedFetch<SimilarSentence[]>(
    sentence ? `${process.env.REACT_APP_API_URL}/api/v1/similarsentences?document_id=${sentence?.articleId}&sentence_id=${sentence.id}` : ''
  );

  const ref: React.Ref<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [sentence]);

  return (
    <Container ref={ref}>
      <div style={{height: window.innerHeight / 4}} />
      {(sentence &&
        (status == 'fetched' && data
          ? data.map((similarSentence, i) => (
              <SimilarSentenceCardComponent sentence={similarSentence} currentSentenceId={sentence.id} currentArticleId={sentence.articleId} />
            ))
          : 'Loading')) || (
        <div style={{height: '100%', paddingTop: '10em', fontSize: '30px', color: '#443e38a0'}}>
          <p>Click on a paragraph in the article to see similar ones from other news sources.</p>
        </div>
      )}

      <div style={{height: '50%'}} />
    </Container>
  );
};

export {SimilarSentenceColumn};
