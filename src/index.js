import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import App from './components/App';
import config from './config';

Amplify.configure({
    Auth: {
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
