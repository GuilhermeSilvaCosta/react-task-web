import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding:0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 64px;
      width: 64px;
    }

    strong {
      white-space: nowrap;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #0f4c75;
      white-space: nowrap;
    }

    button {
      margin-top: 2px;
      font-size: 12px;
      color: #1A364C;
      background: none;
      border: none;
    }

  }
`;
