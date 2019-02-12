import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authSession, authLogin } = useContext(AuthContext);

    const handleChange = (handler) => ({ target: { value } }) => handler(value);
    const validateForm = () => email.length && password.length;

    const handleSubmit = async (event) => {
        event.preventDefault();
        authLogin(email, password);
    };

    return (
        <>
            {!authSession && (
                <form onSubmit={handleSubmit} data-testid="loginForm">
                    <input type="email" value={email} onChange={handleChange(setEmail)} data-testid="emailInput" />

                    <input
                        type="password"
                        value={password}
                        onChange={handleChange(setPassword)}
                        data-testid="passwordInput"
                    />

                    <button type="submit" disabled={!validateForm()} data-testid="loginButton">
                        Login
                    </button>
                </form>
            )}

            {authSession && <pre data-testid="authSessionJSON">{JSON.stringify(authSession, null, 2)}</pre>}
        </>
    );
}
