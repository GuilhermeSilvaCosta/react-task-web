import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from 'assets/gray-logo.svg';
import { signOut } from 'store/modules/auth/actions';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <strong>TODO List</strong>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignout}>Sair</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
