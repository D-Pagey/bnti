import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth';
import * as S from './styles';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { authSignUp } = useContext(AuthContext);

    const handleChange = (handler) => ({ target: { value } }) => handler(value);
    const validateForm = () => email.length && password.length && username.length;

    const handleSubmit = async (event) => {
        event.preventDefault();
        authSignUp({ email, password });
    };

    return (
        <S.Wrapper>
            <S.Title>Sign Up</S.Title>
            <S.Form onSubmit={handleSubmit}>
                <S.Label htmlFor="username">
                    Username:
                    <input type="text" id="username" value={username} onChange={handleChange(setUsername)} />
                </S.Label>
                <S.Label htmlFor="email">
                    Email:
                    <input type="text" id="name" value={email} onChange={handleChange(setEmail)} />
                </S.Label>
                <S.Label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleChange(setPassword)}
                        placeholder="FoobarTest1234!"
                    />
                </S.Label>
                <button type="submit" disabled={!validateForm()}>
                    Sign Up
                </button>
            </S.Form>
        </S.Wrapper>
    );
};

export default SignUp;
