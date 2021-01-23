import React from "react";

const Login = (props) => (
  <form action="">
    <input type="text" name="login" id="login" onChange={props.handleName} />
    <input
      type="password"
      name="password"
      id="password"
      onChange={props.handlePassword}
    />
    <button onClick={props.handleLogin}>Login</button>
  </form>
);

export default Login;
