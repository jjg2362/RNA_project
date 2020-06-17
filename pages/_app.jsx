import React from "react";
import Head from "next/head";
import propTypes from "prop-types";

import wrapper from "../store/configureStore";
import { GlobalStyle } from "../public/reset";

const RNA = ({ Component }) => {
  return (
    <> 
      <Head>
        <title>RNA</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&amp;subset=korean"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component />
    </>
  );
};

RNA.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(RNA);
