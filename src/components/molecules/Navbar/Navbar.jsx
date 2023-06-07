import React from 'react';

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__container'>
        <li>
          <a  href='#objectives'>
            <ButtonCustom type='default' name='Propósito' />
          </a>
        </li>
        <li>
          <a href='#awards'>
          <ButtonCustom type='default' name='Premios' />
          </a>
        </li>
        <li>
          <a href='#sponsors'>
            <ButtonCustom type='default' name='Patrocinadores' />
          </a>
        </li>
        <li>
          <a href='#register'>
            <ButtonCustom type='default' name='Formulario' />
          </a>
        </li>
      </ul>
    </nav>
  )
}
