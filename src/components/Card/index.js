import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1"/>
      </header>
      <p>Fazer atividade</p>
      <img src="https://avatars0.githubusercontent.com/u/19808262?s=220&v=4" alt="avatar"/>
    </Container>
  );
}
