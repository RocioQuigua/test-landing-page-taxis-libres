import React from 'react'

import logo from '../../../assets/image/logo-taxislibres-1.png'

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom'

export const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer__content'>
        <img src={logo} alt='imagen de logo'/>
        <div>
          <ButtonCustom type='default' name='Aviso legal página web'/>
          <ButtonCustom type='default' name='Política de Tratamiento de Datos'/>
        </div>
        <div>
        <h1>Copyright © 2023 Test Rocio Quigua</h1>
        </div>
      </div>
    </div>
  )
}
