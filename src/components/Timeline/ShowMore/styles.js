import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  h1 {
    text-align: center;
    color: black;
    font-size: 18px;
  }

  ul {
    font-family: Raleway-Medium;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`;
