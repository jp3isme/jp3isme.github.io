import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyleStyle = createGlobalStyle`

    * {
        overflow: hidden;
    }

    html, body {
        background-color: ${(props) => props.theme.foreground};
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
        transition: 0.2s;
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

    .box {
        border-radius: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
        margin: 1.5rem 10px 0 10px;
        border: 1px solid ${(props) => props.theme.foregroundBorder};
        background-color: ${(props) => props.theme.foreground};
        padding: 1.5rem;
    }

    .transition {
        transition: 0.2s;
    }
`;

const GlobalStyleTransition = createGlobalStyle`

    * {
        overflow: hidden;                
        background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    html, body {
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
        transition: 0.200s;
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
        border: 1px solid ${(props) => props.theme.foregroundBorder};
        background-color: ${(props) => props.theme.foreground};
        padding: 1.5rem;
    }

    .transition {
        transition: 0.200s;
    }

    #body {
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;

        -webkit-animation: rainbow 4s ease infinite;
        -z-animation: rainbow 4s ease infinite;
        -o-animation: rainbow 4s ease infinite;
        animation: rainbow 4s ease infinite;
    }

    @-webkit-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-moz-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-o-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @keyframes rainbow { 
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
`;

export function GlobalStyle(props) {
    return <GlobalStyleStyle />;
}
export function GlobalTransition(props) {
    return <GlobalStyleTransition />;
}
