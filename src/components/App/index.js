import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3001/pubg/matches').then((resp) => console.log('resp', resp));
    }

    render() {
        return (
            <div className="App">
                <h1>Bantiiiii</h1>
                <p>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            </div>
        );
    }
}
