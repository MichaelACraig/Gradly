import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function MyInformation() {
  const { logout } = useAuth0();

  const handleLogout = () => {

    logout({
      logoutParams: {
        returnTo: `${window.location.origin}/relogin`
      },
    });
  };

  return (
    <div>
      <h1>My Information</h1>
      <form>
        {/* personal info fields */}
        <label className="form-information">First Name:</label>
        <input type="text" />
        <br />
        <label className="form-information">Last Name:</label>
        <input type="text" />
        <br />
        <label className="form-information">Phone Number:</label>
        <input type="text" />
        <br />
        <label className="form-information">UFL Email:</label>
        <input type="text" />
        <br/>
        <button type="submit">Save</button>
        <br/>
        <br/>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
        <br/>
      </form>
    </div>
  );
}

export default MyInformation;
