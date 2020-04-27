import React from "react";

export const UserOutput = (props) => {
  return (
    <div>
      <button style={props.style} onClick={props.click}>Click Me!</button>
      <button style={props.loginstyle} onClick={props.login}>Login</button>
    </div>
  );
};
