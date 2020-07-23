import React,{Component} from 'react';
import './App.css';
// наблидаемое сотояние 
import {observable} from 'mobx';
// наблюдатель 
import {observer} from 'mobx-react'

@observer class App extends Component {
  @observable counter = 0

  plus=()=>{this.counter++}
  minus=()=>{this.counter--}

  render() { 
    return (
      <div>
        <h1>{this.counter} </h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>+</button> 
      </div>
    );
  }
}
 
export default App;
