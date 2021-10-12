import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button} from './Button';

const PopupContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 2em;
`;

const Underlay = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const PopupBox = styled.div`
  background-color: #f1e6d6;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 30;
  border-radius: 0.25em;
  padding: 2em;
  font-size: 1.25em;
  place-items: center;
  color: #262636;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  margin-left: 1em;
`;

const SurveyPopup: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setActive(true), 300000);
  }, []);

  if (active) {
    return (
      <div>
        <Underlay onClick={() => setActive(false)} />
        <PopupContainer>
          <PopupBox>
            <p>
              Thanks for checking out nywspaper. Nywspaper is a research project and it needs your help for the evaluation. By filling out this survey, you can
              help me finish my bachelor's degree.
            </p>
            <ButtonContainer>
              <a href='https://www.questionpro.com/a/TakeSurvey?tt=hcEy0KVCmoA%3D' target='_blank'>
                <Button>Take the survey</Button>
              </a>
            </ButtonContainer>
          </PopupBox>
        </PopupContainer>
      </div>
    );
  }

  return null;
};

export {SurveyPopup};
