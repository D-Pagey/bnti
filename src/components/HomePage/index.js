import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import Walkthrough from './components/Walkthrough';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Walkthrough />
            <h1 style={{ color: 'white' }}>Bantiiiii</h1>
            <p style={{ color: 'white' }}>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            <Link to="/login" style={{ color: 'white' }}>
                Go to login
            </Link>
        </>
    );
}
