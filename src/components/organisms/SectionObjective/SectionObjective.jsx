import React from "react";
import { CardObjective } from "../../molecules/CardObjective/CardObjective";

export const SectionObjective = () => {
  const objectives = [
    {
      title: "1. Aspecto",
      subtitle: "Transporte aliado para la seguridad en las ciudades.",
      image: require("../../../assets/image/1-aspecto.png"),
      type: "left",
    },
    {
      title: "2. Aspecto",
      subtitle:
        "Soluciones que incrementen las utilidades a los conductores y propietarios.",
      image: require("../../../assets/image/2-aspecto.png"),
      type: "right",
    },
    {
      title: "3. Aspecto",
      subtitle:
        "Soluciones donde los taxis aporten a la optimización de la logística en ciudades inteligentes.",
      image: require("../../../assets/image/3-aspecto.png"),
      type: "left",
    },
    {
      title: "4. Aspecto",
      subtitle:
        "Alternativas para aportar a la conservación del medio ambiente.",
      image: require("../../../assets/image/4-aspecto.png"),
      type: "right",
    },
    {
      title: "5. Aspecto",
      subtitle:
        "Soluciones que mejoren las experiencias para usuarios y conductores por medio de analítica predictiva.",
      image: require("../../../assets/image/5-aspecto.png"),
      type: "left",
    },
  ];

  return (
    <div className="section-objective">
      <div className="section-objective__content">
        <div className="section-objective__text">
          <h1>
            ¿Cuál es el propósito principal?
          </h1>
          <p>
            Deseamos crear entornos creativos donde los colombianos
            <br />
            puedan desarrollar ideas y mostrar su talento al abordar
            <br />
            cinco aspectos clave relacionados con la movilidad,
            <br />
            la tecnología y la sostenibilidad:
          </p>
        </div>
        <div className="section-objective__objectives">
          {objectives.map((item, index) => (
            <CardObjective data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
