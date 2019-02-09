import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export function LoginPage({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = /* istanbul ignore next */ (event) => event.preventDefault();
    const handleChange = (handler) => ({ target: { value } }) => handler(value);
    const validateForm = () => email.length && password.length;

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleChange(setEmail)} data-testid="emailInput" />
            <input type="password" value={password} onChange={handleChange(setPassword)} data-testid="passwordInput" />

            <button type="submit" disabled={!validateForm()} data-testid="loginButton">
                Login
            </button>

            <button type="button" onClick={history.goBack} data-testid="backButton">
                Go Back
            </button>
        </form>
    );
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }).isRequired
};

export default withRouter(LoginPage);
