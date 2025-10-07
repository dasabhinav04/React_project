import React, { Component } from 'react'

export default class Class1 extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
       
    }
     incre=()=>{
            this.setState({count:this.state.count+1})
        }
  render() {
    return (
      <div>Classes
        <h1>Hello from Class Component</h1>
        <p>count:{this.state.count}</p>
        <button onClick={this.incre}>Click here</button>
      </div>
    )
  }
}
