import React from "react";
import { CardAwards } from "../../molecules/CardAwards/CardAwards";

export const SectionAwards = () => {
  const awards = [
    {
      image: require("../../../assets/image/1-aspecto.png"),
      title: "Primer lugar",
      list: {
        money: "$5.000.000 COP",
        ibm: "$10.000 USD IBM Cloud",
        phone: " Un teléfono Huawei",
        travels: "50 viajes en taxi ($15.000 COP c/u)",
        platzi: "1 año de licencia Platzi",
        office: "6 meses de oficinas",
      },
    },
    {
      image: require("../../../assets/image/1-aspecto.png"),
      title: "Segundo lugar",
      list: {
        money: "$3.000.000 COP",
        phone: " Un teléfono Huawei",
        travels: "20 viajes en taxi ($15.000 COP c/u)",
        platzi: "6 meses de licencia Platzi",
        office: "3 meses de oficinas",
      },
    },
    {
      image: require("../../../assets/image/1-aspecto.png"),
      title: "Tercer lugar",
      list: {
        money: "$2.000.000 COP",
        phone: " Un teléfono Huawei",
        travels: "10 viajes en taxi ($15.000 COP c/u)",
        platzi: "6 meses de licencia Platzi",
      },
    },
  ];

  return (
    <div className="section-awards" id="awards">
      <div className="section-awards__content">
        <h1>¿Qué premios obtendrán los equipos que resulten ganadores?</h1>
        <p>
          Se seleccionarán y reconocerán tres equipos finalistas y el mejor
          talento individual. Los beneficios suman $25.000 USD. 
          Todos los participantes recibirán un certificado de participación y
          podrán acceder a ofertas de trabajo ofrecidas por la compañía.
        </p>
      </div>
      <div className="section-awards__awards">
        {awards.map((item, index) => (
          <CardAwards data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
