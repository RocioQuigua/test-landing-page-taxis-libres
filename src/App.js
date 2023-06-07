import React from 'react'

import { Presentation } from './components/organisms/Presentation/Presentation'
import { SectionObjective } from './components/organisms/SectionObjective/SectionObjective'
import { Header } from './components/molecules/Header/Header'
import { SectionAwards } from './components/organisms/SectionAwards/SectionAwards';
import { SectionSponsors } from './components/organisms/SectionSponsors/SectionSponsors';
import { SectionRegister } from './components/organisms/SectionRegister/SectionRegister';
import { Footer } from './components/molecules/Footer/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <SectionObjective />
      <SectionAwards />
      <SectionSponsors />
      <SectionRegister />
      <Footer />
    </div>
  )
}
