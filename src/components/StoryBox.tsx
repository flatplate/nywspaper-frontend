import React, {useState} from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks';
import {Story} from '../types/Story';
import { processImageUrl } from '../util/ProcessImage';
import {StoryArticleList} from './StoryArticleList';

type StoryBoxProps = {
  story: Story;
};

type MobileProps = {
  mobile: boolean
}

const StoryBoxContainer = styled.div<MobileProps>`
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  place-items: center;
  cursor: pointer;
  border: none;
  border-right: 3px solid #443e3840;
  border-left: 3px solid #443e3840;
`;

const StoryBoxTitle = styled.h5<{mobile: boolean}>`
  font-size: ${({mobile}) => mobile ? '1.4em' : '2em'};
  font-weight: bold;
  color: #443e38;
  margin: 0;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

const StoryBoxDescription = styled.p<MobileProps>`
  font-size: ${({mobile}) => mobile ? '0.8em' : '1em'};
  color: #443e38e0;
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
  const mobile = useMobile();

  return (
    <StoryBoxContainer mobile={mobile}>
      <ImageStoryContainer onClick={() => setCollapsed(!collapsed)} mobile={mobile}>
        {story.image && <StoryBoxImage src={processImageUrl(story.image)} />}
        <StoryContentContainer>
          <StoryBoxTitle mobile={mobile}>{story.title}</StoryBoxTitle>
          <StoryBoxDescription mobile={mobile}>{story.description}</StoryBoxDescription>
        </StoryContentContainer>
      </ImageStoryContainer>
      {!collapsed && <StoryArticleList articleIdList={story.articles} />}
    </StoryBoxContainer>
  );
};

export {StoryBox};
