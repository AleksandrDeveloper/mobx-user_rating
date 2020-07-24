import React from "react";

export default function Row({ user: { name, pay } }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{pay}</td>
    </tr>
  );
}
