import React, { Component } from "react";
import Table from "../Components/Table";
import { decorate, observable, computed, action, configure } from "mobx";
import Create from "../Components/Create";
configure({ enforceActions: "observed" });

class Store {
  data = [
    { name: "Jon", pay: 31 },
    { name: "Nilson", pay: 14 },
    { name: "Michal", pay: 82 },
    { name: "Nicko", pay: 12 },
  ];
  get topUser() {
    const maxSp = Math.max(...this.data.map(({ pay }) => pay));
    return this.data.find(({ pay, name }) => {
      if (maxSp === pay) {
        return name; 
      }
    });
  }
  get totalPayUsers() {
    return this.data.reduce((prevPay, { pay }) => (prevPay += pay), 0);
  }
  clearUser = () => {
    this.data = [];
  };
  addNewUser(user) {
    this.data.push(user);
  }
}

decorate(Store, {
  data: observable,
  topUser: computed,
  totalPayUsers: computed,
  clearUser: action,
  addNewUser: action,
});

const user = new Store();

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>User table</h1>
        <Create store={user} />
        <Table store={user} />
      </div>
    );
  }
}

export default App;
