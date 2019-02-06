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
  white: "#CCFBF5",
  deepAbyss: "#08252F", //page
  sapphire: "hsl(100, 100%, 75%)",

  // font stacks
  poppins: '"Poppins", Helvetica, Arial, sans-serif',
  plex: '"IBM Plex Mono", monospace',

  maxWidth: "1060px",
  gridColumns: "repeat(12, 1fr)",
  gridGap: "20px"
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
    src: url('/static/fonts/IBMPlexMono-LightItalic-Full.woff2') format('woff2');
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

    background-image: 
      radial-gradient(circle at 50% 50%, rgba(120, 250, 245, .1) 0, transparent 100%), 
      repeating-linear-gradient(transparent, transparent 5px, rgba(0, 0, 0, .15) 10px, rgba(0, 0, 0, .15) 10px), 
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, .2) 0, transparent 2px);
    background-size: cover, 50px 50px, 100px 100px;
    background-repeat: no-repeat, repeat, repeat;
    background-attachment: fixed, fixed, scroll;
  }
  a {
    cursor: pointer;
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

        <meta name="twitter:site" content="@bronycon" />
        <meta property="og:title" content="BronyCon 2019" />
        <meta
          property="og:description"
          content="Join us for the final BronyCon in Baltimore, Maryland on August 1–4, 2019"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bronycon.org" />
        <meta
          property="og:image"
          content="https://bronycon.org/static/images/opengraph.png"
          key="opengraphImage"
        />
        <link
          href="https://plus.google.com/117749353168703446152"
          rel="publisher"
        />
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <svg
        style={{
          colorInterpolationFilters: "sRGB",
          width: 0,
          height: 0,
          display: "none"
        }}
      >
        <filter id="lcd_duotone">
          <feColorMatrix
            type="matrix"
            values="0 0.22 0 0 0 
                    0 1 0 0 0 
                    0 0.96 0 0 0 
                    0 0 0 1 0"
          />
        </filter>
      </svg>
      {props.children}
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default Page;
