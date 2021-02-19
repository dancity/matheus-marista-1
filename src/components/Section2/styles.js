import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222222;
  align-items: center;
  justify-content: center;
  padding: 25px;
  min-height: 100vh;
  color: whitesmoke;

  img {
    float: left;
    padding: 10px;
    margin-top: 60px;
    max-width: 100%;
    max-height: 100%;
  }

  div {
    max-width: 70%;
    margin: auto;
  }

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
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
`;
