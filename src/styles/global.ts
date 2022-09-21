import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #FFFFFF;

    --red: #E52E4D;
    --green: #33CC95;
    
    --purple: #5429cc;
    --purple-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    overflow-x: hidden;
  }

  html {
    // font-size: 16px (Desktop) - Accessibility rules
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }
`