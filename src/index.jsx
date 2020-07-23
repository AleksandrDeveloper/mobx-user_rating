import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { observable } from "mobx";
import * as serviceWorker from './serviceWorker';

const counterStore = observable({
  counter: 0,
  nameCouter: "Counter App",
});
counterStore.increment = function(){
  console.log(this);
  this.counter++;
}; 
counterStore.decrement = function(){
  this.counter--;
};

ReactDOM.render(
    <App state={counterStore} />,
  document.getElementById('root')
);


serviceWorker.unregister();
