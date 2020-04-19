import React, { Component } from "react";

export class UserInput extends React.Component{
  render(){
    return(
      <div>  
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <input onChange={this.props.change} value={this.props.name}className="Input" />
      </div>
    )
  }
};
