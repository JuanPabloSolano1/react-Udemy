import React from "react";

export const UserOutput = (props) => {
  return (
    <div>
      <p>Click the Button to Toggle!</p>
      <button style={props.style} onClick={props.click}>Click Me!</button>
    </div>
  );
};