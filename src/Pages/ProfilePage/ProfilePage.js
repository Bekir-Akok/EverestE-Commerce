import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../Redux/Actions/action';
import Layout from '../../Layout/Layout';
import Account from '../../Components/Account/Account';
import InfoBox from '../../Components/InfoBox/InfoBox';
import './profilePage.scss';

const ProfilePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder())
    }, []);

    return (
        <Layout>
            <div className="profile-page">
                <Account />
                <InfoBox/>
            </div>
        </Layout>
    )
}

export default ProfilePage
