import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <h1>Bantiiiii</h1>
            <p>API_GATEWAY = {process.env.REACT_APP_API_GATEWAY}</p>
            <Link to="/login">Go to login</Link>
        </div>
    );
}
