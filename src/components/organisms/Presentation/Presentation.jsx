import React from "react";

import { ButtonCustom } from "../../atoms/ButtonCustom/ButtonCustom";

import logo from "../../../assets/image/taxis.svg";

export const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation__content">
        <div className="presentation__container">
          <div className="presentation__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="presentation__description">
            <div>
              <h1>Hackathon Taxis Libres</h1>
              <h2>Junio 7, 2023 - Junio 9, 2023</h2>
              <h3>Lugar: Sede Normandia Calle 55 # 72-08</h3>
            </div>
            <p>
              Es una competencia creativa y colaborativa
              en la que los participantes trabajan juntos para
              desarrollar soluciones innovadoras que impulsen el
              progreso y la mejora continua sobre movilidad en el país.
            </p>
            <ButtonCustom type="primary" name="Regístrate" />
          </div>
        </div>

      </div>
    </div>
  );
};
