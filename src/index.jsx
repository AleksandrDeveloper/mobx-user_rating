import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { observable, computed } from "mobx";
import * as serviceWorker from './serviceWorker';

const userStore = new class User{
  @observable name = 'Jon Hill'
  @observable age = 22
  @computed get nickName(){
    return `${this.name}&${this.age}`
  }
}() 

userStore.plus = function(){
  this.age++
}
userStore.minus = function(){
  this.age--
}


ReactDOM.render(
    <App store={userStore} />,
  document.getElementById('root')
);


serviceWorker.unregister();
