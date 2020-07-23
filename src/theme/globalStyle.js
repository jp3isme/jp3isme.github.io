import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyleStyle = createGlobalStyle`

    * {
        overflow: auto;
    }

    html, body {
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

    .box {
        border-radius: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
        margin: 1.5rem 10px 0 10px;
    }
`;
export default function GlobalStyle(props) {
    return <GlobalStyleStyle />;
}

export const lightTheme = {
    background: 'rgb(21,19,32)',
    foreground: 'rgb(34,33,45)',
    textPrimary: 'rgb(242,242,242)',
    textHighlight: 'rgb(148,128,255)',
    textHighlightShadow: 'rgba(148,128,255,0.1)',
    textSecondary: 'rgb(153,153,153)',
    secondary: 'rgb(148,128,255)',
    mutedSecondary: '#2b2640',
    button: 'rgb(148,128,255)',
    buttonHover: '#ff80bf',
    skillTag: 'rgb(35, 46, 44)',
    textSkillTag: 'rgb(119, 203, 185)',
};

export const darkTheme = {
    background: 'rgb(21,19,32)',
    foreground: 'rgb(34,33,45)',
    textPrimary: 'rgb(242,242,242)',
    textHighlight: 'rgb(148,128,255)',
    textHighlightShadow: 'rgba(148,128,255,0.1)',
    textSecondary: 'rgb(153,153,153)',
    secondary: 'rgb(148,128,255)',
    mutedSecondary: '#2b2640',
    button: 'rgb(148,128,255)',
    buttonHover: '#ff80bf',
    buttonText: 'black',
    skillTag: 'rgb(35, 46, 44)',
    textSkillTag: 'rgb(119, 203, 185)',
};
