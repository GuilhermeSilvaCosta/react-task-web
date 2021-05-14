import React from 'react';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import logo from 'assets/logo.svg';

import { signUpRequest } from 'store/modules/auth/actions';

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Tasks" style={{ height: '64px', width: '64px' }} />

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
