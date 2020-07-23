import React, { Component } from "react";
import "./App.css";
// наблидаемое сотояние
//import { observable } from "mobx";
// наблюдатель
import { observer } from "mobx-react";



@observer
class App extends Component {
  increment=()=>{
    this.props.store.plus()
  }
  decrement=()=>{
    this.props.store.minus()
  }
  render() {
    return (
      <div>
        <h1>{this.props.store.name} </h1>
        <h2>{this.props.store.nickName} </h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>+</button>
      </div>
    ); 
  }
}

export default App;
