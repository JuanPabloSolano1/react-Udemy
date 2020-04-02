import React from "react";

export const UserInput = (props) => {
  return(
  <div>  
    <p>{props.name}</p>
    <p>{props.age}</p>
    <input onChange={props.change} className="Input" />
  </div>
  )
};
