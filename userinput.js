import React, { Component } from "react";

export class UserInput extends React.Component{
  constructor(props){
    super(props)
    this.textInput = React.createRef()
  }
  componentDidMount(){
    this.textInput.current.focus()
  }
  render(){
    return(
      <div>  
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <input ref={this.textInput} onChange={this.props.change} value={this.props.name}className="Input" />
      </div>
    )
  }
};
