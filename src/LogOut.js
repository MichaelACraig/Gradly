import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Used the following source: https://www.geeksforgeeks.org/how-to-build-a-react-app-with-user-authentication/
const ProfilePage = () => {
    const { user, logout, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div className="container">
            <div className="profile-info">
                <p className="userInfo" id="userInfo1">Name: {user?.name}</p>
                <p className="userInfo" id="userInfo2">Email: {user?.email}</p>
            </div>
            <div className="logout-section" style={{ marginTop: "20px" }}>
                <button
                    className="btn btn-primary"
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;