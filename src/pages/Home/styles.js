import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 8px;

  display: flex;
  flex-direction: column;

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #1D3E57;
    font-weight: bold;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: backgound 0.2s;

    &:hover {
      background: ${darken(0.03, '#1D3E57')}
    }

  }
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  input {
    margin-right: 8px;
    cursor: pointer;
  }

  strong {
    color: #7E7E7E;
    font-size: 16px;
    text-decoration: ${props => (props.done ? 'line-through' : 'none')}
  }
`;

export const TaskContent = styled.div`
  display: flex;
  flex: 1;
`;

export const Actions = styled.div`
  svg {
    cursor: pointer;
  }
`;
