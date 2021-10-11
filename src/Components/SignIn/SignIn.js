import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from './../../firebase/firebase'
import {Link} from 'react-router-dom';

const SignIn = () => {


    let history = useHistory();
    const [email , setEmail]= useState();
    const [password , setPassword]= useState();

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
        <div>
            <form action="">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={signIn} >SIGN IN</button>
            </form>
            <Link to="/">Home</Link>
            <Link to="/register">Do you have account ?</Link>
        </div>
    )
}

export default SignIn
