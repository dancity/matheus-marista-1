import styled from "styled-components";
import bgimage from "../../assets/images/quote.svg";

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

  div:first-child {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    //padding: 115px 180px;
  }

  p {
    font-family: Raleway-Medium;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8;
    text-indent: 50px;
    margin-bottom: 30px;
  }

  h1 {
    text-align: right;
    font-family: Raleway-Thin;
    font-size: 64px;
    margin: 10px;
    margin-bottom: 28px;
    max-width: 500px;
  }

  span {
    color: #d24a00;
  }

  h2 {
    font-family: Raleway-Thin;
    font-size: 16px;
    text-align: right;
    line-height: 1.8;
    text-indent: 0;
    margin-bottom: 30px;
    color: #b8b8b8;
  }

  hr {
    align-self: stretch;
    border: 1px solid #b8b8b8;
    opacity: 0.1;
  }

  // Mobile
  @media (max-width: 730px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div:first-child {
      width: 100%;
      padding: 0;
    }

    > div {
      padding: 25px 25px;
    }

    h1 {
      font-size: 34px;
      margin: 10px;
    }

    h2 {
      color: #b8b8b8;
      font-family: Raleway-Thin;
      text-align: center;
      padding-top: 25px;
    }
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: 100px;
  background-position-x: 100px;

  img {
    border: 2px solid #b8b8b8;
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
    margin-right: 50px;
  }

  @media (max-width: 730px) {
    background-position-x: 0;
  }
`;

export const Person = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin: 25px 5px 15px 0px;

  img {
    border: 2px solid #b8b8b8;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
