import React from 'react';
import styled from 'styled-components';
import {Document} from '../views/DocView';
import {SentenceElement} from './Sentence';

const Title = styled.h2`
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

type DocumentProps = {
  document: Document;
};

const DocumentText: React.FC<DocumentProps> = props => {
  return (
    <div>
      <ImageContainer>
        <HeadlineImage src={props.document.image} />
      </ImageContainer>
      <Title>{props.document.title}</Title>
      <AdditionalInformation>
        {props.document.publisher}, at {props.document.publishTime}
      </AdditionalInformation>
      {props.document.sentences.map(sentence => (
        <SentenceElement sentence={sentence} />
      ))}
    </div>
  );
};

export {DocumentText};
