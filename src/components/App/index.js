import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Helmet } from 'react-helmet';
import AuthProvider from '../AuthProvider';
import Header from '../Header';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import * as S from './styles';

const history = createBrowserHistory();

export default function App() {
    return (
        <AuthProvider>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
            </Helmet>

            <S.GlobalStyle />

            <Router history={history}>
                <S.Wrapper>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignUpPage} />
                    </Switch>
                </S.Wrapper>
            </Router>
        </AuthProvider>
    );
}
