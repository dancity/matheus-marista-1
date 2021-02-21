import React from "react";

import { Container, ThanksContainer, InfosContainer } from "./styles";

export default function Footer() {
  return (
    <Container>
      <ThanksContainer>
        <h1>Obrigado por fazer parte dessa história!</h1>
      </ThanksContainer>
      <InfosContainer>
        <p>Email: matheusleaorangel@gmail.com</p>
        <p>Telefone: (21) 98340-9000</p>
        <a
          href="https://www.linkedin.com/in/matheusleaorangel/"
          target="_blank"
        >
          Meu Linkedin
        </a>
      </InfosContainer>
    </Container>
  );
}
