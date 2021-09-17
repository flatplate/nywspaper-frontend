import React from 'react';
import styled from 'styled-components';
import {Publisher} from '../types/Publisher';
import { BiasBox } from './BiasBox';

type PublisherBoxProps = {
  publisher: Publisher;
};

const PublisherImage = styled.img`
  max-width: 3em;
  max-height: 2em;
`;

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  height: 2em
`

const PublisherBox: React.FC<PublisherBoxProps> = ({publisher}) => (
  <Conatiner>
    <a href={publisher.url} style={{marginRight: "1em"}}>
      <PublisherImage src={publisher.logo_url} alt={publisher.name} />
    </a>
    <BiasBox biasRating={publisher.bias} />
  </Conatiner>
);

export {PublisherBox}
