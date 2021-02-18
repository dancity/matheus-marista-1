import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222222;
  align-items: center;
  justify-content: center;
  padding: 25px;
  height: 100vh;

  h1 {
    color: whitesmoke;
    font-family: Raleway-Thin;
    margin: 25px;
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