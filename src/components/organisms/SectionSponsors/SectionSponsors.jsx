import React from "react";
import { CardSponsors } from "../../molecules/CardSponsors/CardSponsors";

export const SectionSponsors = () => {
  const sponsors = [
    {
      logo: require('../../../assets/image/logo-ibm.png')
    },
    {
      logo: require('../../../assets/image/logo-huawei.png')
    },
    {
      logo: require('../../../assets/image/logo-platzi.png')
    },
    {
      logo: require('../../../assets/image/logo-uniandes.png')
    },
    {
      logo: require('../../../assets/image/logo-unirosario.png')
    },
    {
      logo: require('../../../assets/image/logo-movilab.png')
    },
    {
      logo: require('../../../assets/image/logo-efecty.png')
    },
    {
      logo: require('../../../assets/image/logo-credibanco.png')
    },
    {
      logo: require('../../../assets/image/logo-sdm.png')
    },
  ]

  return (
    <div className="section-sponsors" id="sponsors">
      <div className="section-sponsors__content">
        <h1>Patrocinadores</h1>
        <p>
          Queremos agradecer sinceramente a cada uno de nuestros patrocinadores,
          seguidores y socios por unirse a nosotros en este evento innovador. Su
          apoyo y compromiso son esenciales para hacer de esta Hackathon un
          verdadero éxito.
        </p>
      </div>
      <div className="section-sponsors__list">
        {sponsors.map((item, index) => (
          <CardSponsors data={item} key={index}/>
        ))}
      </div>
    </div>
  );
};
