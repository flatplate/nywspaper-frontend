import React, {useRef, useState} from 'react';
import {useCachedFetch} from '../hooks';
import {Sentence, SimilarSentence} from '../containers/DocView';
import {SimilarSentenceBox} from './SimilarSentenceBox';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

type SentenceProps = {
  sentence: Sentence;
  onHovered: (offsetTop: number) => void;
  hovered: boolean;
};

const appendSpaces = (element: string | undefined) => {
  if (element) {
    return element + ' ';
  } else {
    return element;
  }
};

type ContainerProps = {
  hovered: boolean;
};

const Container = styled.div<ContainerProps>`
  margin-right: ${props => (props.hovered ? '-1em' : 0)};
  margin-left: ${props => (props.hovered ? '1em' : 0)};
  transition: all linear 0.1s;
  cursor: pointer;
`;

const SentenceElement: React.FC<SentenceProps> = props => {
  const ref: React.Ref<HTMLInputElement> = useRef(null);
  const bgColor = 'inherit';

  return (
    <Link
      to={`/article/${props.sentence.articleId}/${props.sentence.id}`}
      onClick={() => {
        props.onHovered(ref.current?.getBoundingClientRect().top || 0);
      }}
    >
      <Container hovered={props.hovered}>
        <mark
          style={{
            backgroundColor: props.hovered ? '#f8aa88' : bgColor,
            cursor: 'pointer',
            transition: 'background-color 150ms linear',
            color: '#060606',
            fontFamily: '"Source Serif Pro", serif',
            whiteSpace: 'pre-line'
          }}
          ref={ref}
        >
          {props.sentence.text.split(/\n(\s*\n)*/i).map((el, i) => (i !== 0 ? [<br />, appendSpaces(el)] : [appendSpaces(el)]))}
        </mark>
      </Container>
    </Link>
  );
};

export {SentenceElement};
