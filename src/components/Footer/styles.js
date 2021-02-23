import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  min-width: 100%;

  h1 {
    color: #000;
    font-family: Raleway-Medium;
    font-size: 28px;
    margin: 10px;
  }

  @media (max-width: 450px) {
    min-height: 200px;

    h1 {
    color: #000;
    font-family: Raleway-Medium;
    font-size: 20px;
    margin: 10px;
  }
  }
`;

export const ThanksContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #d24a00;
  width: 100%;
  text-align: center;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: #2c2c2c;
  width: 100%;
  padding-right: 30px;

  p {
    color: #fff;
    font-family: Raleway-Medium;
    margin-top: 6px;

  a {
      color: #fff;
      font-family: Raleway-Medium;
      margin-top: 6px;
    }
  }

  @media (max-width: 450px) {
      padding: 15px;
      p {
        font-size: 14px;
        margin-top: 4px;
      }

      a {
      color: #fff;
      font-family: Raleway-Medium;
      margin-top: 6px;
      font-size: 14px;
      }

    }
`;
