import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
// Used the following source: https://www.geeksforgeeks.org/how-to-build-a-react-app-with-user-authentication/
const Profile = () => {
    const {user} = useAuth0();
    return (
        <>
            <div className="container">
                <p className="userInfo" id="userInfo1">
                    Name: {user.name}</p>
                <p className="userInfo" id="userInfo2">
                    Email: {user.UFEmail}</p>
            </div>
        </>
    )
}
export default Profile;