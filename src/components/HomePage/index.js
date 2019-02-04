import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';

import Players from '../Players';

export default function HomePage() {
    return (
        <>
            <Hero />
            <h1>Bantiiiii</h1>
            <p>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            <Players />
            <Link to="/login">Go to login</Link>
        </>
    );
}
