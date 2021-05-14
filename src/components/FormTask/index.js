import React from 'react';
import { Form } from '@unform/web';
import Input from 'components/Input';
import { useDispatch, useSelector } from 'react-redux';

import { cancelTask, saveTaskRequest } from 'store/modules/task/actions';
import { Content } from './styles';

function FormTask() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.task);

  function handleCancel() {
    dispatch(cancelTask());
  }

  function handleSubmit({ title }) {
    dispatch(saveTaskRequest(title));
  }

  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <Input name="title" type="text" placeholder="Descrição da tarefa" />

        <button type="submit" disabled={!!loading}>{!loading ? 'Salvar' : 'Salvando...'}</button>
        <button style={{ background: '#f75791cf' }} type="button" onClick={handleCancel} disabled={!!loading}>Cancelar</button>
      </Form>
    </Content>
  );
}

export default FormTask;
