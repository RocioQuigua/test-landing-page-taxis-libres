import React from "react";

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';

export const SectionRegister = () => {
  return (
    <div className="section-register">
      <div className="section-register__content">
        <h1>Formulario de inscripción</h1>
        <p>
          ¿Te unes al reto? Si quieres vivir la experiencia y ser uno de
          nuestros participantes retados, completa el siguiente formulario.
        </p>
        <form className="section-register__form">
          <div className="section-register__information-personal">
            <label>Nombre completo<span>*</span></label>
            <input placeholder="Digite su nombre(s) y apellido(s)" />
          </div>
          <div className="section-register__information-personal">
            <label>Correo electrónico de contacto<span>*</span></label>
            <input placeholder="Digite su correo" />
          </div>
          <div className="section-register__information-personal">
            <label>Número de teléfono<span>*</span></label>
            <input placeholder="Digite solo números" />
          </div>
          <div className="section-register__information-personal">
            <label>Ciudad o País de residencia<span>*</span></label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Bogotá</option>
              <option value="">Cali</option>
              <option value="">Bucaramanga</option>
              <option value="">Medellín</option>
              <option value="">Cúcuta</option>
              <option value="">Manizales</option>
              <option value="">Canadá</option>
              <option value="">Reino Unido</option>
              <option value="">País</option>
            </select>
          </div>
          <div className="section-register__information-personal">
            <label>¿Has participado en hackathons anteriores?<span>*</span></label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="section-register__information-personal">
            <label>
              ¿Planeas participar en la hackathon individual o en equipo?<span>*</span>
            </label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Individual</option>
              <option value="">Equipo</option>
            </select>
          </div>
          <ButtonCustom type='dark' name='Enviar' />
        </form>
      </div>
    </div>
  );
};
