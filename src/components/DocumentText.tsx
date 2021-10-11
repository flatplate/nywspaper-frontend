import React from 'react';
import styled from 'styled-components';
import {Document, Sentence} from '../containers/DocView';
import {PublisherBox} from './PublisherBox';
import {SentenceElement} from './Sentence';

const Title = styled.a`
  font-size: 1.8em;
  font-weight: bold;
  color: #443e38;
  margin-bottom: 0px;
  margin-top: 0.5em;
  text-align: justify;
`;

const AdditionalInformation = styled.p`
  font-size: 0.8em;
  margin: 0;
  margin-bottom: 1em;
  color: #443e38e0;
  text-align: left;
  display: flex;
  flex-direction: row;
  place-items: center;
  margin-top: 1em;
`;

const HeadlineImage = styled.img`
  width: 100%;
  max-width: 30em;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2em;
`;

const SentencesContainer = styled.div`
  margin-top: 2em;
  line-height: 1.5em;
  overflow-x: visible;
`;

type DocumentProps = {
  document: Document;
  onSentenceHovered: (offsetTop: number) => void;
  hoveredSentenceId: number;
};

const DocumentText: React.FC<DocumentProps> = props => {
  return (
    <div>
      <ImageContainer>
        <HeadlineImage src={props.document.image} />
      </ImageContainer>
      <Title href={props.document.url}>{props.document.title}</Title>
      <AdditionalInformation>
        <PublisherBox publisher={props.document.publisher} />
        <div style={{marginLeft: 10}}>
          {new Date(props.document.publishTime).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
          })}
        </div>
      </AdditionalInformation>
      <SentencesContainer>
        {props.document.sentences.map(sentence => (
          <SentenceElement sentence={sentence} onHovered={offsetTop => props.onSentenceHovered(offsetTop)} hovered={sentence.id === props.hoveredSentenceId} />
        ))}
      </SentencesContainer>
    </div>
  );
};

export {DocumentText};
