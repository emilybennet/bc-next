import React from "react";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  cyan: "#6ED2FA",
  magenta: "#96288C",
  violet: "#5A3791",
  blue: "#192855",
  orange: "#F68B28",

  azure: "#3C87C8",
  yellow: "#FFEB5F",
  green: "#87C88C",
  cerulean: "#37559B",
  gold: "#FFC30F",
  purple: "#9B4B96",
  pink: "#D291BE",
  rust: "#F0641E",

  proxima: '"Proxima Nova", Helvetica, Arial, sans-serif'
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: url('/static/fonts/proxima_nova-regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Proxima Nova';
    src: url('/static/fonts/proxima_nova-regular-italic.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Proxima Nova';
    src: url('/static/fonts/proxima_nova-bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Proxima Nova';
    src: url('/static/fonts/proxima_nova-bold-italic.woff2') format('woff2');
    font-weight: bold;
    font-style: italic;
  }
  /* @font-face {
    font-family: 'Museo Slab';
    src: url('/static/fonts/museo_slab-700.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Museo Slab';
    src: url('/static/fonts/museo_slab-700-italic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  } */

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props =>
      props.theme.violet} url('/static/images/bc-patterns-violet.png') repeat;
    font-family: ${props => props.theme.proxima};
  }
  a {
    text-decoration: none;
  }
 
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>BronyCon 2019</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      {props.children}
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default Page;
