import { createGlobalStyle, css } from 'styled-components';

export const Normalize = css`
  /* SCROLLBAR */

  /* total width */
  *::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 7px;
  }

  /* background of the scrollbar except button or resizer */
  *::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: transparent;
    background-color: rgba(0, 0, 0, 0.03);
  }
  *::-webkit-scrollbar-track:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* scrollbar itself */
  *::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 6px;
    border: 5px solid transparent;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
  }

  /* set button(top and bottom of the scrollbar) */
  *::-webkit-scrollbar-button {
    display: none;
  }

  /* SCROLLBAR */

  * {
    margin: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  body {
    overflow-y: hidden;
  }

  html {
    background: ${({ theme }) => theme.colors.accent[200]};
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline: 0;
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 0;
  }

  hr {
    height: 0;
    box-sizing: content-box;
  }

  pre {
    overflow: auto;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    background: #fff;
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    outline: 0;
    padding: 0;
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
    padding: 0;
  }

  button[disabled],
  html input[disabled] {
    cursor: no-drop;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
    border: 0;
  }

  input[type='checkbox'],
  input[type='radio'] {
    padding: 0;
    box-sizing: border-box;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  input[type='search'] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
    min-width: 0;
  }

  legend {
    border: 0;
    padding: 0;
  }

  textarea {
    border: none;
    overflow: auto;
  }

  optgroup {
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  address {
    font-style: normal;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    line-height: 1;
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Normalize}

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
