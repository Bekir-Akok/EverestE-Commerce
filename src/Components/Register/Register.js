import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';

const Register = () => {

    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [displayName, setDisplayName] = useState();

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    };

    return (
        <>
            <form action="">
          
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={register} >REGISTER</button>
            </form>
            <Link to="/">Home</Link>
        </>
    )
}

export default Register
