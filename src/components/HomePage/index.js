import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import Walkthrough from './components/Walkthrough';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Walkthrough />
            <h1>Bantiiiii</h1>
            <p>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            <Link to="/login">Go to login</Link>
        </>
    );
}
