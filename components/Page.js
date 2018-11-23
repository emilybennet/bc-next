import React from "react";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  // brand primary
  cyan: "#6ED2FA",
  magenta: "#96288C",
  violet: "#5A3791",
  blue: "#192855",
  orange: "#F68B28",

  // brand secondary
  azure: "#3C87C8",
  yellow: "#FFEB5F",
  green: "#87C88C",
  cerulean: "#37559B",
  gold: "#FFC30F",
  purple: "#9B4B96",
  pink: "#D291BE",
  rust: "#F0641E",

  // "secrets" theme
  abyss: "#071318",
  aqua: "#39FFF6",
  black: "#000000",
  indigo: "#3B1872",
  lavender: "#7C58B5",
  midnight: "#131D35",
  ruby: "#F73E69",
  turquoise: "#1FB3AC",
  white: "#FFFFFF",
  deepAbyss: "#08252F", //page

  // font stacks
  poppins: '"Poppins", Helvetica, Arial, sans-serif',
  plex: '"IBM Plex Mono", monospace',

  maxWidth: "1040px"
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('/static/fonts/IBMPlexMono-Text-Latin1.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('/static/fonts/IBMPlexMono-LightItalic-Latin1.woff2') format('woff2');
    font-weight: 300; /* light */
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/poppins-v5-latin-regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/poppins-v5-latin-italic.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/poppins-v5-latin-300.woff2') format('woff2');
    font-weight: 300; /* light */
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/poppins-v5-latin-600.woff2') format('woff2');
    font-weight: 600; /* semi */
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/poppins-v5-latin-700.woff2') format('woff2');
    font-weight: 700; /* bold */
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props => props.theme.deepAbyss};
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.poppins};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: normal;
    line-height: 1.8;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    body {
      font-size: 1.2rem;
    }
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
