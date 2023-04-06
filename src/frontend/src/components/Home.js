import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <h2>Who are you?</h2>
            <ul>
                <li>
                    <Link to="/create/graduate">Graduate</Link>
                </li>
                <li>
                    <Link to="/institution">Institution</Link>
                </li>
                <li>
                    <Link to="/requester">Requester</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
