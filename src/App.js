import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTransition } from './theme/globalStyle';
import { lightTheme, darkTheme } from './theme/Themes';
import Header from './Components/Sections/Header';
import Bio from './Components/Sections/Bio';
import Links from './Components/Sections/Links';
import Education from './Components/Sections/Education';
import EduPage from './Pages/EduPage';
import Projects from './Components/Sections/Projects';
import ProjectPage from './Pages/ProjectPage';
import Footer from './Components/Sections/Footer';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const Body = styled.div`
    background: ${(props) => props.theme.background};
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100%;
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
        text: 'Resume',
        link: process.env.PUBLIC_URL + `./John-Michael_Smith_Resume_S2020.pdf`,
    },
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
];

const contacts = {
    email: 'jp3isme@gmail.com',
    phone: '(678) 943-5352',
};

// Google Analytics setup
//
//

const __TrackingId = 'UA-84583479-1';
const __Options = {
    debug: true,
    gaOptions: {
        userId: 123,
        siteSpeedSampleRate: 100,
    },
};
ReactGA.initialize(__TrackingId, __Options);
ReactGA.ga('set', 'checkProtocolTask', null);

const history = createBrowserHistory();

function App() {
    const time = new Date().getHours();
    const [theme, setTheme] = useState(
        time > 7 && time < 21 ? lightTheme : darkTheme
    );
    const [clicks, setClicks] = useState(0);
    const [global, setGlobal] = useState(0);

    let toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
        rainbowEffect();
    };

    let rainbowEffect = async () => {
        if (clicks >= 5) {
            setGlobal(1);
            await sleep(5000);
            setGlobal(0);
            setClicks(0);
        } else {
            //setClicks(clicks + 1);
        }
    };

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGA.set({ page: history.location.pathname }); // Update the user's current page
        ReactGA.pageview(history.location.pathname); // Record a pageview for the given page
    }, [time]);

    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={theme}>
                    {global === 0 ? <GlobalStyle /> : <GlobalTransition />}
                    <Body className="transition" id="body">
                        <Header
                            className="transition"
                            img={process.env.PUBLIC_URL + `./me_white.png`}
                            text={'j-mhs.com'}
                            bg={'rgb(156,190,228)'}
                            toggleTheme={toggleTheme}
                        />

                        <Switch>
                            <Route path="/about">
                                <Div className="container">
                                    <Bio
                                        img={
                                            process.env.PUBLIC_URL +
                                            `./me_white.png`
                                        }
                                        bg={''}
                                    />
                                </Div>
                            </Route>
                            <Route path="/" exact={true}>
                                <Div className="container">
                                    <Bio
                                        img={
                                            process.env.PUBLIC_URL +
                                            `./me_white.png`
                                        }
                                        bg={''}
                                    />
                                    <Links
                                        socials={socials}
                                        contacts={contacts}
                                    />
                                </Div>
                                <Education />
                                <Projects />
                            </Route>
                            <Route path="/education" component={EduPage} />
                            <Route path="/projects" component={ProjectPage} />
                        </Switch>

                        <Footer
                            text={'© 2020 John-Michael H. Smith'}
                            email={'jp3isme@gmail.com'}
                            resume={
                                process.env.PUBLIC_URL +
                                `./John-Michael_Smith_Resume_S2020.pdf`
                            }
                        />
                    </Body>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
