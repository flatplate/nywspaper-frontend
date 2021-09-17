import React, {useState} from 'react';
import styled from 'styled-components';
import {Story} from '../types/Story';
import {StoryArticleList} from './StoryArticleList';

type StoryBoxProps = {
  story: Story;
};

const StoryBoxContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  place-items: center;
  cursor: pointer;
  border: none;
  border-right: 3px solid #443e3840;
  border-left: 3px solid #443e3840;
`;

const StoryBoxTitle = styled.h5`
  font-size: 2em;
  font-weight: bold;
  color: #060606;
  margin: 0;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

const StoryBoxDescription = styled.p`
  font-size: 1em;
  color: #443e38;
  margin: 0;
  text-align: justify;
`;

const StoryBoxImage = styled.img`
  margin: 0;
  margin-right: 1em;
  max-height: 8em;
`;

const ImageStoryContainer = styled.div<{mobile: boolean}>`
  padding: 1em;
  display: flex;
  flex-direction: ${({mobile}) => mobile ? 'column' : 'row'};
  place-items: center;
  cursor: pointer;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #eeddc4;
  }
`;

const StoryContentContainer = styled.div``;

const StoryBox: React.FC<StoryBoxProps> = ({story}) => {
  const [collapsed, setCollapsed] = useState(true);
  const mobile = window.innerWidth <= 768;

  return (
    <StoryBoxContainer>
      <ImageStoryContainer onClick={() => setCollapsed(!collapsed)} mobile={mobile}>
        {story.image && <StoryBoxImage src={story.image} />}
        <StoryContentContainer>
          <StoryBoxTitle>{story.title}</StoryBoxTitle>
          <StoryBoxDescription>{story.description}</StoryBoxDescription>
        </StoryContentContainer>
      </ImageStoryContainer>
      {!collapsed && <StoryArticleList articleIdList={story.articles} />}
    </StoryBoxContainer>
  );
};

export {StoryBox};
