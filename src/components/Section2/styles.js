import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222222;
  align-items: center;
  padding: 25px;
  min-height: 100vh;
  color: whitesmoke;

  /*Shadow*/
  box-shadow: 0px 2px 2px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.5);

  > div {
    min-width: 100%;
    padding: 115px 180px;
    display: flex;
    flex-direction: row;
  }

  img {
    padding: 10px;
    margin-top: 60px;
    margin-right: 50px;
    max-width: 450px;
    max-height: 450px;
  }

  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    padding: 0;
    justify-content: center;

    > div {
    flex-direction: row;
    padding: 25px 25px;
  }

    img {
      max-width: 0px;
      max-height: 0px;
      display: none;
      padding: 0;
      margin: 0;
    }
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Raleway-Thin;
    font-size: 64px;
    margin: 10px;
    margin-bottom: 28px;
    text-align: right;
  }

  p {
    font-family: Raleway-Medium;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8;
    text-indent: 50px;
    margin-bottom: 30px;
  }

  span {
    color: #d24a00;
  }

  @media (max-width: 450px) {
    h1 {
      font-family: Raleway-Thin;
      font-size: 34px;
      margin-bottom: 28px;
      text-align: right;
    }
  }
`;
