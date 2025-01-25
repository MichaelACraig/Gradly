import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

// Used the following source: https://www.geeksforgeeks.org/how-to-build-a-react-app-with-user-authentication/
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <>
                <button className="btn btn-primary"
                    onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button>
                <br />
                <Profile />
            </>
        );
    }
};

export default LogoutButton;