import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { auth } from '../../firebase/firebase';
import './infoBox.scss';

const InfoBox = () => {

    const user = useSelector(state => state.userReducer.user);
    let history = useHistory();

    const deleteAccount = () => {
        const activeUser = auth.currentUser
        activeUser.delete()
            .then(() => {
                alert('Your account successfully deleted');
                history.push('/')
            })
            .catch((err) => {
                alert('Error deleting user:', err)
                history.push('/')
            })
    }

    return (
        <div className="info-container">
            <h3>Hi {user.displayName}</h3>
            <div className="info-box">
                <div className="info-title">
                    <h4>INFO & PREFERENCES</h4>
                </div>
                <div className="info-user">
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                    <p  id="p"
                        onClick={() => deleteAccount()}>
                        Delete your account.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoBox
