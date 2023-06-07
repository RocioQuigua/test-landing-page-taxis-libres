import React from 'react'

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom'
import { Navbar } from '../Navbar/Navbar'

import logo from '../../../assets/image/logo_taxislibres.png';

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <Navbar />
      <ButtonCustom type='primary' name='Regístrate ahora' />
    </div>
  )
}
