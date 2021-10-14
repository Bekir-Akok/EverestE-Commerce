import React from 'react';
import LoginHeader from '../Components/LoginHeader/LoginHeader';
import LoginFooter from '../Components/LoginFooter/LoginFooter';

const LoginLayout = ({ children }) => {
    return (
        <>
            <LoginHeader />
                <main>{children}</main>
            <LoginFooter />
        </>
    )
}

export default LoginLayout
