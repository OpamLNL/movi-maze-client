import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

import css from './App.module.css';

import {MainLayout, GameLayout, NewsLayout, SignInLayout, SignUpLayout} from './layouts';
import {Header, LeftSidebar, ServiceBar, SectionContainer} from './components';
import {ThemeContext} from './themes/theme-context';
import {lightTheme, darkTheme} from './themes/theme';

import {LanguageProvider} from './language/language-context';
import {ServiceSidebar} from "./components/ServiceSidebar/ServiceSidebar";

export const App = () => {

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

                    <div className={css.main}>
                            <div className={css.mainContent}>
                                <Header />
                                <ServiceBar />

                                            <div className={css.mainContainer}>
                                                <div className={css.mainContainerSides}>
                                                    <LeftSidebar />
                                                </div>
                                                <div className={css.mainContainerCenter}>
                                                    <SectionContainer>
                                                        <Routes>
                                                                <Route index element={<Navigate to={'home'} />} />
                                                                <Route path={'home'} element={<MainLayout />} />
                                                                <Route path={'games'} element={<GameLayout />} />
                                                                <Route path={'news'} element={<NewsLayout />} />
                                                                <Route path={'sign-up'} element={<SignUpLayout />} />
                                                                <Route path={'sign-in'} element={<SignInLayout />} />
                                                        </Routes>
                                                    </SectionContainer>
                                                </div>

                                            </div>
                            </div>

                        <ServiceSidebar />
                    </div>
                </ThemeProvider>
                </ThemeContext.Provider>
            </LanguageProvider>
        </Provider>
    );
}
