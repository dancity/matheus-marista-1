import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "./styles";

//Importando botão de mostrar mais
import ShowMore from "./ShowMore/index";

//Importando Icones
import { MdSchool, MdWork } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { IoBookSharp, IoTrophy } from "react-icons/io5";

//Importando Imagens
import CaboFrio from "../../assets/images/caboFrio.jpg";
import FotoMarista from "../../assets/images/MaristaBrasilia.jpg";
import Bachareu from "../../assets/images/Bachareu.png";
import ChcLogo from "../../assets/images/CHCLogo.png";
import Airswift from "../../assets/images/Airswift.png";

export default function Timeline() {
  return (
    <Container>
      <h1>Minha História</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "#000" }} //Card com texto
          contentArrowStyle={{ borderRight: "7px solid  white" }} //Setinha card apontando pra bolinha
          dateClassName={"date"}
          date="1997" //data das paradas
          iconStyle={{ background: "darkslateblue", color: "#fff" }} //Cor da bolinha / Cor do ícone
          icon={<FaBaby />} //Icon: https://react-icons.github.io/react-icons/
        >
          <h3 className="vertical-timeline-element-title">Nascimento</h3>
          <h4 className="vertical-timeline-element-subtitle">Cabo Frio, RJ</h4>

          <img src={CaboFrio} alt="Cabo Frio" />
          <p>Uma infância tranquila e saudável em Cabo Frio</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2011"
          iconStyle={{ background: "goldenrod", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Formação no ensino fundamental
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Brasília, DF</h4>

          <img src={FotoMarista} alt="Marista" />
          <p>9º ano do Ensino Fundamental - Marista João Paulo II</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2014 - 2015"
          iconStyle={{ background: "goldenrod", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Aprovação no Vestibular e Ingresso na UERJ
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rio de Janeiro, RJ
          </h4>
          <p>
            Curso de Administração de Empresas na Universidade do Estado do Rio
            de Janeiro
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2014 - 2015"
          iconStyle={{ background: "goldenrod", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Entrega da Monografia - TCC em Administração
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rio de Janeiro, RJ
          </h4>
          <p>
            Tema do trabalho: A influência dos diversos tipos de enviesamento
            cognitivo no resultado de processos seletivos em empresas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2015 - 2019"
          iconStyle={{ background: "goldenrod", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bacharelado em Administração de Empresas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rio de Janeiro, RJ
          </h4>

          <img src={Bachareu} alt="Bacharéu em Administração" />
          <p>Universidade do Estado do Rio de Janeiro (UERJ)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2018 - 2020"
          iconStyle={{ background: "darkred", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">CHC Helicopter</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rio de Janeiro, RJ
          </h4>

          <img src={ChcLogo} alt="CHC Logo" />
          <p>Ultimo Cargo: Analista de Recursos Humanos</p>
          <ShowMore id="chc" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2018"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<IoTrophy />}
        >
          <h3 className="vertical-timeline-element-title">
            Reconhecimento Inovação
          </h3>
          <h4 className="vertical-timeline-element-subtitle">CHC Helicopter</h4>
          <p>
            Reconhecido através de votação entre os funcionários por criar
            soluções liderar a mudança.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2019"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<IoTrophy />}
        >
          <h3 className="vertical-timeline-element-title">
            Reconhecimento Projeto Bolt
          </h3>
          <h4 className="vertical-timeline-element-subtitle">CHC Helicopter</h4>
          <p>
            Reconhecido e premiado pela participação chave no Projeto Bolt, que
            tinha como objetivo iniciar as operações da CHC em Campos dos
            Goytacazes, RJ.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2019"
          iconStyle={{ background: "midnightblue", color: "#fff" }}
          icon={<IoBookSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Certificação em Excel e VBA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>Curso de Excel e VBA certificado pela plataforma Udemy</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2021 - Hoje"
          iconStyle={{ background: "midnightblue", color: "#fff" }}
          icon={<IoBookSharp />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript</h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>
            Início do Curso Avançado de JavaScript certificado pela plataforma
            Udemy
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"date"}
          date="2021 - Hoje"
          iconStyle={{ background: "darkred", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Airswift</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rio de Janeiro, RJ
          </h4>

          <img src={Airswift} alt="Airswift Logo" />
          <p>Ultimo Cargo: Strategic Resourcer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
