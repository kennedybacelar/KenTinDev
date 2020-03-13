import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(username);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Type your user on github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}