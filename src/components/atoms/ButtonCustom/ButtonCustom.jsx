import React from 'react';
import PropTypes from 'prop-types';

export const ButtonCustom = ({name, type, ...props}) => {
  return (
    <button className={`button-custom button-custom--${type}`} {...props}>{name}</button>
  )
}

ButtonCustom.protoTypes = {
  name: PropTypes.string,
};