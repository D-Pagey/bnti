import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import AuthContext from '../../contexts/auth';

const LOCAL_STORAGE_KEY = 'authSession';

function AuthProvider({ children }) {
    const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const [authSession, setAuthSession] = useState(initialState);

    const authLogin = async (email, password) => {
        try {
            let user = await Auth.signIn(email, password);

            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                const newPassword = prompt('Please enter a new password'); // eslint-disable-line
                user = await Auth.completeNewPassword(user, newPassword);
            }

            setAuthSession(user.signInUserSession);
            console.log('authLogin user', user); // eslint-disable-line
        } catch (err) {
            console.log('authLogin err', err); // eslint-disable-line
        }
    };

    const authLogout = () => {
        Auth.signOut()
            .then(() => setAuthSession(null)) // eslint-disable-line
            .catch((err) => console.log('authLogout err', err)); // eslint-disable-line
    };

    const authSignUp = async ({ email, password }) => {
        Auth.signUp({
            username: email,
            password,
            attributes: {
                email
            }
        })
            .then((data) => console.log(data)) // eslint-disable-line
            .catch((err) => console.log(err)); // eslint-disable-line
    };

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authSession));
    }, [authSession]);

    return (
        <AuthContext.Provider value={{ authSession, authLogin, authLogout, authSignUp }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;
