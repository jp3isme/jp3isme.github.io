import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import {
    lightTheme as lightTheme,
    darkTheme2 as darkTheme,
} from './theme/Themes';
import Header from './Components/Sections/Header';
import EduPage from './Pages/EduPage';
import ProjectPage from './Pages/ProjectPage';
import Footer from './Components/Sections/Footer';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

const Body = styled.div`
    background: ${(props) => props.theme.background};
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100%;
    color: ${(props) => props.theme.textPrimary};
`;

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

    let toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGA.set({ page: history.location.pathname }); // Update the user's current page
        ReactGA.pageview(history.location.pathname); // Record a pageview for the given page
    }, [time]);

    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Body className="transition" id="body">
                        <Header
                            className="transition"
                            img={process.env.PUBLIC_URL + `./me_white.png`}
                            text={'John-Michael H. Smith'}
                            bg={'rgb(156,190,228)'}
                            toggleTheme={toggleTheme}
                        />

                        <Switch>
                            <Route path="/about" component={AboutPage} />
                            <Route path="/" exact={true} component={HomePage} />
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
