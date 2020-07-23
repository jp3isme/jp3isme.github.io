import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle, { lightTheme, darkTheme } from './theme/globalStyle';
import Header from './Components/Header';
import Bio from './Components/Bio';
import Links from './Components/Links';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const Body = styled.body`
    background: ${(props) => props.theme.background};
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.textPrimary};
`;

const Div = styled.div`
    padding: 0;
    margin: 0;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const socials = [
    {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/john-michael-smith',
    },
    {
        text: 'GitHub',
        link: 'https://github.com/jp3isme',
    },
    {
        text: 'Instagram',
        link: 'https://www.instagram.com/Jp3isme',
    },
    {
        text: 'Twitter',
        link: 'https://twitter.com/Jp3isme',
    },
    {
        text: 'GoodReads',
        link: 'https://www.goodreads.com/user/show/64860063-john-michael-smith',
    },
    {
        text: 'Resume',
        link: process.env.PUBLIC_URL + `./John-Michael_Smith_Resume_S2020.pdf`,
    },
];

const contacts = {
    email: 'jp3isme@gmail.com',
    phone: '(678) 943-5352',
};

function App() {
    let [time, setTime] = useState(new Date().getHours());
    let [theme, setTheme] = useState(
        time > 7 && time < 21 ? lightTheme : darkTheme
    );

    useEffect(() => {
        setTime(new Date().getHours());
        setTheme(time > 7 && time < 21 ? lightTheme : darkTheme);
    }, []);

    return (
        <div className="App">
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Body>
                    <Header
                        img={process.env.PUBLIC_URL + `./me_white.png`}
                        text={'j-mhs.com'}
                        bg={'rgb(156,190,228)'}
                    />
                    <Div className="container">
                        <Bio
                            img={process.env.PUBLIC_URL + `./me_white.png`}
                            bg={''}
                        />
                        <Links socials={socials} contacts={contacts} />
                    </Div>
                    <Education />
                    <Projects />
                    <Footer text={'© 2020 John-Michael Smith'} />
                </Body>
            </ThemeProvider>
        </div>
    );
}

export default App;
