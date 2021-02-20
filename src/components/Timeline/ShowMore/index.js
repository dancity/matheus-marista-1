import React, { useState } from "react";

import { Container } from "./styles";

//Importando icones
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export default function ShowMore(props) {
  const [content, setContent] = useState(null);
  let newContent = null;

  function clickHandler() {
    if (content) {
      newContent = null;
    } else {
      switch (props.id) {
        case "chc":
          newContent = (
            <div>
              <h1>Responsabilidades:</h1>
              <ul>
                <li>
                  Conduzir o Recrutamento e Seleção de ponta a ponta com alto
                  número de vagas (Até 40 por mês);
                </li>
                <li>
                  Conduzir processos de Admissão de ponta a ponta e integração
                  com a folha de pagamentos;
                </li>
                <li>
                  Apresentar palestras corporativas de integração de novos
                  funcionários, normas de segurança, entre outras;
                </li>
                <li>
                  Realizar Desligamentos do Início ao fim e interface com órgãos
                  sindicais;
                </li>
                <li>Elaborar eventos corporativos e gerir a logística;</li>
                <li>
                  Elaborar conteúdo para comunicação interna e endomarketing;
                </li>
                <li>
                  Gerir do sistema de ponto e frequencia dos funcionários;
                </li>
                <li>
                  Elaborar relatórios e análises variadas úteis para a gestão;
                </li>
                <li>Gerir o pagamento de benefícios;</li>
                <li>
                  Servir de ponto focal para atendimento de funcionários e
                  fornecedores nas tratativas de Recursos Humanos;
                </li>
              </ul>
            </div>
          );
          break;
        default:
          newContent = null;
      }
    }

    setContent(newContent);
  }

  return (
    <Container>
      {content}
      <button onClick={clickHandler}>
        {content ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </button>
    </Container>
  );
}
