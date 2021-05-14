import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <input
      name={name}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
