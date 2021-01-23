import React from "react";

const StrictAccess = ({ user }) => (
  <main>
    {console.log(user)}
    <h1>Welcome {user}!</h1>
  </main>
);

export default StrictAccess;
