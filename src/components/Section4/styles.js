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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 80%;
    //padding: 115px 180px;
  }

  h1 {
    text-align: right;
    font-family: Raleway-Thin;
    font-size: 64px;
    margin: 10px;
    margin-bottom: 28px;
    max-width: 600px;
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
  @media (max-width: 730px) {
    width: 100%;
    display: flex;
    padding: 0;
    justify-content: center;

    > div {
      width: 100%;
      padding: 25px 25px;
    }

    h1 {
      font-size: 34px;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  p:last-child {
    text-indent: 0;
  }

  h2 {
    color: #d24a00;
    font-family: Raleway-Thin;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8;
    margin-bottom: 10px;
  }

  span {
    display: inline-block;
    white-space: nowrap;
    color: white !important;

    background-color: #858585;
    border-radius: 28px;
    padding: 2px 10px 2px 10px;
    margin: 5px;
  }

  span:first-child {
    margin: 5px 0px;
  }
`;
