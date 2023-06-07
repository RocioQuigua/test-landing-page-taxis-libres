import React from "react";

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';

export const SectionRegister = () => {
  return (
    <div className="section-register" id='register'>
      <div className="section-register__content">
          <h1>Formulario de inscripción</h1>
          <p>
            ¿Te unes al reto? Si quieres vivir la experiencia y ser uno de
            nuestros participantes retados, completa el siguiente formulario:
          </p>
        <form className="section-register__form">
          <div className="section-register__information-personal">
            <label>Nombre completo</label>
            <input placeholder="Digite su nombre(s) y apellido(s)" />
          </div>
          <div className="section-register__information-personal">
            <label>Correo electrónico de contacto</label>
            <input placeholder="Digite su correo" />
          </div>
          <div className="section-register__information-personal">
            <label>Número de teléfono</label>
            <input placeholder="Digite solo números" />
          </div>
          <div className="section-register__information-personal">
            <label>Ciudad o País de residencia</label>
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
            <label>¿Tienes experiencia en desarrollo de software?</label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="section-register__information-personal">
            <label>¿Has participado en hackathons anteriores?</label>
            <select>
            <option value="">Seleccione</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="section-register__information-personal">
            <label>
              ¿Tienes experiencia específica en el desarrollo de aplicaciones
              relacionadas con el sector de los taxis o el transporte público?
            </label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="section-register__information-personal">
            <label>
              ¿Planeasparticipar en la hackathon individual o en equipo?
            </label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Individual</option>
              <option value="">Equipo</option>
            </select>
          </div>
          <div className="section-register__information-personal">
            <label>
              Describe brevemente la idea o el problema que te gustaría abordar
              durante la hackathon
            </label>
            <input placeholder="Cuentanos cuál" />
          </div>
          <div className="section-register__information-personal">
            <label>
              ¿Qué tecnologías, herramientas o lenguajes de programación tienes
              experiencia utilizando?
            </label>
            <select>
              <option value="">Seleccione</option>
              <option value="">JavaScript</option>
              <option value="">React.js</option>
              <option value="">MySQL</option>
              <option value="">Otro</option>
            </select>
            <input placeholder="Otro, digitalo aquí" />
          </div>
          <div className="section-register__information-personal">
            <label>¿Cómo te enteraste de esta hackathon?</label>
            <select>
              <option value="">Seleccione</option>
              <option value="">Amigo</option>
              <option value="">Redes sociales</option>
              <option value="">Sitio web</option>
              <option value="">Medios de comunicación</option>
              <option value="">Otro</option>
            </select>
            <input placeholder="Otro, digita cuál" />
          </div>
          <ButtonCustom type='default' name='Enviar'/>
        </form>
      </div>
    </div>
  );
};
