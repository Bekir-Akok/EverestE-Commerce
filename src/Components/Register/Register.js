import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';
import { AiOutlineLock } from 'react-icons/ai';

const Register = () => {

    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    auth.user.updateProfile({ displayName: name + " " + surname })
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    };

    return (
        <>
            <div className="signin-container">
                <div className="signin-title">
                    <p>Create Your Account</p>
                    <span>
                        <AiOutlineLock />
                    </span>
                </div>
                <form action=""
                    onSubmit={register}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                        required />
                    <input
                        type="text"
                        value={surname}
                        placeholder="Surname"
                        onChange={e => setSurname(e.target.value)}
                        required />
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        required />
                    <button
                        type="submit" >
                        CREATE ACCOUNT
                    </button>
                </form>
                <p>
                    Already have an account ?
                    <Link to="/login"> Sign in</Link>
                </p>
            </div>
        </>
    )
}

export default Register
