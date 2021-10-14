import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import LoginLayout from '../../Layout/LoginLayout';

const LoginPage = () => {
    return (
        <>
            <LoginLayout>
                <SignIn />
            </LoginLayout>
        </>
    )
}

export default LoginPage
