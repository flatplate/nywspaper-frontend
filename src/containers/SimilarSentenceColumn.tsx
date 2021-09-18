import { faAngleDown, faAngleUp, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
import {PublisherBox} from '../components/PublisherBox';
import {useCachedFetch} from '../hooks';
import {Sentence as SentenceData, SimilarSentence} from './DocView';

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

const Container = styled.div`
  position: sticky;
  height: 100vh;
  top: 0;
  overflow-y: scroll;
  color: rgba(0, 0, 0, 0.8);
  background-color: #f8aa8890;
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
      <div style={{height: sentenceOffset}} />
      {(sentence &&
        (status == 'fetched' && data
          ? data.map((sentence, i) => (
              <Link to={`/article/${sentence.documentId}/${sentence.id}`}>
                  {i !== 0 && <hr />}
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{width: '1em', display: 'flex', flexDirection: 'column', placeItems: 'start', justifyContent: 'center', fontSize: '2em', color: '#DC565B'}}>
                    <FontAwesomeIcon icon={faAngleUp} cursor="pointer"/>
                    <FontAwesomeIcon icon={faAngleDown} cursor="pointer"/>
                  </div>
                  <div style={{flex: 1}}>
                    <Sentence>{sentence.text}</Sentence>
                    <PublisherSimilarity>
                      <Publisher>
                        <PublisherBox publisher={sentence.publisher} />
                      </Publisher>
                      <Similarity>Similarity {Math.round(sentence.similarity * 100)}%</Similarity>
                    </PublisherSimilarity>
                  </div>
                </div>
              </Link>
            ))
          : 'Loading')) || (
        <div style={{height: '100%', paddingTop: '10em', fontSize: '30px', color: 'rgba(0, 0, 0, 0.5)'}}>
          <p>Click on a paragraph in the article to see similar ones from other news sources.</p>
        </div>
      )}

      <div style={{height: '50%'}} />
    </Container>
  );
};

export {SimilarSentenceColumn};
