import React from "react";

function MyInformation() {
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
      </form>
    </div>
  );
}

export default MyInformation;
