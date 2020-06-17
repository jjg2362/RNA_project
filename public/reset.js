import { createGlobalStyle } from "styled-components";
import { BLACK } from "./color";
import { TEXT_S, TITLE_S } from "./font";

export const GlobalStyle = createGlobalStyle`
/* 여백 초기화 */
body,div,ul,li,dl,dd,dt,ol,h1,h2,h3,h4,h5,h6,input,fieldset,legend,p,select,table,th,td,tr,textarea,button,form,figure,figcaption{margin:0; padding:0; font-family:'Noto Sans KR', sans-serif; color: ${BLACK}; font-size: ${TEXT_S}; line-height: 1.5;}
/* a 링크 초기화 */
a {color: ${BLACK}; text-decoration: none; cursor: pointer;}
/* 폰트 스타일 초기화 */
em,address {font-style: normal;}
/* 블릿기호 초기화 */
ul,li,ol {list-style:none;}
/* 제목 태그 초기화 */
h1,h2,h3,h4,h5,h6 {font-size: ${TITLE_S}; font-weight: normal;}
/* 테두리 초기화 */
img,fieldset {border:0 none; display: block;}
/* 버튼 초기화 */
button {border: 0;}
`;
