import React from "react";
import { render } from "react-dom";
import { UserOutput } from "./useroutput";
import { UserInput } from "./userinput";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      persons:[
      { id: '0', name: 'Max', age: 28 },
      { id: '1', name: 'Manu', age: 29 },
      { id: '2', name: 'Stephanie', age: 26 }
      ]
    }
    checkState: false
    this.clickToggle = this.clickToggle.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
    this.changeEntry = this.changeEntry.bind(this)
  }

  clickToggle = () => {
    const toggle = this.state.checkState
    this.setState({
      checkState: !toggle
    })
  }

  deleteEntry = (index) =>{
    const test = [...this.state.persons]
    test.splice(index,1)
    this.setState({
      persons: test
    })
  }

changeEntry = (event,id) =>{
 const personIndex = this.state.persons.findIndex(p =>{
   return p.id === id
 })
 const person = [...this.state.persons]
 person.name = event.target.value

 const test = [...this.state.persons]
 test[personIndex] = person

 this.setState({
   persons: test
 })
}

  render(){
    const style ={
      textAlign: "center",
    }

    const personStyle ={
      border:"solid",
      paddingBottom:"20px",
      marginTop:"20px"
    }
    const styleButton = {
      backgroundColor: "Black",
      color: "white",
      
    }
   
   let check = null
   if(this.state.checkState){
      check = (
        <div>
         {this.state.persons.map((element,index) =>{
           return (
             <div style={personStyle}>
             <UserInput key={index} name={element.name} age={element.age}change={this.changeEntry.bind(this,event, element.id)}/>
             <button style={styleButton} onClick={this.deleteEntry.bind(this,index)}>Remove Entry!</button>
             </div>
           )
         })}
        </div>
      )
     styleButton.backgroundColor = "red"
    }

    return (
      <div style={style}>
       <UserOutput style={styleButton} click={this.clickToggle}/>
       {check}
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
