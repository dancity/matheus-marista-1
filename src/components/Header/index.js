import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri'

import Cards from '../../assets/images/cardMatch.png';
import Button from '../../assets/images/buttonMatch.png';

import { Container, CardsContainer, ButtonContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <CardsContainer>
        <img src={Cards}></img>
      </CardsContainer>
      <ButtonContainer>
        <img src={Button}></img>
      </ButtonContainer>

      <h1>Arrasta pra cima!</h1>
      <RiArrowDownSLine />
    </Container >
  );
}
