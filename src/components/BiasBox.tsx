import React from 'react';
import styled from 'styled-components';

type BiasBoxProps = {
  biasRating: number;
};

const biasRatings = ['Left', 'Center-Left', 'Center', 'Center-Right', 'Right'];
const biasColors = ['#119CC490', '#47CBCD90', '#F1E6D690', '#F8AA8890', '#DC565B90'];

const ColoredBox = styled.div<BiasBoxProps>`
  padding: 0.3em;
  padding-right: 1em;
  padding-left: 1em;
  background-color: ${props => biasColors[props.biasRating + 2]};
  color: #262636;
  border-radius: 0.2em;
  place-items: center;
  display: flex;
  font-size: 18px;
`;

const BiasBox: React.FC<BiasBoxProps> = ({biasRating}) => <ColoredBox biasRating={biasRating}>{biasRatings[biasRating + 2]}</ColoredBox>;

export {BiasBox};
