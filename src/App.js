import React from 'react'
import { Presentation } from './components/organisms/Presentation/Presentation'
import { SectionObjective } from './components/organisms/SectionObjective/SectionObjective'
import { Header } from './components/molecules/Header/Header'

export const App = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <SectionObjective />
    </div>
  )
}
