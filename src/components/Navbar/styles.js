import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50px;
  position: fixed;
  background: none;
`;

export const Navigation = styled.div`
  background-color: rgba(72, 72, 72, 0.6);
  padding: 10px;
  border-radius: 0 15px 15px 0;

  svg {
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
