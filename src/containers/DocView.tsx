import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
import {DocumentText} from '../components/DocumentText';
import {Publisher} from '../types/Publisher';
import {SimilarSentenceColumn} from './SimilarSentenceColumn';
import { SimilarSentencePopup } from './SimilarSentencePopup';

type SimilarSentence = {
  text: string;
  similarity: number;
  documentId: number;
  publisher: Publisher;
};

type Sentence = {
  articleId: number;
  id: number;
  text: string;
};

type Document = {
  sentences: Sentence[];
  id: number;
  title: string;
  description: string;
  image: string;
  publisher: Publisher;
  publishTime: string;
  url: string;
};

const fetchArticle = (articleId: string) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/articles?article=${articleId}`).then(data => data.json());
};

type DocViewParams = {
  articleId: string;
};

type PopupWindowProps = {active: boolean}
const PopupWindow = styled.div<PopupWindowProps>`
  height: ${({active}) => active ? '50vh' : 0};
  max-height: 50vh;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  transition: height 100ms linear;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-top: ${({active}) => active? '5vh solid #fac3ab': 'none'}
`

export const DocView: React.FC = () => {
  const [article, setArticle] = useState<Document>();
  const [hoveredSentence, setHoveredSentence] = useState<Sentence | undefined>();
  const [offsetTop, setOffsetTop] = useState(0);
  const {articleId} = useParams<DocViewParams>();
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  console.log();

  useEffect(() => {
    articleId &&
      fetchArticle(articleId)
        .then(article => setArticle(article))
        .catch(error => window.alert(error.toString()));
  }, [articleId]);

  if (width > 768) {
    return (
      <div style={{maxWidth: '60em', textAlign: 'justify', marginTop: 20, fontSize: 20, display: 'flex', justifyContent: 'space-between'}}>
        <div style={{marginRight: '1em', flex: 1}}>
          {article && (
            <DocumentText
              document={article}
              onSentenceHovered={(sentence, offset) => {
                setHoveredSentence(sentence);
                setOffsetTop(offset);
              }}
              hoveredSentenceId={hoveredSentence === undefined ? -1 : hoveredSentence.id}
            />
          )}
        </div>
        <div style={{height: '100%', width: '1em'}}></div>
        <div style={{flex: 1}}>
          <SimilarSentenceColumn sentence={hoveredSentence} sentenceOffset={offsetTop} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={{textAlign: 'justify', marginTop: 20, fontSize: 16, overflowX: 'visible'}}>
        <div>
          {article && (
            <DocumentText
              document={article}
              onSentenceHovered={(sentence, offset) => {
                setHoveredSentence(sentence);
                setOffsetTop(offset);
              }}
              hoveredSentenceId={hoveredSentence === undefined ? -1 : hoveredSentence.id}
            />
          )}
        </div>
        <PopupWindow active={!!hoveredSentence}>
          <div style={{position: 'absolute', right: 20, top: 20}} onClick={() => setHoveredSentence(undefined)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <SimilarSentencePopup sentence={hoveredSentence} />
        </PopupWindow>
      </div>
    )
  }
};

export type {Document, Sentence, SimilarSentence};
