import React from "react";

import Uerj from "../../assets/images/uerj.png";

import { Container, Post } from "./styles";

export default function Section2() {
  return (
    <Container name="section2">
      <div>
        <img src={Uerj} alt="Uerj"></img>
        <Post>
          <h1>
            Formação que prepara para <span>desafios reais.</span>
          </h1>
          <p>
            Com seus 44 anos de tradição, a Faculdade de Administração e
            Finanças da Universidade do Estado do Rio de Janeiro tem por
            objetivo preparar os estudantes para solucionar problemas no campo
            administrativo com ênfase no processo de tomada de decisões em
            empresas de qualquer porte. A grade curricular ampla contempla
            disciplinas que vão de gestão de pessoas à economia e dá aos alunos
            a segurança de ter os conhecimentos teóricos necessários para
            enfrentar os desafios práticos do dia-a-dia.
          </p>
          <p>
            Nos 5 desafiantes anos de formação, a faculdade pública me
            proporcionou o contato com as contradiçoes inerentes à nossa
            sociedade. Conheci pessoas de vários cantos do Brasil, ricos,
            pobres, negros e brancos que me ensinaram a respeitar ainda mais
            essas diferenças e trabalhar para um mundo com mais igualdade de
            oportunidades.
          </p>
          <p>
            Meu trabalho de conclusão de curso foi uma monografia sobre Vieses
            Cognitivos no processo de recrutamento e seleção. Nele discuti sobre
            a forma que nosso cérebro têm de afetar negativamente nossa tomada
            de decisão por meio de associações cognitivas enganosas e como isso
            poderia afetar o trabalho de um recrutador.
          </p>
          <p>
            Agora, meu próximo desafio é um curso de Pós Graduação online em
            Business Leadership na University of Queensland que fica na
            Austrália. O curso começará em breve e estou muito ansioso para
            aprender ainda mais e me tornar um lider mais competente e
            inspirador!
          </p>
        </Post>
      </div>
    </Container>
  );
}
