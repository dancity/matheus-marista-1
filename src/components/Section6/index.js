import React from "react";

import { Container, Quote } from "./styles";

//importando imagens
import Cilene from "../../assets/images/cilene.jpg";
import Andre from "../../assets/images/andre.jpg";

export default function Section6() {
  return (
    <Container>
      <div>
        <h1>
          <span>Recomendado</span>
          <br />
          por seus pares.
        </h1>
        <Quote>
          <img src={Cilene} alt="Cilene" />
          <p>
            I had the opportunity of having Matheus on my team at CHC. He is
            focused on results and has a high sense of teamwork. His biggest
            skills are innovation and commitment. He is always willing to learn
            new things and propose his ideas on a daily basis.
          </p>
        </Quote>
        <h2>- Cilene Viana</h2>
        <hr />
        <Quote>
          <img src={Andre} alt="Andre" />
          <p>
            Matheus é um ótimo profissional, comprometido e responsável, sempre
            disposto a ajudar! Éramos cliente interno um do outro, eu
            funcionário e ele RH, eu Compras e ele solicitante, nossa interação
            sempre funcionou muito bem, por conta da boa comunicação e respeito
            com o trabalho do outro, características visíveis do Matheus. Tive a
            oportunidade de conhecê-lo no seu período de estágio e trabalhamos
            juntos até ele se tornar analista, ver o desenvolvimento dele ao
            longo de todo esse período só reforçou a minha idéia e consciência
            do quanto ele agregou positivamente a CHC, bem como o quanto pode
            agregar positivamente a qualquer empresa. Recomendo com certeza!!!
          </p>
        </Quote>
        <h2>- André Souza</h2>
        <hr />
      </div>
    </Container>
  );
}
