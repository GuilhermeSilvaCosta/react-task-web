import styled from 'styled-components';

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.48);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #FFF;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      &:focus {
        border: 1px solid #142B3B 
      }
    }

  }
`;
