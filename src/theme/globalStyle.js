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

export function GlobalStyle(props) {
    return <GlobalStyleStyle />;
}