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
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #443e3820;
  border-radius: 0.25em;
  padding: 1em;
  background-color: #f1e6d6;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #f1e6d6a0;
  }
`;

const StoryBoxTitle = styled.h5<{mobile: boolean}>`
  font-size: ${({mobile}) => mobile ? '1.4em' : '2em'};
  font-weight: bold;
  color: #443e38;
  margin: 0;
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
  height: 9em;
  width: 15em;
  min-width: 15em;
  object-fit: cover;
  border-radius: 0.25em;
  flex: 1;
`;

const ImageStoryContainer = styled.div<{mobile: boolean}>`
  padding: 1em;
  display: flex;
  flex-direction: ${({mobile}) => mobile ? 'column' : 'row'};
  place-items: center;
  cursor: pointer;
  transition: background-color 100ms linear;

`;

const ArticleNumber = styled.div`
  color: #443e38e0;
  margin-bottom: 0.75em;

`

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
          <ArticleNumber>{story.articles.length} Article{story.articles.length > 1 ? 's' : ''}</ArticleNumber>
          <StoryBoxDescription mobile={mobile}>{story.description}</StoryBoxDescription>
        </StoryContentContainer>
      </ImageStoryContainer>
      {!collapsed && <StoryArticleList articleIdList={story.articles} />}
    </StoryBoxContainer>
  );
};

export {StoryBox};
