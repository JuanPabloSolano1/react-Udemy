import React from "react";

export const UserInput = (props) => {
  return(
  <div>  
    <p>{props.name}</p>
    <p>{props.age}</p>
    <input onChange={props.change} value={props.name}className="Input" />
  </div>
  )
};
