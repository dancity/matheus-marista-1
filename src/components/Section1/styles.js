import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  min-height: 100vh;
  color: #222222;

  div {
    max-width: 100%;
    padding: 115px 180px;
  }

  h1 {
    font-family: Raleway-Thin;
    font-size: 64px;
    margin: 10px;
    margin-bottom: 28px;
  }

  h2 {
    font-family: Raleway-Thin;
    font-size: 20px;
    margin-bottom: 30px;
    text-align: center;
    line-height: 1.8;
  }

  p {
    font-family: Raleway-Medium;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8;
    text-indent: 50px;
    margin-bottom: 30px;
  }

  p:last-child {
    text-indent: 0;
    color: #b8b8b8;
  }

  span {
    color: #d24a00;
  }
`;
