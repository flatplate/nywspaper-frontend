import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {StoryBox} from '../components/StoryBox';
import { useMobile } from '../hooks';
import { Story } from '../types/Story';

const Hr = styled.hr`
  border-top: 1px solid #443e3840;
  border-left: none;
  border-right: none;
  border-bottom: none;
  margin: 2em;
`;

const HomePage: React.FC = () => {
  const [stories, setStories] = React.useState<Story[]>([]);
  const [error, setError] = React.useState(undefined);
  const [offset, setOffset] = React.useState(0);
  const loadRef: React.Ref<HTMLInputElement> = useRef(null);
  const mobile = useMobile();

  const loadStories = (offset: number) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/stories?offset=${offset}`)
      .then(data => data.json())
      .then(newStories => setStories([...stories, ...newStories]))
      .catch(error => setError(error));
  }

  React.useEffect(() => {
    loadStories(0)
  }, []);

 

  const handleObserver: IntersectionObserverCallback = entities => {
    const target = entities[0];
    if (target.isIntersecting) {
      if (stories.length > offset) { // Im sorry for this to my future self
        setOffset(stories.length);
        loadStories(stories.length);
      }
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadRef.current) observer.observe(loadRef.current);
  });

  return (
    <div style={{maxWidth: '60em'}}>
      {stories.map((story, i) => (
        <>
          {i !== 0 && <Hr />}
          <StoryBox story={story} key={story.id} />
        </>
      ))}
      <div ref={loadRef}></div>
    </div>
  );
};

export {HomePage};
