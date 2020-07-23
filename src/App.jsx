import React, { Component } from "react";
import "./App.css";
// наблидаемое сотояние
import { observable } from "mobx";
// наблюдатель
import { observer } from "mobx-react";



@observer
class App extends Component {
  increment=()=>{
    console.log(this);
    this.props.state.increment() 
  }
  decrement=()=>{this.props.state.decrement()}

  render() {
    const { counter, nameCouter,increment } = this.props.state;
    return (
      <div>
        <h1>{counter} </h1>
        <h2>
          <strong>{nameCouter} </strong>
        </h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>+</button>
      </div>
    ); 
  }
}

export default App;
