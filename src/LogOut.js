import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogOut() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: `${window.location.origin}/login` });

  };

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogOut;
