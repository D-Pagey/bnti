import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import * as S from './styles';

const GlobalStyle = createGlobalStyle`${normalize()}`;

export default function App() {
    return (
        <Router history={createBrowserHistory()}>
            <S.Wrapper>
                <Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
                </Helmet>
                <GlobalStyle />
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </S.Wrapper>
        </Router>
    );
}
