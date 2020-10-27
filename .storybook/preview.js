import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themes } from '@storybook/theming';

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
  gold: "#FBD71C",
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

const basePath = '';
const fontPath = filename => `${basePath}/fonts/${filename}`;
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url(${fontPath("IBMPlexMono-Text-Latin1.woff2")}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url(${fontPath("IBMPlexMono-LightItalic-Full.woff2")}) format('woff2');
    font-weight: 300; /* light */
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${fontPath("poppins-v5-latin-regular.woff2")}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${fontPath("poppins-v5-latin-italic.woff2")}) format('woff2');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${fontPath("poppins-v5-latin-300.woff2")}) format('woff2');
    font-weight: 300; /* light */
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${fontPath("poppins-v5-latin-600.woff2")}) format('woff2');
    font-weight: 600; /* semi */
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${fontPath("poppins-v5-latin-700.woff2")}) format('woff2');
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

    /* background-image:  */
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
  ::selection {
    background-color: ${props => props.theme.sapphire};
    color: ${props => props.theme.abyss};
  }
  @media (max-width: 600px) {
    body {
      font-size: 1.2rem;
    }
  }
 
`;



export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
      <svg
        style={{
          colorInterpolationFilters: "sRGB",
          width: 0,
          height: 0
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
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
}