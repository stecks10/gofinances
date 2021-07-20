import React from 'react';

import {
  Container,
  Header,
  UserInfo,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/80498486?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Vitor</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
}
