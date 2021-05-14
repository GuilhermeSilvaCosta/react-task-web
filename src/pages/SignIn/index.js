import React from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input';
import { signInRequest } from 'store/modules/auth/actions';

import logo from 'assets/logo.svg';

function SignIn() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Tasks" style={{ height: '64px', width: '64px' }} />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">{!loading ? 'Acessar' : 'Acessando...'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}

export default SignIn;
