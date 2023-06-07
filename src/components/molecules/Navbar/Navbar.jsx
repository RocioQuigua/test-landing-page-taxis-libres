import React from 'react';

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__container'>
        <li>
          <ButtonCustom type='default' name='Premios'/>
        </li>
        <li>
          <ButtonCustom type='default' name='Jurados'/>
        </li>
        <li>
          <ButtonCustom type='default' name='Cronograma'/>
        </li>
        <li>
          <ButtonCustom type='default' name='Preguntas frecuentes'/>
        </li>
        <li>
          <ButtonCustom type='default' name='Patrocinadores'/>
        </li>
      </ul>
    </nav>
  )
}