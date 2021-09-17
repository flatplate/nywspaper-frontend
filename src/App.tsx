import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DocView} from './containers/DocView';
import {Footer} from './components/Footer';
import {HomePage} from './containers/HomePage';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const toolbar = {
  backgroundColor: '#f1e6d6 '
};

const Title = styled.h2`
  color: #262636;
  cursor: default;
  user-select: none;
  font-family: 'Source Serif Pro', serif;
  margin: 1em;
`;

const AppContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  min-width: 100vw;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  max-width: 100em;
  min-height: 100vh;
  margin: 5em;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Title>
          <Link to='/'>nywspaper</Link>
        </Title>
        <Container>
          <InnerContainer>
            <Route path='/article/:articleId/:sentenceId' component={DocView} />
            <Route path='/' exact>
              <HomePage />
            </Route>
          </InnerContainer>
        </Container>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
