import React from 'react'

import logo from '../../../assets/image/logo-taxislibres-1.png'

import facebook from '../../../assets/image/icon-facebook.png'
import twitter from '../../../assets/image/icon-twitter.png'
import instagram from '../../../assets/image/icon-instagram.png'
import youtube from '../../../assets/image/icon-youtube.png'
import tiktok from '../../../assets/image/icon-tiktok.png'
import linkedin from '../../../assets/image/icon-linkedin.png'


import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom'

export const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer__content'>
        <img src={logo} alt='imagen de logo'/>
        <div className='footer__items'>
          <h1>Copyright © 2023 Test Rocio Quigua</h1>
          <ButtonCustom type='default' name='Aviso legal'/>
          <ButtonCustom type='default' name='Política de Tratamiento de Datos'/>
        </div>
        <div className='footer__social-media'>
          <ul>
            <li><img src={facebook} alt='imagen social media'/></li>
            <li><img src={twitter} alt='imagen social media'/></li>
            <li><img src={instagram} alt='imagen social media'/></li>
            <li><img src={youtube} alt='imagen social media'/></li>
            <li><img src={tiktok} alt='imagen social media'/></li>
            <li><img src={linkedin} alt='imagen social media'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
