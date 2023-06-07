import React from "react";

export const CardObjective = ({ data }) => {
  return (
    <div className={`card-objective card-objective--${data.type}`}>
      <div className="card-objective__content">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>
      <div className="card-objective__image">
        <img src={data.image} alt="imagen de taxis" />
      </div>
    </div>
  );
};
