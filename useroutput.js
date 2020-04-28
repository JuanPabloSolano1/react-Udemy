import React from "react";
 
export const UserOutput = (props) => {
  return (
    <div>
      <button style={props.style} onClick={props.click}>Click Me!</button>
    </div>
  );
};
