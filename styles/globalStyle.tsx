// global-style.ts
import { createGlobalStyle } from 'styled-components';

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
  /* 그밖에 글로벌 스타일 작성하기  */
  html,body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  //title
  .title-text1, .title-text2 {
    font-size:36px;
    text-align: center;
    font-weight: bold;
    color:#4a728f;
    flex-direction: row;
  }
  .title-text2 {
    font-size:20px;
    transition: all ease 2s 0s;
  }
  .init-main {
    padding: 100px 20px;
    display: flex;
    flex-direction: column;
  }
  .btn-start {
    width: 120px;
    height: 40px;
    position: fixed;
    border: ;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4a728f;
    color:#fff;
    font-size: 20px;
    font-weight: bold;
    outline:none;
    border:none;
    border-radius:20px;
  }
  .btn-start:hover {
    background-color: #fff;
    color:#4a728f;
    border: 2px solid #4a728f
    transition: all ease 2s 0s;
  }
  .txt-r {
    text-align: right;
  }
  .txt-l {
    text-align: left;
  }
  p {
    margin: 0;
  }
`;
