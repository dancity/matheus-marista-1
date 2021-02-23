import React, { useMemo } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

import { useMediaQuery } from 'react-responsive';

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
  // const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  const body = useMemo(() => {
    return (
      <>
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
      </>
    )
  }, [])

  return (
    <>
      {/* {
      isMobile && (
        <ContianerMobile>

        </ContianerMobile>
      )

      isTablet && (

      )
    } */}
      <Container name="header">
        {body}
      </Container>
    </>
  );
}
