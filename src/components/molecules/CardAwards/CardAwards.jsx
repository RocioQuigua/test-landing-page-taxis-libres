import React from "react";

export const CardAwards = ({ data }) => {
  return (
    <div className="card-awards">
      <div className="card-awards__content">
        <div className="card-awards__image">
          <img src={data.image} alt="imagen de premios" />
        </div>
        <h1>{data.title}</h1>
        <ul>
          <li>{data.list.money}</li>
          <li>{data.list.ibm}</li>
          <li>{data.list.phone}</li>
          <li>{data.list.travels}</li>
          <li>{data.list.platzi}</li>
          <li>{data.list.office}</li>
        </ul>
      </div>
    </div>
  );
};
