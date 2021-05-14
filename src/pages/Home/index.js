import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormTask from 'components/FormTask';
import { MdDelete } from 'react-icons/md';

import { tasksRequest } from 'store/modules/tasks/actions';
import { newTask, doneUndoneTaskRequest, deleteTaskRequest } from 'store/modules/task/actions';
import {
  Container, Task, Actions, TaskContent,
} from './styles';

function Home() {
  const dispatch = useDispatch();

  const { list: tasks } = useSelector(state => state.tasks);
  const { show } = useSelector(state => state.task);

  useEffect(() => {
    dispatch(tasksRequest());
  }, [dispatch]);

  function handleNewTask() {
    dispatch(newTask());
  }

  function handleClick(task) {
    dispatch(doneUndoneTaskRequest(task));
  }

  function handleDelete(task) {
    dispatch(deleteTaskRequest(task));
  }

  return (
    <Container>
      {!show && <button type="button" onClick={handleNewTask}>Nova Tarefa</button>}
      {!!show && <FormTask />}
      <ul>
        {tasks.map(task => (
          <Task key={task._id} done={task.done}>
            <TaskContent onClick={() => handleClick(task)}>
              <input type="checkbox" name="done" checked={task.done} readOnly />
              <strong>{task.title}</strong>
            </TaskContent>
            <Actions>
              <MdDelete onClick={() => handleDelete(task)} color="#f75791cf" size={20} />
            </Actions>
          </Task>
        ))}
      </ul>
    </Container>

  );
}

export default Home;
