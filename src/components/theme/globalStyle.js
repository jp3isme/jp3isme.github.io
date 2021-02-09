import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyleStyle = createGlobalStyle`

    * {
        overflow: visible;
    }

    html, body {
        background-color: ${props => props.theme.foreground};
        overflow: visible !important;
        /*height: 100%;*/
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
        font-family: 'Maven Pro', sans-serif;
        font-family: -apple-system, BlinkMacSystemFont, 'segoe ui','Roboto','helvetica neue','Arial',
        'noto sans','sans-serif','apple color emoji','segoe ui emoji','segoe ui symbol','noto color emoji';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        //transition: 0.2s;
    }

    .body {
        background-color: ${props => props.theme.background};
        overflow: hidden;
    }

    ::selection {
        background: #fff2a8; /* WebKit/Blink Browsers */
        color: black;
      }
      ::-moz-selection {
        background: #fff2a8; /* Gecko Browsers */
        color: black
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .container {
        width: calc(100% - 3rem + 20px);

        max-width: 960px;
        margin: 0 auto;
        @media (min-width: 576px) {
            max-width: 540px;
        }
        @media (min-width: 768px) {
            max-width: 720px;
        }
        @media (min-width: 992px) {
            max-width: 960px;
        }
        @media (min-width: 1200px) {
            max-width: 1140px;
        }
    }

    .padded-bottom {
        padding-botton: 1.5rem;
    }

    h1 {
        font-weight: ${props => props.theme.h1weight};    
        color: ${props => props.theme.textPrimary};
    }

    .box {
        border-radius: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
        margin: 1.5rem 10px 0 10px;
        padding: 1.5rem;
    }
    
    .box, .box_colors {
        border: 1px solid ${props => props.theme.foregroundBorder};
        background-color: ${props => props.theme.foreground};
        box-shadow: ${props => props.theme.boxShadow};
        color: ${props => props.theme.textSecondary};
    }
    
    .footer {
        color: ${props => props.theme.textSecondary};
        background-color: ${props => props.theme.foreground};
        box-shadow: 0 100vh 0 100vh ${props => props.theme.foreground};
        border-top: 1px solid ${props => props.theme.foregroundBorder};
    }

    .transition {
        transition: 0.2s;
    }

    .primaryText {
        color: ${props => props.theme.textPrimary}
    }

    .tag {
        color: ${props => props.theme.textHighlight};
        background-color: ${props => props.theme.mutedSecondary};

        &:hover {
            color: ${props => props.theme.buttonTextHover};
            background-color: ${props => props.theme.buttonHover};
        }
    }

    .skilltag {
        color: ${props => props.theme.textSkillTag};
        background-color: ${props => props.theme.skillTag};
    }

    .button {
        color: ${props => props.theme.buttonText};
        background-color: ${props => props.theme.button};
        border: 1px solid ${props => props.theme.foregroundBorder};
        box-shadow: ${props => props.theme.boxShadow};
      
        &:hover {
          background-color: ${props => props.theme.buttonHover};
          
        }
    }

    .edu_crest {
        filter: ${props => props.theme.edu_crest}
    }

    .img {
        background-color: ${props => props.theme.background}
    }

    .imgBorder {
        border: 4px solid ${props => props.theme.secondary};
    }
`

export function GlobalStyle(props) {
  return <GlobalStyleStyle />
}
