import React from "react";

import { ButtonCustom } from "../../atoms/ButtonCustom/ButtonCustom";
import { Header } from "../../molecules/Header/Header";

import logo from "../../../assets/image/logo_taxis-libres.png";

export const Presentation = () => {
  return (
    <div className="presentation">
      <Header />
      <div className="presentation__container">
        <div className="presentation__logo">
          <img src={logo} />
        </div>
        <div className="presentation__description">
          <h1>Hackathon Taxis Libres</h1>
          <h2>Junio 7, 2023 - Junio 9, 2023</h2>
          <p>
            Es una competencia creativa y colaborativa <br/> 
            en la que los participantes trabajan juntos para <br/>
            desarrollar soluciones innovadoras que impulsen el <br/>
            progreso y la mejora continua sobre movilidad en el país.
          </p>
          <ButtonCustom type="primary" name="Regístrate" />
        </div>
      </div>
    </div>
  );
};
