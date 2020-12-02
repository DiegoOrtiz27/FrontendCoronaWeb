import React from "react";

export default function Item({ row }) {
  return (
    <li className="item">
       <h4>{row.posicion}</h4>
      <div className="item__avatar">
        <img
          className="item__avatar__img"
          src={row.picture}
          alt={row.displayName}
        />
      </div>  
      <span className="item__name">{row.nombre}</span>

      <span className="item__score">{row.experiencia}</span>
    </li>
  );
}
