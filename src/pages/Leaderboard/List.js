import React from "react";
import Item from "./Item";

export default function List({ data }) {
  return (
    <ul className="item-wrapper">
      <div className="h2-group">
        <h2>Ranking</h2>
        <h2>Nombre</h2>
        <h2>Puntaje</h2>
      </div>
      {data.map(row => (
        <Item row={row} key={row.userID} />
      ))}
    </ul>
  );
}
