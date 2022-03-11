import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../src/images/11-01.png";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #e91e63, #ff9800);

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: #6bdb6a;
    border: none;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: larger;
  }
  .start {
    max-width: 200px;
  }
`;
