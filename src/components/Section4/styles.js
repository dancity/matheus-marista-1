import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222222;
  align-items: center;
  justify-content: center;
  padding: 25px;
  min-height: 100vh;
  color: whitesmoke;

  /*Shadow*/
  box-shadow: 0px 2px 2px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.5);

  > div {
    max-width: 100%;
    padding: 115px 180px;
  }

  h1 {
    font-family: Raleway-Thin;
    font-size: 64px;
    margin: 10px;
    margin-bottom: 28px;
  }

  p {
    font-family: Raleway-Medium;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8;
    text-indent: 50px;
    margin-bottom: 30px;
  }

  p + p + p {
    text-indent: 0px;
    margin-bottom: 5px;
  }

  span {
    color: #d24a00;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;

  p {
    text-indent: 0;
    background-color: #858585;
    border-radius: 28px;
    padding: 2px 10px 2px 10px;
    margin: 5px;
  }

  p:first-child {
    margin: 5px 0px;
  }
`;
