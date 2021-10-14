import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './../../firebase/firebase'
import { Link } from 'react-router-dom';
import { AiOutlineLock } from 'react-icons/ai';
import './signIn.scss';

const SignIn = () => {


    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    };

    return (
        <div className="signin-container">
            <div className="signin-title">
                <p>Sign in</p>
                <span>
                    <AiOutlineLock />
                </span>
            </div>
            <form action=""
                onSubmit={signIn} >
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)} />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />
                <button
                    type="submit">
                    SIGN IN
                </button>
            </form>
            <p>
                Don't have an account ?
                <Link to="/register"> Create one now.</Link>
            </p>
        </div>
    )
}

export default SignIn
