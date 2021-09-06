import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {DocumentText} from '../components/DocumentText';

type SimilarSentence = {
  text: string;
  similarity: number;
  documentId: number;
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
  publisher: string;
  publishTime: string;
};


const fetchArticle = (articleId: string) => {
    return fetch(`http://localhost:5000/api/v1/articles?article=${articleId}`)
      .then(data => data.json());
}

type DocViewParams = {
  articleId: string;
}

export const DocView: React.FC = () => {
  const [article, setArticle] = useState<Document>();
  const { articleId } = useParams<DocViewParams>();

  console.log()

  useEffect(() => {
    articleId && fetchArticle(articleId)
      .then((article) => setArticle(article))
      .catch(error => window.alert(error.toString()))
  }, [articleId]);

  return (
    <div style={{width: '100%', textAlign: 'justify', marginTop: 20, fontSize: 20,}}>
      {article && <DocumentText document={article} />}
    </div>
  );
};

export type {Document, Sentence, SimilarSentence};
