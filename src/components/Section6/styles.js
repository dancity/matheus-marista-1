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

  span {
    color: #d24a00;
  }

  p,
  h2 {
    font-family: Raleway-Medium;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8;
    text-indent: 50px;
    margin-bottom: 30px;
  }

  h2 {
    color: #b8b8b8;
    font-family: Raleway-Thin;
    text-indent: 0;
    text-align: right;
  }

  hr {
    border: 1px solid #b8b8b8;
    opacity: 0.1;
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  img {
    border: 2px solid #b8b8b8;
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
    margin-right: 50px;
  }
`;
