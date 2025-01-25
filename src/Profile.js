import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogOut from './LogOut.js';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <>
            <div className="container">
                {user && (
                    <>
                        <p className="userInfo" id="userInfo1">
                            Name: {user.name}
                        </p>
                        <p className="userInfo" id="userInfo2">
                            Email: {user.email}
                        </p>
                        <img
                            src={user.picture}
                            alt="User Profile"
                            className="profile-picture"
                            style={{
                                borderRadius: '50%',
                                width: '150px',
                                height: '150px',
                                marginTop: '10px',
                            }}
                        />
                    </>
                )}
            </div>
            <div style={{ marginTop: '20px' }}>
                <LogOut />
            </div>
        </>
    );
};

export default Profile;