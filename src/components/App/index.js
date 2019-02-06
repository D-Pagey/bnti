import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Chicken from '../Chicken';

export default function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{ maxWidth: 800, margin: '0 auto', fontFamily: 'sans-serif' }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Chicken} />
                    <Route path="/tasty" component={Chicken} />
                    <Route path="/delicious" component={Chicken} />
                </Switch>
                <p>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            </div>
        </BrowserRouter>
    );
}
