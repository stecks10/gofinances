import React from 'react';

import { Container, Category, Icon } from './styles';

interface Props {
  tilte: string;
}

export function CategorySelect({ tilte }: Props) {
  return (
    <Container>
      <Category>{tilte}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
