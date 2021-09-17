import React, {useEffect, useRef} from 'react';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
import {PublisherBox} from '../components/PublisherBox';
import {useCachedFetch} from '../hooks';
import {Sentence as SentenceData, SimilarSentence} from './DocView';

type SimilarSentencePopupProps = {
  sentence?: SentenceData;
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
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  color: rgba(0, 0, 0, 0.8);
  background-color: #fac3ab;
  position: static;
  height: 100%;
  padding: 3em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SimilarSentencePopup: React.FC<SimilarSentencePopupProps> = ({sentence}) => {
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
      {(sentence &&
        (status == 'fetched' && data
          ? (data.length > 0
            ? <>{data.map((sentence, i) => (
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
            ))} <div style={{height: '5em'}}/></>
            : "There are no similar articles")
          : 'Loading')) || (
        <div style={{height: '100%', paddingTop: '10em', fontSize: '30px', color: 'rgba(0, 0, 0, 0.5)'}}>
          <p>Click on a paragraph in the article to see similar ones from other news sources.</p>
        </div>
      )}
    </Container>
  );
};

export {SimilarSentencePopup};
