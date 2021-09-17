import React from 'react';
import styled from 'styled-components';
import {Document, Sentence} from '../containers/DocView';
import {PublisherBox} from './PublisherBox';
import {SentenceElement} from './Sentence';

const Title = styled.a`
  font-size: 1.8em;
  font-weight: bold;
  color: #060606;
  margin: 0;
  margin-bottom: 0em;
  margin-top: 0.5em;
  text-align: justify;
`;

const AdditionalInformation = styled.p`
  font-size: 0.8em;
  margin: 0;
  margin-bottom: 1em;
  color: #06060690;
  text-align: left;
  display: flex;
  flex-direction: row;
  place-items: center;
`;

const HeadlineImage = styled.img`
  width: 100%;
  max-width: 30em;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SentencesContainer = styled.div`
  margin-top: 2em;
  line-height: 1.5em;
  overflow-x: visible;
`;

type DocumentProps = {
  document: Document;
  onSentenceHovered: (sentence: Sentence, offsetTop: number) => void;
  hoveredSentenceId: number;
};

const DocumentText: React.FC<DocumentProps> = props => {
  return (
    <div style={{overflowX: 'visible'}}>
      <ImageContainer>
        <HeadlineImage src={props.document.image} />
      </ImageContainer>
      <Title href={props.document.url}>{props.document.title}</Title>
      <AdditionalInformation>
        <PublisherBox publisher={props.document.publisher} />
        {'  '}
        {props.document.publishTime}
      </AdditionalInformation>
      <SentencesContainer>
        {props.document.sentences.map(sentence => (
          <SentenceElement sentence={sentence} onHovered={(offsetTop) => props.onSentenceHovered(sentence, offsetTop)} hovered={sentence.id === props.hoveredSentenceId} />
        ))}
      </SentencesContainer>
    </div>
  );
};

export {DocumentText};
