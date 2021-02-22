import React from "react";

//Estilo
import { Container, Navigation } from "./styles";

//Icones
import { FaHome, FaClock } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";

//Scroll
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Navbar() {
  return (
    <Container>
      <Navigation>
        <FaHome onClick={() => scroller.scrollTo("header", { smooth: true })} />
        <VscCircleFilled
          onClick={() => scroller.scrollTo("section1", { smooth: true })}
        />
        <VscCircleFilled
          onClick={() => scroller.scrollTo("section2", { smooth: true })}
        />
        <VscCircleFilled
          onClick={() => scroller.scrollTo("section3", { smooth: true })}
        />
        <VscCircleFilled
          onClick={() => scroller.scrollTo("section4", { smooth: true })}
        />
        <VscCircleFilled
          onClick={() => scroller.scrollTo("section5", { smooth: true })}
        />
        <VscCircleFilled
          onClick={() => scroller.scrollTo("section6", { smooth: true })}
        />
        <FaClock
          onClick={() => scroller.scrollTo("timeline", { smooth: true })}
        />
      </Navigation>
    </Container>
  );
}

export default Navbar;
