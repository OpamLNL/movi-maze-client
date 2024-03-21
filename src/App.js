import React, {useEffect, useState} from 'react';

import {Navigate, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

import css from './App.module.css';

import { MainLayout } from './layouts';
import { Header, RightSidebar, LeftSidebar } from './components';
import { SectionContainer} from './components/Containers';
import { ThemeContext } from './themes/theme-context';
import { lightTheme, darkTheme } from './themes/theme';

import { LanguageProvider } from './language/language-context';
import {GameLayout} from "./layouts/GameLayout";
import {SignUpLayout} from "./layouts/SignUpLayout";
import Paper from "@mui/material/Paper";

const App = () => {

        const [theme, setTheme] = useState(darkTheme);

        const toggleTheme = () => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
        };



    return (
        <Provider store={store}>
            <LanguageProvider>
                <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <div className={css.mainContent}>
                        <SectionContainer >
                        <div className={css.mainContainer}>
                            <div className={css.mainContainerSides}>
                                <LeftSidebar />
                            </div>
                            <div className={css.mainContainerCenter}>
                                <SectionContainer>
                                    <Routes>
                                        <Route index element={ <Navigate to={'home'} /> } />
                                        <Route path={'home'} element={<MainLayout/>}/>
                                        <Route index element={ <Navigate to={'games'} /> } />
                                        <Route path={'games'} element={<GameLayout/>}/>


                                        <Route index element={ <Navigate to={'sign-up'} /> } />
                                        <Route path={'sign-up'} element={<SignUpLayout/>}/>
                                    </Routes>
                                </SectionContainer>
                            </div>
                            <div className={css.mainContainerSides}>
                                <RightSidebar />
                            </div>
                        </div>
                        </SectionContainer>
                    </div>

                </ThemeProvider>
                </ThemeContext.Provider>
            </LanguageProvider>
        </Provider>
    );
}

export {App};