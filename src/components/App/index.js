import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

export default function App() {
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </Router>
    );
}
