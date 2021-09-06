import React, { useState } from 'react';
import {useCachedFetch} from '../hooks';
import {Sentence, SimilarSentence} from '../views/DocView';
import {SimilarSentenceBox} from './SimilarSentenceBox';

type SentenceProps = {
  sentence: Sentence;
};

const SentenceElement: React.FC<SentenceProps> = props => {
  const [hovered, setHovered] = React.useState(false);

  const bgColor = 'inherit';

  return (
    <>
      <mark
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? '#f8aa88' : bgColor,
          cursor: 'pointer',
          transition: 'background-color 100ms linear',
          color: '#060606',
          fontFamily: '"Source Serif Pro", serif',
          whiteSpace: 'pre-line'
        }}
      >
        {props.sentence.text.replace(/\n(\s*\n)+/i, '\n\n') + ' '}
      </mark>
      {hovered && <SimilarSentenceBox sentenceId={props.sentence.id} documentId={props.sentence.articleId} />}
    </>
  );
};

export {SentenceElement};
