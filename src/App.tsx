import './App.css';
import {DocView} from './containers/DocView';
import {Footer} from './components/Footer';
import {HomePage} from './containers/HomePage';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useMobile} from './hooks';
import {Button} from './components/Button';
import {FAQ} from './components/Faq';
import {Helmet} from 'react-helmet';
import { SurveyPopup } from './components/SurveyPopup';

const Title = styled.h2`
  color: #262636;
  cursor: default;
  user-select: none;
  font-family: 'Source Serif Pro', serif;
  margin: 1em;
  float: left;
`;

const AppContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  min-width: 100vw;
  flex-direction: column;
`;

const InnerContainer = styled.div<{mobile: boolean}>`
  max-width: 100em;
  min-height: 100vh;
  margin: ${({mobile}) => (mobile ? '1em' : '5em')};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
`;

const TopBar = styled.div<{mobile: boolean}>`
  width: 100%;
  font-size: ${({mobile}) => (mobile ? '0.8em' : '1em')};
`;

const ButtonContainer = styled.div`
  float: right;
  margin: 1em;
  display: flex;
  place-items: center;
`;

const LinkContainer = styled.div`
  margin-right: 1em;
  font-size: 1.5em;
  transition: color 100ms linear;

  &:hover {
    color: #262636f0;
  }
`;

function App() {
  const mobile = useMobile();
  return (
    <AppContainer>
      <Helmet>
        <script id='CookieDeclaration' src='https://consent.cookiebot.com/5765d369-9d16-4f43-8361-16f46dcc3130/cd.js' type='text/javascript' async></script>
      </Helmet>
      <SurveyPopup />
      <Router>
        <TopBar mobile={mobile}>
          <Title>
            <Link to='/'>nywspaper</Link>
          </Title>
          <ButtonContainer>
            <LinkContainer>
              <Link to='/faq'>FAQ</Link>
            </LinkContainer>
            <a href='mailto:uralbayhan0@gmail.com'>
              <Button>Contact me</Button>
            </a>
          </ButtonContainer>
        </TopBar>
        <Container>
          <InnerContainer mobile={mobile}>
            <Route path='/article/:articleId/:sentenceId' component={DocView} />
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/faq' component={FAQ} />
          </InnerContainer>
        </Container>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
