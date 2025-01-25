import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Used the following source: https://www.geeksforgeeks.org/how-to-build-a-react-app-with-user-authentication/
const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return (
            <>
                <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
                    Log In
                </button>
            </>
        );
    }
};

export default Login;
