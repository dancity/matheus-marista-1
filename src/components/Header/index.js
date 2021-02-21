import React from "react";

import { RiArrowDownSLine } from "react-icons/ri";

import Cards from "../../assets/images/cardMatch.png";
import Button from "../../assets/images/buttonMatch.png";

import { Container, CardsContainer, ButtonContainer } from "./styles";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Header() {
  return (
    <Container>
      <h1>Matheus Rangel</h1>
      <h2>
        O próximo trainee do <span>Marista</span>
      </h2>
      <CardsContainer>
        <img src={Cards} alt="Cards"></img>
      </CardsContainer>
      <ButtonContainer>
        <img src={Button} alt="Button"></img>
      </ButtonContainer>

      <h3>Arrasta pra cima!</h3>
      <RiArrowDownSLine
        onClick={() => scroller.scrollTo("section1", { smooth: true })}
      />
    </Container>
  );
}
