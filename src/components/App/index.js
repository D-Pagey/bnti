import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Chicken from '../Chicken';

class App extends Component {
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_GATEWAY}/pubg/matches`).then((resp) => console.log('resp', resp));
    }

    render() {
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
}

export default App;
