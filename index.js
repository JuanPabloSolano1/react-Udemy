import React from "react";
import { render } from "react-dom";
import { UserOutput } from "./useroutput";
import { UserInput } from "./userinput";
import styled from 'styled-components';



 const StyleDiv = styled.div`
     text-align: center;
     width: 400px;
     margin: 0 auto;
    `

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      persons:[
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      checkState: false
    }
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


const person = {
      ...this.state.persons[personIndex]
};
console.log(event.target.value)
 person.name = event.target.value
 console.log(person)

 const persons = [...this.state.persons]
 persons[personIndex] = person

 this.setState({
   persons: persons
 })
}

  render(){
    const style ={
      textAlign: "center",
      width: "400px",
      margin: "0 auto"
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

    let classes = []
    if(this.state.persons.length <= 2){
      classes.push("red")
    }
    if(this.state.persons.length <= 1){
      classes.push("bold")
    }
   
   let check = null
   if(this.state.checkState){
      check = (
        <div>
         {this.state.persons.map((element,index) =>{
           return (
             <div style={personStyle}>
             <UserInput key={element.id} value={this.state.persons} name={element.name} age={element.age} change={(event) => this.changeEntry(event, element.id)}/>
             <button style={styleButton} onClick={this.deleteEntry.bind(this,index)}>Remove Entry!</button>
             </div>
           )
         })}
        </div>
      )
     styleButton.backgroundColor = "red"
    }

    return (
    <StyleDiv>
      <p className={classes.join(" ")}>Click the Button to Toggle!</p>
       <UserOutput classNametext={classes.join(" ")} style={styleButton} click={this.clickToggle}/>
       {check}
    </StyleDiv>
    )
  }
}

render(<App />, document.getElementById("root"));
