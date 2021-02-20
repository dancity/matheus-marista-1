import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;

  .date {
    font-family: Helvetica, sans-serif;
  }

  h1 {
    font-family: Raleway-Medium;
    margin: 25px 0;
    color: #d24a00;
  }

  h3 {
    font-family: Raleway-Medium;
  }

  h4 {
    font-family: Raleway-Thin;
  }

  p {
    font-family: Raleway-Medium;
  }

  img {
    margin-top: 1em;
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
  }

  //Descrição da imagem
  img + p {
    text-align: center;
  }
`;
