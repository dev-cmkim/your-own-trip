// global-style.ts
import { createGlobalStyle } from 'styled-components';

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
  /*Noto Sans Kr */
  @font-face {
      font-family:'NotoSansCJKkr-regular';
      font-weight: 400;
      src: url('../font/NotoSansCJKkr-Regular.eot');
      src: url('../font/NotoSansCJKkr-Regular.otf');
      src: url('../font/NotoSansCJKkr-Regular.eot?#iefix') format('embedded-opentype');,
      url('../font/NotoSansCJKkr-Regular.woff') format('woff'),
  }
  @font-face {
      font-family:'NotoSansCJKR-medium';
      font-weight: 600;
      src: url('../font/NotoSansCJKkr-Medium.eot');
      src: url('../font/NotoSansCJKkr-Medium.otf');
      src: url('../font/NotoSansCJKkr-Medium.eot?#iefix') format('embedded-opentype');,
      url('../font/NotoSansCJKkr-Medium.woff') format('woff'),
  }
  @font-face {
      font-family:'NotoSansCJKkr-Bold';
      font-weight: 700;
      src: url('../font/NotoSansCJKkr-Bold.eot');
      src: url('../font/NotoSansCJKkr-Bold.otf');
      src: url('../font/NotoSansCJKkr-Bold.eot?#iefix') format('embedded-opentype');,
      url('../font/NotoSansCJKkr-Bold.woff') format('woff'),
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  main {
    padding: 40px;
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
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4a728f;
    color:#fff;
    border: 2px solid #4a728f;
    font-size: 20px;
    font-weight: bold;
    outline:none;
    border:none;
    border-radius:20px;
  }
  .btn-disabled {
    width: 120px;
    height: 40px;
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: bold;
    outline:none;
    border:none;
    border-radius:20px;
    background-color: #ddd;
  }
  .btn-start:hover {
    background-color: #fff;
    color:#4a728f;
    border: 2px solid #4a728f;
    transition: all ease 0.5s 0s;
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
  // 지역선택
  .map-wrapper {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
