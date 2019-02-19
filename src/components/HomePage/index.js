import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import Hero from './components/Hero';

export default function HomePage() {
    const { authSession } = useContext(AuthContext);

    return (
        <>
            <Hero />

            <h1>Bantiiiii</h1>
            <p>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            {authSession && <p data-testid="jwtToken">{authSession.idToken.jwtToken}</p>}
        </>
    );
}
