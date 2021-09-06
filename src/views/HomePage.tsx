import React from 'react';
import styled from 'styled-components';
import {StoryBox} from '../components/StoryBox';

const Hr = styled.hr`
    color: #f1e6d650;
`

const HomePage: React.FC = () => {
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(undefined);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/v1/stories')
      .then(data => data.json())
      .then(stories => setStories(stories))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      {stories.map((story, i) => (
        <>
          {i !== 0 && <Hr />}
          <StoryBox story={story} />
        </>
      ))}
    </div>
  );
};

export {HomePage};
