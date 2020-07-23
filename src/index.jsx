import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { observable, computed } from "mobx";
import * as serviceWorker from './serviceWorker';

const userStore = observable({
  name:'Jon Hill',
  age:22,
  plus(){
    this.age++
  },
  minus(){
    this.age--
  },
  get nickName(){
    return `${this.name}&${this.age}`
  }
})

ReactDOM.render(
    <App store={userStore} />,
  document.getElementById('root')
);


serviceWorker.unregister();
