import React from "react";
import Row from "./Row";
import { observer } from "mobx-react";

@observer class Table extends React.Component {
  render() { 
    const {store} = this.props;
    console.log(store.data)
    return (
      <table>
      <thead>
        <tr>
          <td>Name:</td>
          <td>SP:</td>
        </tr>
      </thead>
      <tbody>
        {store.data.map((user, index) => (
          <Row key={index} user={user} />
        ))}
      </tbody>
      <tfoot> 
        <tr>
          <td>Team Pay:</td>
          <td>{store.totalPayUsers}</td>
        </tr>
        <tr> 
          <td>Top User:</td>
          <td>{store.topUser ? store.topUser.name : ""}</td>
        </tr>
      </tfoot>
    </table>
    );
  }
}
 
export default Table;