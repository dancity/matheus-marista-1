import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222222;
  align-items: center;
  justify-content: center;
  padding: 25px;
  min-height: 100vh;

  /*Shadow*/
  box-shadow: 0px 2px 2px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.5);

  img {
    max-width: 100%;
    max-height: 100%;
  }

  h1 {
    color: whitesmoke;
    font-family: Raleway-Medium;
    font-size: 60px;
    margin: 10px;
  }

  h2 {
    color: whitesmoke;
    font-family: Raleway-Thin;
    font-size: 36px;
    margin-bottom: 60px;
  }

  h3 {
    color: whitesmoke;
    font-family: Raleway-Thin;
    margin: 25px;
  }

  span {
    color: #d24a00;
  }

  svg {
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: whitesmoke;
  }
`;

export const CardsContainer = styled.div`
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;
